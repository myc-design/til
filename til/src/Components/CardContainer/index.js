import React from 'react';
import './CardContainer.css';

function CardContainer() {
  return (
    <div>
      <div className="card-container">
        <div class="left-side">
          <div class="posts">
            <form action="" class="form-flex">
              <label
                class="input-field heading"
                htmlFor="title">
                Post Title
              </label>
              <input
                class="input-field"
                type="text"
                name="post-title"
              />
              <label
                class="input-field heading"
                htmlFor="content">
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
          <h4>25th December, 2020</h4>
          <h5>A very interesting post about computers</h5>
          <p class="box-shadow">
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Consequatur dolor tempora
            pariatur ipsa, iusto adipisci asperiores tenetur
            quo, provident neque rerum enim error mollitia,
            maxime incidunt! Quam voluptas in nam. Lorem
            ipsum dolor sit amet consectetur adipisicing
            elit. Consequatur dolor tempora pariatur ipsa,
            iusto adipisci asperiores tenetur quo, provident
            neque rerum enim error mollitia, maxime
            incidunt! Quam voluptas in nam.
          </p>
          <div class="social-media-icons"></div>
          <div class="social-media"></div>
        </div>
      </div>
    </div>
  );
}

export default CardContainer;
