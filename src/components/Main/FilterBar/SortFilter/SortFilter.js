import React from 'react'

export default props => {
  const onChangeHandler = event => {
    props.setState({
      sortBy: event.target.value,
      loading: true,
    })
  }

  return (
    <select className="uk-select uk-width-small uk-margin-auto-left" onChange={onChangeHandler}>
      <option value="asc">ASC</option>
      <option value="desc">DESC</option>
    </select>
  )
}
