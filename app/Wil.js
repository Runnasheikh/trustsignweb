import React from 'react';
import "../app/css/Headers.css"
const CustomWidgetsSection = () => {
  return (
    <div className="mx-auto  bg-contain bg-center bg-no-repeat xl:p-24">
       
      <div className="grid max-w-6xl grid-cols-1 mx-auto my-6 bg-white rounded-lg shadow lg:p-8 gap-x-8 gap-y-12 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
        <div className="px-6 lg:px-0">
          <div className="max-w-2xl mx-auto lg:mx-0 lg:max-w-lg">
            <h2 className="mt-2 text-3xl font-medium tracking-normal text-gray-900">Customisable widgets, designed to keep your screens dynamic and visually appealing.</h2>
            <dl className="max-w-xl mt-6 space-y-3 text-base font-normal leading-7 text-gray-600 lg:max-w-none">
              <WidgetItem title="Live Stream and YouTube Streams" description="Wilyer Digital Signage Solution simplifies the process of playing YouTube videos and live streams on your digital signage by providing support for RTSP and RTMP URLs." />
              <WidgetItem title="Multi-city Weather Display" description="Display weather information for multiple cities on your digital signage displays with our editing tool that offers customized themes, making your content more engaging." />
              <WidgetItem title="Web Pages" description="Customize your digital signage displays by loading custom URLs and websites. Integrate with food ordering, feedback systems, and more for an interactive experience." />
              <WidgetItem title="Google Slides" description="Sync your presentations across multiple digital signage displays by loading Google Slides Widget for automatic updates and easy sharing for internal communication." />
            </dl>
          <div className="hidden sm:block bloby"></div>
          <div className="hidden sm:block blobsy"></div>
          </div>
        </div>
        <div>
          <img src="https://cdn.pixabay.com/photo/2024/01/17/15/39/ai-generated-8514852_1280.jpg" alt="" />
        </div>
      </div>
    </div>
  );
};

const WidgetItem = ({ title, description }) => {
  return (
    <div className="relative pl-9">
      <dt className="inline font-medium text-gray-900">
        <span className="absolute w-5 h-5 text-orange-600 left-1 top-1">
          <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12.5" r="12" fill="url(#paint0_linear_661_9709)" />
            <path d="M7.06055 13.5593L9.17651 16.3806L16.935 8.62207" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            <defs>
              <linearGradient id="paint0_linear_661_9709" x1="21.2922" y1="-2.91828" x2="1.28626" y2="38.8854" gradientUnits="userSpaceOnUse">
                <stop offset="0.161458" stopColor="#FF820F" />
                <stop offset="1" stopColor="#F0CA43" />
              </linearGradient>
            </defs>
          </svg>
        </span>
        {title}
      </dt>
      <br />
      <dd className="inline">{description}</dd>
    </div>
  );
};

export default CustomWidgetsSection;
