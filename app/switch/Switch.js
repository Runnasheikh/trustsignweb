"use client"
import React, { useState } from 'react';

const Switch = () => {
  const [selectedTab, setSelectedTab] = useState('createAccount');

  const handleTabClick = (tabName) => {
    setSelectedTab(tabName);
  };

  return (
    <div>
      <h3 className="mb-6 text-4xl font-medium text-gray-900 capitalize lg:leading-normal sm:text-5xl lg:text-center">
        How to get started with{' '}
        <span className="font-bold text-transparent bg-gradient-to-b from-[#ff00c3] to-[#00ff59] bg-clip-text">
         TrustSign
        </span>
      </h3>
      <p className="max-w-2xl mx-auto mb-10 text-lg font-normal leading-8 text-gray-600 lg:text-center">
        3-Step Process to Get Your Screens Live with TrustSign Digital Signage Software
      </p>
      <div className="text-center" role="tablist" aria-orientation="horizontal">
        <button
          className={`my-4 p-0.5 rounded-full mr-4 focus:outline-none ${
            selectedTab === 'createAccount' ? 'bg-gradient-to-b from-[#152BF2] to-[#C854FF]' : 'bg-white'
          }`}
          id="createAccountTab"
          role="tab"
          aria-selected={selectedTab === 'createAccount'}
          tabIndex={selectedTab === 'createAccount' ? '0' : '-1'}
          onClick={() => handleTabClick('createAccount')}
          type="button"
          aria-controls="createAccountPanel"
        >
          <div className="px-8 py-4 bg-white rounded-full">
            <p className={`text-lg ${selectedTab === 'createAccount' ? 'text-transparent bg-gradient-to-b from-[#152BF2] to-[#C854FF] bg-clip-text' : 'text-gray-900'}`}>
              01. Create account
            </p>
          </div>
        </button>
        <button
          className={`my-4 bg-white rounded-full mr-4 text-gray-900 p-0.5 ${
            selectedTab === 'installApp' ? 'bg-gradient-to-b from-[#152BF2] to-[#C854FF]' : ''
          }`}
          id="installAppTab"
          role="tab"
          aria-selected={selectedTab === 'installApp'}
          tabIndex={selectedTab === 'installApp' ? '0' : '-1'}
          onClick={() => handleTabClick('installApp')}
          type="button"
          aria-controls="installAppPanel"
        >
          <div className="bg-gray-100 px-8 py-4 rounded-full">
            <p className={`text-lg ${selectedTab === 'installApp' ? 'text-transparent bg-gradient-to-b from-[#152BF2] to-[#C854FF] bg-clip-text' : 'text-gray-900'}`}>
              02. Install Cloud App App
            </p>
          </div>
        </button>
        <button
          className={`my-4 bg-white rounded-full mr-4 text-gray-900 p-0.5 ${
            selectedTab === 'uploadContent' ? 'bg-gradient-to-b from-[#152BF2] to-[#C854FF]' : ''
          }`}
          id="uploadContentTab"
          role="tab"
          aria-selected={selectedTab === 'uploadContent'}
          tabIndex={selectedTab === 'uploadContent' ? '0' : '-1'}
          onClick={() => handleTabClick('uploadContent')}
          type="button"
          aria-controls="uploadContentPanel"
        >
          <div className="bg-gray-100 px-8 py-4 rounded-full">
            <p className={`text-lg ${selectedTab === 'uploadContent' ? 'text-transparent bg-gradient-to-b from-[#f28415] to-[#6254ff] bg-clip-text' : 'text-gray-900'}`}>
              03. Pair and Upload Content
            </p>
          </div>
        </button>
      </div>
      {selectedTab === 'createAccount' && (
       
         <div className="flex flex-col py-10 mx-auto space-y-16 lg:flex-row lg:space-y-0 lg:px-8 max-w-7xl lg:space-x-20">
      <div className="flex flex-col gap-y-4 lg:w-1/2">
        <div className="flex">
          <img
            alt="Playlist Icon"
            loading="lazy"
            width="96"
            height="64"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="https://www.wilyer.com/assets/imgs/create-account.svg"
          />
          <h2 className="my-4 ml-4 text-2xl font-medium xl:leading-relaxed xl:text-4xl text-black">
            Create your account & start your work
          </h2>
        </div>
        <p className="mb-6 leading-8 text-gray-600">
          Sign-up ontrust Sign Signage Portal by Providing Your Name, Organization Name, Phone,
          Email and Password. Verify the email and you are good to go to unleash the next big
          thing.
        </p>
        <div>
          <a
            href="https://cloudkiosk.netlify.app/login"
            className="px-12 py-4 text-lg font-medium text-white rounded-md shadow-sm bg-gradient-to-bl from-[#FF820F] to-[#F0CA43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Create Account
          </a>
        </div>
      </div>
      <div>
        <img
          alt="create account"
          loading="lazy"
          width="600"
          height="64"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          src="https://www.wilyer.com/assets/imgs/create-account.svg"
        />
      </div>
    </div>
        
      )}
      {selectedTab === 'installApp' && (
       
          <div className="flex flex-col py-10 mx-auto space-y-16 lg:flex-row lg:space-y-0 lg:px-8 max-w-7xl lg:space-x-20">
      <div className="flex flex-col gap-y-4 lg:w-1/2">
        <div className="flex">
          <img
            alt="install Icon"
            loading="lazy"
            width="96"
            height="64"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/assets/icons/install-icon.svg"
          />
          <h2 className="my-4 ml-4 text-2xl font-medium xl:leading-relaxed xl:text-4xl text-black">
            Download software & Install cloud App
          </h2>
        </div>
        <p className="mb-6 leading-8 text-gray-600">
          Our Digital Signage Application is designed to enhance your display experience. By
          downloading and installing our application, you can unlock a wide range of features and
          functionalities for your display.
        </p>
        <div>
          <a
            href="/app-download"
            className="px-12 py-4 text-lg font-medium text-white rounded-md shadow-sm bg-gradient-to-bl from-[#FF820F] to-[#F0CA43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Download
          </a>
        </div>
      </div>
      <div>
        <img
          alt="download illustration"
          loading="lazy"
          width="600"
          height="64"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          src="/assets/icons/install-illustration.svg"
        />
      </div>
    </div>
        
      )}
      {selectedTab === 'uploadContent' && (
        <div className="flex flex-col py-10 mx-auto space-y-16 lg:flex-row lg:space-y-0 lg:px-8 max-w-7xl lg:space-x-20">
           <div className="flex flex-col gap-y-4 lg:w-1/2">
        <div className="flex">
          <img
            alt="install icon"
            loading="lazy"
            width="96"
            height="64"
            decoding="async"
            data-nimg="1"
            style={{ color: 'transparent' }}
            src="/assets/icons/install-icon.svg"
          />
          <h2 className="my-4 ml-4 text-2xl font-medium xl:leading-relaxed xl:text-4xl text-black">
            Pair The Screen and Upload content
          </h2>
        </div>
        <p className="mb-6 leading-8 text-gray-600">
          With our digital signage system, you can easily pair your screen, upload a variety of
          content types, and manage your displays efficiently. This allows you to engage your
          audience, deliver targeted messages, and create visually appealing experiences on your
          digital signage screen.
        </p>
        <div>
          <a
            href="/app-download"
            className="px-12 py-4 text-lg font-medium text-white rounded-md shadow-sm bg-gradient-to-bl from-[#FF820F] to-[#F0CA43] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Download
          </a>
        </div>
      </div>
      <div>
        <img
          alt="pair illustration"
          loading="lazy"
          width="600"
          height="64"
          decoding="async"
          data-nimg="1"
          style={{ color: 'transparent' }}
          src="/assets/imgs/pair-illustration.svg"
        />
      </div>
        </div>
      )}
    </div>
  );
};

export default Switch;
