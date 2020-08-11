import React, { useState, useEffect } from 'react'
import axios from '../../../../axios/axios'

export default props => {
  const [value, setValue] = useState('')
  const [searching, setSearching] = useState(false)

  const onChangeHandler = event => {
    setValue(event.target.value.trim())
    props.setState({ loading: true, currentPage: 1 })
    setSearching(true)
  }

  const filterPosts = async () => {
    const allPosts = `posts?_sort=title&_order=${props.sortBy}&_page=${props.page}&_limit=${props.limit}`
    const searchPosts = `posts?title_like=${value}&_sort=title&_order=${props.sortBy}&_page=${props.page}&_limit=${props.limit}`
    const url = value.length !== 0 ? searchPosts : allPosts

    const posts = (await axios.get(url)).data
    const totalPosts = (await axios.get(`posts?title_like=${value}`)).data.length

    props.setState({
      posts,
      searching: value.length !== 0,
      currentPage: value.length !== 0 ? props.page : 1,
      searchValue: value,
      totalPosts,
    })

    setTimeout(() => {
      props.setState({
        loading: false,
      })
    }, 700)

    setSearching(false)
  }

  useEffect(() => {
    if (searching) {
      filterPosts()
    }
  })

  return (
    <form className="uk-search uk-search-default uk-width-medium uk-margin-remove uk-margin-right">
      <span data-uk-search-icon />
      {props.loading ? (
        <span className="uk-search-icon uk-search-icon-flip" uk-spinner="ratio: 0.6" />
      ) : null}
      <input
        className="uk-search-input"
        type="search"
        placeholder="Search..."
        onChange={onChangeHandler}
      />
    </form>
  )
}
