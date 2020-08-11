import React, { Component } from 'react'
import Header from '../../components/Header/Header'
import Main from '../../components/Main/Main'
import axios from '../../axios/axios'

export default class Blog extends Component {
  state = {
    posts: [],
    totalPosts: 0,
    currentPage: 1,
    startFrom: 0,
    filterLimit: 6,
    limitMore: 6,
    sortBy: 'asc',
    loading: true,
    searching: false,
    searchValue: '',
  }

  async getPosts() {
    try {
      const url = !this.state.searching
        ? `posts?_sort=title&_order=${this.state.sortBy}&_start=${this.state.startFrom}&_limit=${this.state.limitMore}`
        : `posts?title_like=${this.state.searchValue}&_sort=title&_order=${this.state.sortBy}&_start=${this.state.startFrom}&_limit=${this.state.limitMore}`
      const posts = (await axios.get(url)).data

      this.setState({
        posts,
      })

      setTimeout(() => {
        this.setState({
          loading: false,
        })
      }, 700)
    } catch (e) {
      console.log(e)
    }
  }

  async getTotalPagesLength() {
    try {
      const totalPosts = !this.state.searching
        ? (await axios.get('posts')).data.length
        : (await axios.get(`posts?title_like=${this.state.searchValue}`)).data.length

      this.setState({
        totalPosts,
      })
    } catch (e) {
      console.log(e)
    }
  }

  getTotalPages = () => {
    return this.state.filterLimit > this.state.totalPosts
      ? 1
      : Math.ceil(this.state.totalPosts / this.state.filterLimit)
  }

  componentDidMount() {
    this.getPosts()
    this.getTotalPagesLength()
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.sortBy !== this.state.sortBy || prevState.limitMore !== this.state.limitMore) {
      this.getPosts()
    }

    if (
      prevState.currentPage !== this.state.currentPage ||
      prevState.filterLimit !== this.state.filterLimit
    ) {
      this.getPosts()
      this.getTotalPagesLength()
    }
  }

  render() {
    return (
      <>
        <Header />
        <Main
          posts={this.state.posts}
          totalPages={this.getTotalPages()}
          totalPosts={this.state.totalPosts}
          page={this.state.currentPage}
          limit={this.state.filterLimit}
          limitMore={this.state.limitMore}
          sortBy={this.state.sortBy}
          loading={this.state.loading}
          setState={this.setState.bind(this)}
        />
      </>
    )
  }
}
