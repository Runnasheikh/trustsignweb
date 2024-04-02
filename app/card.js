import React from 'react';


const FeatureCard = ({ iconSrc, title, description, gradientFrom, gradientTo }) => (
  <div className="flex flex-col p-6 shadow rounded-2xl" style={{ backgroundImage: `linear-gradient(to bottom right, ${gradientFrom}, ${gradientTo})` }}>
    <img alt="Feature Icon" loading="lazy" width="64" height="64" decoding="async" src={iconSrc} style={{borderRadius:100}}/>
    <div className="mt-6 text-white">
      <p className="text-2xl font-medium">{title}</p>
      <p className="pb-6 mt-4 text-base">{description}</p> 
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="py-16 overflow-hidden">
    <div className="px-6 mx-auto max-w-7xl lg:px-8">
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:grid-cols-2 lg:items-center">
       
        <div className="lg:pt-4">
          <div>
            <h1 className="max-w-2xl text-4xl font-bold sm:leading-[4.6rem] tracking-normal text-gray-900 sm:text-5xl lg:col-span-2 xl:col-auto">
              Trustsign <span className="font-medium">is For your </span>
              <span className="tracking-normal text-transparent lg:leading-normal bg-gradient-to-b from-[#bf00ff] to-[#2a2fbd] bg-clip-text">trust Features.</span>
            </h1>
            <p className="mt-4 text-lg font-normal leading-8 text-gray-600">with this you can build your bussiness</p>
          </div>
        
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2">
           
            <FeatureCard
              iconSrc="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              title="Dynamic Playlists"
              description="Creating and managing dynamic content playlists for effective display in digital signage."
              gradientFrom="#189bcc"
              gradientTo="#24CE5E"
            />
            
            <FeatureCard
              iconSrc="/assets/icons/team-icon.svg"
              title="Team Management"
              description="Efficient coordination and leadership for effective team management."
              gradientFrom="#e6c1ff"
              gradientTo="#f6546a"
            />
            <FeatureCard
              iconSrc="/assets/icons/screens-icon.svg"
              title="Screens Management"
              description="Efficient control and Optimization of Display Screens in Digital signage networks."
              gradientFrom="#00ff52"
              gradientTo="#2ee3a4"
            />
            <FeatureCard
              iconSrc="/assets/icons/remote-icon.svg"
              title="Full Remote control"
              description="Remote control of screens for seamless management in digital signage networks."
              gradientFrom="#FF820F"
              gradientTo="#F0CA43"
            />
          </div>
        </div>
       
        <div className=" lg:block relative">
          
          <img
            alt="Feature Screenshot"
            
           
            decoding="async"
            src="https://images.pexels.com/photos/380769/pexels-photo-380769.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            className=""
            style={{ color: 'transparent',borderRadius:12,height:"500px",top:"60px",position:"relative" }}
          />
        </div>
      </div>
    </div>
  </div>
);

export default FeaturesSection;
