import React from 'react';
import '.PostTitle.css';

function PostTitle() {
  return (
    <div>
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
    </div>
  );
}

export default PostTitle;
