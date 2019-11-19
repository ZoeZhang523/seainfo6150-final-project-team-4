import React, {Component}from 'react';
import './Banner.css';

class Banner extends Component {
  render() {
      return (
          <div className='banner'>
              <div className='banner_bar banner-big'>
                  <ul className='img_box'>
                      <li>
                          <a href='/'><img id='banner' src='//cms-www.chewy.com/contentAsset/raw-data/b8bec482-a0ba-43b6-9a79-c6ed1e18f08d/largeImage/2019_Holiday_1_HomepageHeroBanner_Large.jpg' alt='banner' /></a>
                      </li>
                  </ul>
              </div>
          </div>
      );
  }
}
export default Banner
