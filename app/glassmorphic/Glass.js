import React from 'react'
import "../glassmorphic/Glass.css"
import Image from "next/image"
export default function Glass() {
  return (
    <>
      <section className="homepage" id="home">
        <div className="content">
          <div className="text">
            <h1>Screens Management</h1>
            <p>
            Efficient control and Optimization of Display Screens in Digital signage networks.
            </p>
          </div>
          <ul class="cards">
      <li class="card">
        {/* <Image src="" alt="Image is not loading"/> */}
        <h3>Tents</h3>
        {/* <p>Experience comfort and protection with our high-quality camping tents.</p> */}
      </li>
      <li class="card"> 
         {/* <Image src="../images/bags.jpg" alt="Image"/> */}
         {/* <Image src="/bgphoto.jpg"  width={200} height={500}/> */}
        <h3>Dynamic playlist</h3>
        <p>Creating and managing dynamic content playlists for effective display in digital signage.</p>
      </li>
      <li class="card">
        <Image src="../images/stoves.jpg" alt="Image"/>
        <h3>Full remote control</h3>
        <p>Remote control of screens for seamless management in digital signage networks</p>
      </li>
      
    </ul>
        </div>
      </section>
  {/* <section class="services" id="services">
    <h2>Our Services</h2>
    <p>Explore our wide range of camping gear services.</p>
    <ul class="cards">
      <li class="card">
        <Image src="" alt="Image is not loading"/>
        <h3>Tents</h3>
        <p>Experience comfort and protection with our high-quality camping tents.</p>
      </li>
      <li class="card"> */}
        {/* <Image src="../images/bags.jpg" alt="Image"/> */}
        {/* <Image src="/bgphoto.jpg"  width={200} height={500}/>
        <h3>Sleeping Bags</h3>
        <p>Stay cozy and warm during your camping trips with our premium sleeping bags.</p>
      </li>
      <li class="card">
        <Image src="../images/stoves.jpg" alt="Image"/>
        <h3>Camp Stoves</h3>
        <p>Cook delicious meals in the great outdoors with our reliable camp stoves.</p>
      </li>
      <li class="card">
        <Image src="../images/backpacks.jpg" alt="Image"/>
        <h3>Backpacks</h3>
        <p>Carry your essentials comfortably with our durable and functional camping backpacks.</p>
      </li>
      <li class="card">
        <Image src="../images/chair.jpg" alt="Image"/>
        <h3>Camp Chairs</h3>
        <p>Relax and unwind in style with our comfortable and portable camping chairs.</p>
      </li>
      <li class="card">
        <Image src="../images/light.jpg" alt="Image"/>
        <h3>Camp Lights</h3>
        <p>Illuminate your campsite with our reliable and energy-efficient camping lights.</p>
      </li>
    </ul>
  </section>
  <section class="portfolio" id="portfolio">
    <h2>Our Portfolio</h2>
    <p>Take a look at some of our memorable camping adventures.</p>
    <ul class="cards">
      <li class="card">
        <Image src="../images/camping-1.jpg" alt="Image"/>
        <h3>Mountain Hiking</h3>
        <p>Embark on an exhilarating hiking adventure in the breathtaking mountain ranges.</p>
      </li>
      <li class="card">
        <Image src="../images/camping-2.jpg" alt="Image"/>
        <h3>Lakeside Camping</h3>
        <p>Enjoy a tranquil camping experience by the serene shores of picturesque lakes.</p>
      </li>
      <li class="card">
        <Image src="../images/camping-3.jpg" alt="Image"/>
        <h3>Beach Camping</h3>
        <p>Escape to sandy beaches and camp under the starry sky by the crashing waves.</p>
      </li>
      <li class="card">
        <Image src="../images/camping-4.jpg" alt="Image"/>
        <h3>Forest Exploration</h3>
        <p>Discover the wonders of lush forests and immerse yourself in nature's beauty.</p>
      </li>
      <li class="card">
        <Image src="../images/camping-5.jpg" alt="Image"/>
        <h3>RV Camping</h3>
        <p>Experience the freedom of road trips and camping adventures with our RV rentals.</p>
      </li>
      <li class="card">
        <Image src="../images/camping-6.jpg" alt="Image"/>
        <h3>Desert Camping</h3>
        <p>Embark on a unique desert camping experience and witness stunning landscapes.</p>
      </li>
    </ul>
  </section>
  <section class="about" id="about">
    <h2>About Us</h2>
    <p>Discover our story in providing camping services.</p>
    <div class="row company-info">
      <h3>Our Story</h3>
      <p>Experience the excellence of our camping gear and services, where we have been offering high-quality camping essentials and gear for outdoor enthusiasts for over a decade. Our commitment to quality and customer satisfaction ensures that every adventurer can rely on us for their camping needs.</p>
    </div>
    <div class="row mission-vision">
      <h3>Our Mission</h3>
      <p>At Camping Gear Experts, our mission is to equip outdoor enthusiasts with top-notch camping gear and essentials that enhance their outdoor experiences. We strive to provide reliable, durable, and innovative products that contribute to memorable adventures and lasting memories.</p>
      <h3>Our Vision</h3>
      <p>Our vision is to become the go-to destination for camping enthusiasts, known for our extensive selection of premium camping gear and exceptional customer service. We aspire to inspire and enable people to embrace the beauty of nature and create unforgettable camping experiences.</p>
    </div>
    <div class="row team">
      <h3>Our Team</h3>
      <ul>
        <li>John Doe - Founder and CEO</li>
        <li>Jane Smith - Gear Specialist</li>
        <li>Mark Johnson - Customer Representative</li>
        <li>Sarah Brown - Operations Manager</li>
      </ul>
    </div>
  </section>
  <section class="contact" id="contact">
    <h2>Contact Us</h2>
    <p>Reach out to us for any inquiries or feedback.</p>
    <div class="row">
      <div class="col information">
        <div class="contact-details">
          <p><i class="fas fa-map-marker-alt"></i> 123 Campsite Avenue, Wilderness, CA 98765</p>
          <p><i class="fas fa-envelope"></i> info@campinggearexperts.com</p>
          <p><i class="fas fa-phone"></i> (123) 456-7890</p>
          <p><i class="fas fa-clock"></i> Monday - Friday: 9:00 AM - 5:00 PM</p>
          <p><i class="fas fa-clock"></i> Saturday: 10:00 AM - 3:00 PM</p>
          <p><i class="fas fa-clock"></i> Sunday: Closed</p>
          <p><i class="fas fa-globe"></i> www.codingnepalweb.com</p>
        </div>          
      </div>
      <div class="col form">
        <form>
          <input type="text" placeholder="Name*" required/>
          <input type="email" placeholder="Email*" required/>
          <textarea placeholder="Message*" required></textarea>
          <button id="submit" type="submit">Send Message</button>
        </form>
      </div>
    </div>
  </section>
  <footer>
    <div>
      <span>Copyright © 2023 All Rights Reserved</span>
      <span class="link">
          <a href="#">Home</a>
          <a href="#contact">Contact</a>
      </span>
    </div>
  </footer> */}
  </>
 ) 
}