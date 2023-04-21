import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './RightPart.css'
import notificationLogo from '../Icons/Vector.png';
import navbarImage from '../Icons/NavbarImage.png';
import card1 from '../Icons/card1.png';
import card2 from '../Icons/card2.png';
import card3 from '../Icons/card3.png';
import card4 from '../Icons/card4.png';
import downArrow from '../Icons/Down-arrow.png';
import pink from '../Icons/Pink.png';
import green from '../Icons/Green.png';
import yellow from '../Icons/yellow.png'
import greenLine from '../Icons/LineGreen.png';
import blueLine from '../Icons/LineBlue.png';
import chartLine1 from '../Icons/line_chart_1.png';
import chartLine2 from '../Icons/line_chart_2.png';
import { FaSearch } from 'react-icons/fa';

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js';

import { Pie } from 'react-chartjs-2';

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function RightPart() {


  // Fetched data logic starts here
  const [data, setData] = useState(null);

  useEffect(function() {
    async function fetchData() {
      const response = await axios.get('https://api.polygon.io/v2/aggs/ticker/AAPL/range/1/day/2023-01-09/2023-01-09?apiKey=Wlyle2LY4bng5d2lQHlNd99Mh8rhSTvl');
      setData(response.data);
    }
    fetchData();
  }, []);

  // Fetched data logic ends here

  // Pie chart starts here
  const charData = {
    labels: [],
    datasets: [
      {
        data: [data?.results[0]?.c,data?.results[0]?.h+20,data?.results[0]?.l+100],
        backgroundColor: ['#EE8484','#F6DC7D','#98D89E']
      }
    ]
  };

  const options = {

  }

  return (
    <div className='right-main'>
      <div className='navbar'>
        <p>Dashboard</p>
        <div className='navbar-end'>
          <button className='navbar-btn'>Search... &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <FaSearch className="search-icon" /></button>
          <img className='notLogo' src={notificationLogo} alt="" />
          <img className='navImage' src={navbarImage} alt="" />
        </div>
      </div>

      {/* card section starts here */}
      <div className='right-top'>
        <div className='card1'>
          <div className='card-text'>
            <p>Total Fetched Revenues</p>
            <img src={card1} alt="" />
          </div>
          <p className='subText'>{data?.results[0]?.vw}</p>
        </div>
        <div className='card2'>
          <div className='card-text'>
            <p>Total Fetched Transactions</p>
            <img src={card2} alt="" />
          </div>
          <p className='subText'>{data?.results[0]?.c}</p>
        </div>
        <div className='card3'>
          <div className='card-text'>
            <p>Total Fetched Likes</p>
            <img src={card3} alt="" />
          </div>
          <p className='subText'>{data?.results[0]?.n}</p>
        </div>
        <div className='card4'>
          <div className='card-text'>
            <p>Total Fetched Users</p>
            <img src={card4} alt="" />
          </div>
          <p className='subText'>{data?.results[0]?.v}</p>
        </div>
      </div>

      {/* mid section starts here */}
      <div className='right-mid'>
        <p className='mid-header'>Activities</p>
        <div className='mid-text-block'>
          <p className='left-text'>May - June 2021 <img className='arrowImage' src={downArrow} alt="" /></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p></p>
          <p className='right-points1'><img src={pink} alt="" />Guest</p>
          <p className='right-points2'><img src={green} alt="" />User</p>
        </div>

        
        <div className='chartBlock'>
          <div className='chartTop'>
            <div>
              <p>500</p>
              <p>400</p>
              <p>300</p>
              <p>200</p>
              <p>100</p>
              <p>&nbsp; &nbsp; 0</p>
            </div>
            <div className='lines'>
              <hr className='hr1' />
              <hr className='hr2' />
              <hr className='hr2' />
              <hr className='hr2' />
              <hr className='hr2' />
              <hr className='hr2' />
              <p><span className='sp'>week1</span><span className='sp'>week2</span><span className='sp'>week3</span><span>week4</span></p>
            </div>
          </div>
          <div className='chartTopBot'>
            <div className='lineImageBlock'>
              <div className='chartimage1'>
                <img className='green' src={chartLine1} alt="" />
              </div>
              <div className='chartimage2'>
                <img className='orange' src={chartLine2} alt="" />
              </div>
            </div>
          </div>
        </div> 
      </div>
      {/* mid section ends here */}

      {/* Bottom section starts here */}
      <div className='bottom-section'>
        <div className='bottom-card'>
          <div className='bottom-textBlock'>
            <p className='leftText'>Top Products</p>
            <p className='rightText'>May - June 2021 <img src={downArrow} className='arrowImage' alt="" /></p>
          </div>
          <div className='pieChartBlock'>
            <div className='piechartLeft'>
              <Pie
                data={charData}
                options={options}
              >
              </Pie>
            </div>
            <div className='piechartRight'>
              <div>
                <p className='bold'><img className='colorDot' src={green} alt="" /> Fetched Revenue Data</p>
                <p className='light'>55%</p>
              </div>
              <div>
                <p className='bold'><img className='colorDot' src={yellow} alt="" /> Fetched Likes Data</p>
                <p className='light'>40%</p>
              </div>
              <div>
                <p className='bold'><img className='colorDot' src={pink} alt="" /> Fetched Users Data</p>
                <p className='light'>14%</p>
              </div>
            </div>
          </div>
        </div>
        <div className='bottom-card'>
          <div className='bottom-textBlock'>
            <p className='leftText'>Today's schedule</p>
            <p className='rightText'>sell all <img src={downArrow} className='arrowImage' alt="" /></p>
          </div>
          <div className='lineBlock1'>
            <img className='lineImageGreen' src={greenLine} alt="" />
            <div>
              <p className='greenLineText1'>Meeting with suppliers from Kuta Bali</p>
              <p className='greenLineText2'>14.00-15.00</p>
              <p className='greenLineText2'>at Sunset Road, Kuta, Bali</p>
            </div>
          </div>
          <div className='lineBlock1'>
            <img className='lineImageBlue' src={blueLine} alt="" />
            <div>
              <p className='blueLineText1'>Meeting with suppliers from Kuta Bali</p>
              <p className='blueLineText2'>14.00-15.00</p>
              <p className='blueLineText2'>at Sunset Road, Kuta, Bali</p>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom section ends here */}

    </div>
  )
}

export default RightPart;