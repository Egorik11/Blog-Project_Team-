import React from 'react'

export default props => {
  const onChangeHandler = event => {
    props.setState({
      filterLimit: +event.target.value,
      limitMore: +event.target.value,
      currentPage: 1,
      loading: true,
    })
  }

  return (
    <select className="uk-select uk-width-small uk-margin-left" onChange={onChangeHandler}>
      <option value={6}>6</option>
      <option value={12}>12</option>
      <option value={24}>24</option>
    </select>
  )
}
