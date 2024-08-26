import React from 'react';
import './Timeline.css';
import India from '../img/india.png';
import Canada from '../img/canada.png';
import US from '../img/United_States.png';
function Timeline() {
  return (
    <div id='Timeline'>
    <div  className='Right-Timeline-container'>
      <img src={India} alt=''/>
      <section className='Timeline-item'>
        <h2>India</h2>
        <small>2022</small>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt habitasse mattis dapibus fames orci felis nullam turpis. Pulvinar scelerisque id vestibulum torquent faucibus sollicitudin placerat dignissim suscipit</p>
      </section>
      </div>
      <div className='Left-Timeline-container'>
      <img src={Canada} alt=''/>
      <section className='Timeline-item'>
        <h2>Canada</h2>
        <small>2023</small>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt habitasse mattis dapibus fames orci felis nullam turpis. Pulvinar scelerisque id vestibulum torquent faucibus sollicitudin placerat dignissim suscipit</p>
      </section>
      </div>
      <div className='Right-Timeline-container'>
      <img src={US} alt=''/>
      <section className='Timeline-item'>
        <h2>United States</h2>
        <small>2024</small>
        <p>Lorem ipsum odor amet, consectetuer adipiscing elit. Tincidunt habitasse mattis dapibus fames orci felis nullam turpis. Pulvinar scelerisque id vestibulum torquent faucibus sollicitudin placerat dignissim suscipit    </p>
      </section>
      </div>
    </div>
  )
}

export default Timeline
