import React, { useState } from 'react';

const Tabs = ({ tabs, underlineImg }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabClick = (index) => {
    setActiveTab(index);
  };

  return (
    <>
      <ul className="nav nav-tabs border-0 justify-content-center gap-5 mt-5 mb-4">
        {tabs.map((tab, index) => (
          <li className="nav-item" key={index}>
            <button
              className={`nav-link d-flex flex-column text-color align-items-center ${index === activeTab ? 'active' : ''}`}
              onClick={() => handleTabClick(index)}
            >
              {tab.label}
              {index === activeTab && <img width={115} src={underlineImg} alt="underline" />}
            </button>
          </li>
        ))}
      </ul>
      <div className="tab-content">
        {tabs.map((tab, index) => (
          <div
            key={index}
            className={`tab-pane fade ${index === activeTab ? 'show active' : ''}`}
          >
            {tab.content}
          </div>
        ))}
      </div>
    </>
  );
};

export default Tabs;
