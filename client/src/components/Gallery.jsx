import React from 'react';
import './gallery.css';

const Gallery = () => {
  return (
    <div className='gallery' id='gallery'>
        <h2 class="projectTitle">گالری</h2>
        <div class="picGrid">
          <i class="card pic1"></i>
          <i class="card pic2"></i>
          <i class="card pic3"></i>
          <i class="card pic4"></i>
          <i class="card pic5"></i>
        </div>
    </div>
  )
}

export default Gallery;