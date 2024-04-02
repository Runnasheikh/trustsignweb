import React from 'react';

const Readmore = () => {
  return (
    <div className="bg-blue-200 relative">
     
      <div className="flex flex-col items-center max-w-5xl px-6 py-16 mx-auto space-y-10 lg:space-y-0 lg:space-x-20 lg:flex-row justify-evenly lg:px-8">
        <div className="flex flex-col space-y-10 lg:w-1/2">
          <h2 className="text-4xl font-medium leading-relaxed text-gray-900 sm:text-6xl">
            How it <span className="font-bold text-transparent bg-gradient-to-b from-[#0F61FF] to-[#439DF0] bg-clip-text">works?</span>
          </h2>
          <div>
            <p className="text-lg font-semibold text-gray-900">From your Laptop, PC, Mobile Or Tablet</p>
            <p className="text-base text-gray-600">Create your playlists and manage your screens in the Wilyer Content Manager System using any web-browser on your Laptop, PC, Mobile, or Tablet.</p>
          </div>
          <div>
            <p className="text-lg font-semibold text-gray-900">To your screens</p>
            <p className="text-base text-gray-600">Your playlists will automatically playback on your screens wherever they are located. Easy and Simple to Push your Content.</p>
          </div>
          <div className="flex items-center space-x-4">
            <a href="" className="rounded-md bg-gradient-to-b text-center from-blue-600 to-blue-500 px-12 py-3.5 text-base font-semibold text-white shadow-sm hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
              Let Try it out
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center space-y-2 justify-content-center">
          <img
            alt="Playlist Icon"
            loading="lazy"
            width={100}
            height={100}
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            srcSet="https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2,https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            src="https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
          <img
            alt="arrow Icon"
            loading="lazy"
            width="15"
            height="64"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src=""
          />
          <img
            alt="Playlist Icon"
            loading="lazy"
            width={100}
            height={100}
            decoding="async"
            data-nimg="1"
            style={{ color: 'red' }}
            srcSet="https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2,https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            src="https://images.pexels.com/photos/14447126/pexels-photo-14447126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          />
        </div>
      </div>
    </div>
  );
};

export default Readmore;
