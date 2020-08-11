import React from 'react'

export default function PostItem() {
  return (
    <div>
      <div
        class="uk-card uk-card-default uk-margin-medium-bottom uk-child-width-1-2@s uk-grid-collapse uk-margin"
        data-uk-grid
      >
        <div class="uk-card-media-left uk-cover-container">
          <img src="https://picsum.photos/600/400" alt="" data-uk-cover />
          <canvas width="600" height="400"></canvas>
        </div>
        <div>
          <div class="uk-card-body">
            <h3 class="uk-card-title uk-margin-remove-bottom uk-flex uk-flex-middle uk-flex-between">
              Title <a href="/" class="uk-icon-link" data-uk-icon="heart"></a>
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt.
            </p>
            <a href="post.html" class="uk-button uk-button-text">
              Read more
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
