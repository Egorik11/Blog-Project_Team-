import React from 'react'

export default props => {
  const onClickHandler = () => {
    const isEnd = props.totalPosts / props.page < props.limit
    props.setState({
      limitMore: props.limit + props.limitMore,
      totalPosts: isEnd ? props.totalPosts : props.totalPosts - props.limit,
    })
  }

  return (
    <div className="uk-margin">
      <button
        className="uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom"
        onClick={onClickHandler}
      >
        Load more
        {/* <div className="uk-margin-small-left" uk-spinner="ratio: 0.6" /> //Анимация загрузки */}
      </button>
    </div>
  )
}
