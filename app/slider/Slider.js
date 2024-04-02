'use client'
import React, { useState, useEffect } from 'react';
import '../slider/Slider.css'
import Image from 'next/image'

function Slider() {
  const [active, setActive] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const items = [
    { id: 1, src: 'https://images.pexels.com/photos/20587031/pexels-photo-20587031/free-photo-of-woman-in-dress-lying-down-with-mirror-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 2, src: 'https://images.pexels.com/photos/20587031/pexels-photo-20587031/free-photo-of-woman-in-dress-lying-down-with-mirror-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 3, src: 'https://images.pexels.com/photos/20587031/pexels-photo-20587031/free-photo-of-woman-in-dress-lying-down-with-mirror-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 4, src: 'https://images.pexels.com/photos/20587031/pexels-photo-20587031/free-photo-of-woman-in-dress-lying-down-with-mirror-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
    { id: 5, src: 'https://images.pexels.com/photos/20587031/pexels-photo-20587031/free-photo-of-woman-in-dress-lying-down-with-mirror-on-tree.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' },
  ];

  const nextSlide = () => {
    setActive((prevActive) => (prevActive + 1 <= items.length - 1 ? prevActive + 1 : 0));
  };

  const prevSlide = () => {
    setActive((prevActive) => (prevActive - 1 >= 0 ? prevActive - 1 : items.length - 1));
  };

  const handleDotClick = (index) => {
    setActive(index);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    setIntervalId(interval);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='slider'>
      <div className='list' style={{ left: -active * 100 + '%' }}>
        {items.map((item) => (
          <div className='item' key={item.id}>
            <Image src={item.src} alt='' />
          </div>
        ))}
      </div>
      <div className='buttons'>
        <button id='prev' onClick={prevSlide}>
          {'<'}
        </button>
        <button id='next' onClick={nextSlide}>
          {'>'}
        </button>
      </div>
      <ul className='dots'>
        {items.map((_, index) => (
          <li key={index} className={index === active ? 'active' : ''} onClick={() => handleDotClick(index)}></li>
        ))}
      </ul>
    </div>
  );
}

export default Slider;
