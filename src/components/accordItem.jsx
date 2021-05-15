import React, { useState } from 'react'
import { RiArrowDownSLine,RiArrowUpSLine } from "react-icons/ri";
import Questions from "../data/questions"
import './../App.css';


const AccordItem = ({ title, descr }) => {
    const [showInfo, setShowInfo] = useState(false);
    return (
      <div className='question'>
        <div className="question-item">
          <h4>{title}</h4>
          <button className='btn' onClick={() => setShowInfo(!showInfo)}>
            {showInfo ? <RiArrowUpSLine /> : < RiArrowDownSLine />}
          </button>
        </div>
        {showInfo && <div>{descr}</div>}
      </div>
    );
  };

export default AccordItem;