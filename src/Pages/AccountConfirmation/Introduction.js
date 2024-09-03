import React from 'react';
import { Link } from 'react-router-dom';
import bnwLogo from './../../images/bnwbanx.png';

const TabOne = ({ onNext }) => (
  <div className="w-screen h-screen bg-[#1c1c1c] ">
    <div className="flex flex-col justify-between items-start max-w-8/12 2xl:max-w-screen-xl mx-auto p-4 ml-8 2xl:pl-72">
      <img src={bnwLogo} alt="Logo" className="mt-8 w-44 h-24" />
      <div className="flex flex-col items-start mb-4 bottom-16  absolute">
        <h1 className="text-white text-3xl mb-2 w-32 py-4">Easy way to Banx</h1>
        <div className="text-gray-400 text-lg pb-8 w-72">
          Provide convenience while paying to retail business using QR code.
        </div>
        <button
          onClick={onNext}
          className="bg-[#467a4d] text-white py-2 px-4 rounded-md mb-2 w-44 text-center h-12 items-center justify-center flex"
        >
          Next
        </button>
        <Link to="/AccountManagement" className="text-white underline w-44 text-center h-12 items-center justify-center flex">
          Skip
        </Link>
      </div>
    </div>
  </div>
);

const TabTwo = ({ onNext }) => (
  <div className="w-screen h-screen bg-[#1c1c1c]">
    <div className="flex flex-col justify-between items-start max-w-8/12 2xl:max-w-screen-xl mx-auto p-4 ml-8 2xl:pl-72">
      <img src={bnwLogo} alt="Logo" className="mt-8 w-44 h-24" />
      <div className="flex flex-col items-start mb-4 bottom-16 absolute">
        <h1 className="text-white text-3xl mb-2 w-64 py-4">Freedom with Outer Banx Cards</h1>
        <div className="text-gray-400 text-lg pb-8 w-72">
          Make instant payment across all payment terminals.
        </div>
        <button
          onClick={onNext}
          className="bg-[#467a4d] text-white py-2 px-4 rounded-md mb-2 w-44 text-center h-12 items-center justify-center flex"
        >
          Next
        </button>
        <Link to="/AccountManagement" className="text-white underline w-44 text-center h-12 items-center justify-center flex">
          Skip
        </Link>
      </div>
    </div>
  </div>
);

const TabThree = () => (
  <div className="w-screen h-screen bg-[#1c1c1c]">
    <div className="flex flex-col justify-between items-start max-w-8/12 2xl:max-w-screen-xl mx-auto p-4 ml-8 2xl:pl-72">
      <img src={bnwLogo} alt="Logo" className="mt-8 w-44 h-24" />
      <div className="flex flex-col items-start mb-4 bottom-16 absolute">
        <h1 className="text-white text-3xl mb-2 w-64 py-4">Send Money to Friends and Family</h1>
        <div className="text-gray-400 text-lg pb-8 w-72">
          Securely manage your funds and banking activities.
        </div>
        <Link
          to="/AccountManagement"
          className="bg-[#467a4d] text-white py-2 px-4 rounded-md mb-2 w-44 text-center h-12 items-center justify-center flex"
        >
          Next
        </Link>
        <Link to="/AccountManagement" className="text-white underline w-44 text-center h-12 items-center justify-center flex">
          Skip
        </Link>
      </div>
    </div>
  </div>
);

const Introduction = () => {
  const [currentTab, setCurrentTab] = React.useState(1);

  const handleNext = () => {
    setCurrentTab((prevTab) => prevTab + 1);
  };

  return (
    <>
      {currentTab === 1 && <TabOne onNext={handleNext} />}
      {currentTab === 2 && <TabTwo onNext={handleNext} />}
      {currentTab === 3 && <TabThree />}
    </>
  );
};

export default Introduction;
