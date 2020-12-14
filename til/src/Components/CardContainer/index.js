import React from 'react';
import './CardContainer.css';

function CardContainer() {
  return (
    <div>
      <div className="card-container">
        <div class="left-side">
          <div class="posts">
            <form action="" class="form-flex">
              <label htmlFor="title">Title of Post</label>
              <input
                class="input-field"
                type="text"
                name="post-title"
              />
              <label htmlFor="content">
                Post Your Learning
              </label>
              <textarea
                class="input-field"
                rows="20"
                type="text"
                name="post-content"></textarea>
              <button>Submit</button>
            </form>
          </div>
        </div>

        <div class="feed">
          <h4>Title</h4>
          <p>Content</p>
          <div class="social-media-icons"></div>
          <p>social media icons</p>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
