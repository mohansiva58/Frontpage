import logo from './image.png';
import video from './srkr.mp4';
import add from './image copy.png'
import png from './image1.png';
import c1 from './c1.png';
import c2 from './c2.png';
import c3 from './c3.png';
import c4 from './c4.png';
import React, { useState, useEffect } from 'react';
import axios from "axios"; 
import './Navbar.css';
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import srkr from './srkr.jpg';
  import srkr1 from './srkr1.jpg';
  import { MDBCarousel, MDBCarouselItem, MDBCarouselCaption } from 'mdb-react-ui-kit';
import './Charts.css';
import { Bar, Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, LineElement, Title, Tooltip, Legend, PointElement);


const Navbar = () => {
  const [result, setResult] = useState("");
  const [address, setAddress] = useState({
    fullName: "",
    email: "",
    message: ""
  });

  const validateForm = () => {
    // Basic validation for empty fields
    if (!address.fullName || !address.email || !address.message) {
      setResult("All fields are required.");
      return false;
    }
    return true;
  };

  const handleSendEmail = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
  
    setResult("Sending email...");
    const dataToSend = {
      access_key: "81fb819f-aa25-4220-ad24-d5fd911ae68c",
      subject: `${address.fullName} send a message`,
      redirect: "https://www.instagram.com",
      ...address
    };
  
    try {
      const response = await axios.post("https://api.web3forms.com/submit", dataToSend);
      if (response.data.success) {
        setResult("Email sent successfully!");
        setAddress({ fullName: "", email: "", message: "" }); // Clear the form fields
      } else {
        setResult("Email failed to send. Please try again.");
        console.error("Email sending error:", response.data);
      }
    } catch (error) {
      setResult("An error occurred while sending email. Please try again.");
      console.error("Email sending error:", error);
    }
  };
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddress((prevAddress) => ({ ...prevAddress, [name]: value }));
  };

  const [counts, setCounts] = useState({
    startups: 0,
    fundingRaised: 0,
    programs: 0,
    valuePartners: 0,
    events: 0,
    corporateEngagements: 0,
    internationalConnects: 0,
    mentors: 0,
  });
  useEffect(() => {
    const animateNumbers = (targetValue, key) => {
      let count = 0;
      const step = Math.ceil(targetValue / 80);
      const interval = setInterval(() => {
        if (count < targetValue) {
          count += step;
          if (count > targetValue) count = targetValue;
          setCounts(prevCounts => ({ ...prevCounts, [key]: count }));
        } else {
          clearInterval(interval);
        }
      }, 30);
    };

    animateNumbers(1980, 'startups');
    animateNumbers(25, 'fundingRaised');
    animateNumbers(100, 'programs');
    animateNumbers(130, 'valuePartners');
    animateNumbers(22, 'events');
    animateNumbers(1222, 'corporateEngagements');
    animateNumbers(400, 'internationalConnects');
    animateNumbers(2394, 'mentors');
    animateNumbers(16,'mentor');
    animateNumbers(14,'mento');
  }, []);

  //bars represntation
  const academicYears = ['2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
  const placements = [150, 200, 180, 220, 250]; // Replace with actual placement numbers for each year

  // Chart data for both Bar and Line charts
  const data = {
    labels: academicYears,
    datasets: [
      {
        label: 'Number of Placements',
        data: placements,
        backgroundColor: 'rgba(54, 162, 235, 0.5)', // Bar color
        borderColor: 'rgba(54, 162, 235, 1)', // Line color
        borderWidth: 2,
        fill: true,
      },
    ],
  };

  // Options for the charts
  const options = {
    responsive: true,
    maintainAspectRatio: false, // Allows chart to fit better in smaller containers
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Placements per Academic Year',
      },
    },
  };
//graduations
const academicYear = ['2019-2020', '2020-2021', '2021-2022', '2022-2023', '2023-2024'];
const graduates = [120, 180, 200, 210, 240]; // Replace with actual graduation numbers for each year

// Chart data for both Bar and Line charts
const datas = {
  labels: academicYears,
  datasets: [
    {
      label: 'Number of Graduates',
      data: graduates,
      backgroundColor: 'rgba(75, 192, 192, 0.5)', // Bar color
      borderColor: 'rgba(75, 192, 192, 1)', // Line color
      borderWidth: 2,
      fill: true,
    },
  ],
};

// Options for the charts
const option = {
  responsive: true,
  maintainAspectRatio: false, // Allows chart to fit better in smaller containers
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Graduates per Academic Year',
    },
  },
};

    return (
      
        <>
        <div>
          
            <div className="navbar">
                <div className="navbar-logo">
                    <img src={logo} alt="Logo" />
                </div>
                <div className="bars">
                    <a href="/Home">Home</a>
                    <a href="/About">About SRKR</a> 
                    <a href="/Gallery">Academics</a> 
                    <a href="/Contact">Admissions</a>
                    <a href="/Contact">Research</a>
                    <a href="/Contact">Amenities</a>
                    <a href="/Contact">Placements</a>
                </div>
            </div>

            <video id="video" poster="image.png" autoPlay muted loop playsInline>
    <source src={video} type="video/mp4" />
</video>


        </div>
        <div className="next-idea-section">
                <div className="idea-content">
                  
                    <h1 className="idea-heading">ABOUT SRKR</h1>
                    <h1 className="idea-title">Welcome to SRKREC..</h1>
                    <p className="idea-description">
                    
                    Sagi Rama Krishnam Raju Engineering College, founded in 1980, stands as one of the first  self-financing engineering colleges self-financing engineering colleges in Andhra Pradesh. Established with a vision to provide technical education to rural students, it has become a premier institution for technical learning in India. Spread across 30 acres of greenery, the college offers state-of-the-art facilities for science and technology, fostering an environment that emphasizes inclusive and culturally responsive education. Known for its strong emphasis on research and an ethos of discipline and creativity, the institution prepares students with critical thinking skills, making them valued contributors to national development and equipping them for diverse career opportunities.
                    </p>
                   
                    <button className="idea-button">Find Out More</button>
                </div>
                <img src='https://vit.ac.in/wp-content/uploads/2023/09/Layer-1-copy-2.webp'/>
                <div className="idea-video">
                    <img
                        src={png}
                        alt="T-Hub Building"
                        className="idea-video-thumbnail"
                    />
                    
                </div>
            </div>
            <div className="feature-section">
          <div className="feature-item">
          <div className="feature-icon">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="39" 
    height="39" 
    fill="currentColor" 
    class="bi bi-mortarboard-fill" 
    viewBox="0 0 16 16"
  >
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
  </svg>
</div>

            <h2 className="feature-title">Placements</h2>
            <p className="feature-description">
            It is presently headed by Dr. K.R. Satyanarayana, Dean-Training & Placements.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-pencil-square" viewBox="0 0 16 16">
  <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
  <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"/>
</svg></div>
            <h2 className="feature-title">Rankings</h2>
            <p className="feature-description">
              Inspiring innovation and bold ideas that turn dreams into reality.
            </p>
          </div>
          <div className="feature-item">
            <div className="feature-icon"><svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" fill="currentColor" class="bi bi-activity" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2"/>
</svg></div>
            <h2 className="feature-title">Achievements</h2>
            <p className="feature-description">
            IBM Hack Challenge 2023,
VIRTUSA Neural Hack 2023,
IBM Hack Challenge 2022,
VIRTUSA Neural Hack 2022..
            </p>
          </div>
         
        </div>

        <div className="next-idea-section">
               
                <div className="idea-videos">
                    <img
                        src={add}
                        alt="T-Hub Building"
                        className="idea-videos-thumbnail"
                    />
                    
                </div>
                <div className="idea-content">
                    <h1 className="idea-heading"><svg
    xmlns="http://www.w3.org/2000/svg"
    width="39" 
    height="39" 
    fill="currentColor" 
    class="bi bi-mortarboard-fill" 
    viewBox="0 0 16 16"
  >
    <path d="M8.211 2.047a.5.5 0 0 0-.422 0l-7.5 3.5a.5.5 0 0 0 .025.917l7.5 3a.5.5 0 0 0 .372 0L14 7.14V13a1 1 0 0 0-1 1v2h3v-2a1 1 0 0 0-1-1V6.739l.686-.275a.5.5 0 0 0 .025-.917z"/>
    <path d="M4.176 9.032a.5.5 0 0 0-.656.327l-.5 1.7a.5.5 0 0 0 .294.605l4.5 1.8a.5.5 0 0 0 .372 0l4.5-1.8a.5.5 0 0 0 .294-.605l-.5-1.7a.5.5 0 0 0-.656-.327L8 10.466z"/>
  </svg>           Addmissions</h1>
                    <h1 className="idea-title">Welcome to SRKREC..</h1>
                    <p className="idea-description">
                    
                    SRKR Engineering College offer 71 Undergraduate, 58 Postgraduate, 15 Integrated, 2 Research programmes and 2 M.Tech Industrial Programmes. In addition, full-time Ph.D. in Engineering and Management disciplines, Ph.D. in Science and Languages and Direct Ph.D. programmes in engineering disciplines are offered.
                   </p>
                    <button className="idea-button">Explore More</button>
                </div>
            </div>

        <div class="explore-campus">
    <h2>Explore the campus</h2>
    <p>Stay and explore the happenings!</p>
    
    <div class="background-image">
        <div class="card-container">
            <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-image" viewBox="0 0 16 16" opacity="5">
  <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"/>
  <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54L1 12.5v-9a.5.5 0 0 1 .5-.5z"/>
</svg>

                <p>Photo Gallery</p>
            </div>
            <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-reels" viewBox="0 0 16 16" opacity="5">
  <path d="M6 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0M1 3a2 2 0 1 0 4 0 2 2 0 0 0-4 0"/>
  <path d="M9 6h.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 7.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 16H2a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2zm6 8.73V7.27l-3.5 1.555v4.35zM1 8v6a1 1 0 0 0 1 1h7.5a1 1 0 0 0 1-1V8a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1"/>
  <path d="M9 6a3 3 0 1 0 0-6 3 3 0 0 0 0 6M7 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0"/>
</svg>
                <p>Video Gallery</p>
            </div>
            <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building" viewBox="0 0 16 16" opacity="5">
  <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5z"/>
  <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3z"/>
</svg>
                <p>Campus Tour</p>
            </div>
            <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16" opacity="5">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
  <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
</svg>
                <p>Events</p>
            </div>
            <div class="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-buildings" viewBox="0 0 16 16" opacity="5">
  <path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022M6 8.694 1 10.36V15h5zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5z"/>
  <path d="M2 11h1v1H2zm2 0h1v1H4zm-2 2h1v1H2zm2 0h1v1H4zm4-4h1v1H8zm2 0h1v1h-1zm-2 2h1v1H8zm2 0h1v1h-1zm2-2h1v1h-1zm0 2h1v1h-1zM8 7h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zM8 5h1v1H8zm2 0h1v1h-1zm2 0h1v1h-1zm0-2h1v1h-1z"/>
</svg>
                <p>Hostel</p>
            </div>
        </div>
    </div>
</div>

<div className="impact-section">
<div className='space'>.</div>
        <h2 className="impact-title">SRKREC AT A GLANCE
        </h2>
       
        <div className="impact-metrics">
          <div className="metric-item">
            <div className="metric-icon">ESTABLISHED IN
            </div>
            <h3 className="metric-value">{counts.startups}</h3>
            <p className="metric-label">44 Years of Academic Excellence.</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">PRODUCED</div>
            <h3 className="metric-value">{counts.fundingRaised}K+</h3>
            <p className="metric-label">World Class Graduates.</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">📋</div>
            <h3 className="metric-value">{counts.programs}+</h3>
            <p className="metric-label">RANKED</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">FACULTY WITH PHD</div>
            <h3 className="metric-value">{counts.valuePartners}+</h3>
            <p className="metric-label">150+ Members are Pursuing PhD</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">FUNDED PROJECTS</div>
            <h3 className="metric-value">{counts.events}Cr</h3>
            <p className="metric-label">By DST, AICTE, UGC & Foreign Universities</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">PLACEMENT METER</div>
            <h3 className="metric-value">{counts.corporateEngagements}</h3>
            <p className="metric-label">Offers So far for 2023-24 Batch.</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">TOTAL FACULTY</div>
            <h3 className="metric-value">{counts.internationalConnects}+</h3>
            <p className="metric-label">Dedicated & Experienced Faculty</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">PUBLISHED</div>
            <h3 className="metric-value">{counts.mentors}</h3>
            <p className="metric-label">Journal / Conference Papers</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">SUPPORTING</div>
            <h3 className="metric-value">{counts.mentor}</h3>
            <p className="metric-label">MOUs & Collaborations</p>
          </div>
          <div className="metric-item">
            <div className="metric-icon">ESTABLISHED</div>
            <h3 className="metric-value">{counts.mento}</h3>
            <p className="metric-label">Patents Filed/Published</p>
          </div>
         
        </div>
      </div>
      
      <h1 className='rep'>GRAPH REPRESENTATIONS</h1>
    <div className='chartsbar'>
     
     <div className="chart-container">
      <h2 className="chart-header">Placement Statistics</h2>
      {/* Bar Chart */}
      <div className="chart">
        <Bar data={data} options={options} />
      </div>
      {/* Line Chart */}
      <div className="chart">
        <Line data={data} options={options} />
      </div>
    </div>
    

    <div className="chart-container">
      <h2 className="chart-header">Graduation Statistics</h2>
      {/* Bar Chart */}
      <div className="chart" style={{ height: '200px' }}>
        <Bar data={datas} options={option} />
      </div>
      {/* Line Chart */}
      <div className="chart" style={{ height: '200px' }}>
        <Line data={datas} options={option} />
      </div>
    </div>
</div>
<div className='space'>.</div>
<div className='names'>
  <h4><u>ACHIEVEMENTS</u></h4>
  <h4><u>AWARDS</u></h4>
  <h4><u>PLACEMENTS</u></h4>
  <h4><u>HAPPENINGS</u></h4>
</div>


<div className="about-container">
       
       <div className="cards">
         <img src={c2} alt="Brand 1"/>
         <div className="cards-text">ACHIEVEMENTS ..</div>
        
       </div>
     
       <div className="cards">
         <img src={c3} alt="Brand 3"/>
         <div className="cards-text">AWARDS..</div>
       </div>
       <div className="cards">
         <img src={c1} alt="Brand 4"/>
         <div className="cards-text">The Training & Placement (T&P) Cell established in 1995 with the main objective of creating ample career opportunities for students in reputed Corporate Companies. It is presently headed by Dr. K.R. Satyanarayana, Dean-Training & Placements, and holds a dominant position shouldering various responsibilities and running a gamut of activities intended to cater to the needs of the students...</div>
       </div>
       <div className="cards">
         <img src={c4} alt="Brand 4"/>
         <div className="cards-text">HAPPENINGS...</div>
       </div>
     </div>
  
      <div className="marquee-startups-section">
    <h1 className="section-title">Placement Partners</h1>
    <div className="marquee">
      <div className="startups-container">
        <div className="startup-item">
          <img src="https://srkrec.edu.in/assets/img/pplogo-1.png" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3541523_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/2371657_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://srkrec.edu.in/assets/img/pplogo-3.png" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3485409_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://srkrec.edu.in/assets/img/pplogo-3.png" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://www.f6s.com/content-resource/profiles/3466533_th2.jpg" alt="Startup Logos" className="startups-image" />
        </div>
        <div className="startup-item">
          <img src="https://srkrec.edu.in/assets/img/pplogo-3.png" alt="Startup Logos" className="startups-image" />
        </div>
        
      </div>
    </div>
  </div>
  <footer className="footer">
            <div className="footer-content">
            <div className="footer-section">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Infrastructure</a></li>
                        <li><a href="/products">Education Verification</a></li>
                        <li><a href="/about">Departments</a></li>
                        <li><a href="/contact">Web-Mail</a></li>
                        <li><a href="/cart">Online Grievance</a></li>
                        <li><a href="/cart">RTI Declaration</a></li>
                        </ul>
                </div>
                
                <div className="footer-section">
                    <h4>Downloads</h4>
                    <ul>
                        <li><a href="/"> UGC Undertaking</a></li>
                        <li><a href="/products">Audited Statements</a></li>
                        <li><a href="/about">Statutes</a></li>
                        <li><a href="/contact">Strategic Plan & Deployment</a></li>
                        <li><a href="/cart">AQAR</a></li>
                        <li><a href="/cart">AICTE Feedback</a></li>
                        <li><a href="/contact">Strategic Plan & Deployment</a></li>
                       </ul>
                </div>
                <div className="footer-section">
                    <h4>CONTACT US</h4>
                    <p>Sagi Rama Krishnam Raju (SRKR) Engineering College(Autonomous)SRKR Marg, China Amiram,Bhimavaram, A.P, India - 534204</p>
                    <br/>
                  <p >Email: <a href="principal@srkrec.ac.in">principal@srkrec.ac.in</a></p>
                  <br/>
                  <p>Telephone: +91 (8816) 223332</p>
                    <br/>
                    <p>Phone:+91 9848823332</p> 
                    
                
                <div className='icons'>
                <h4>FOLLOW US ON.</h4>
            <a href='https://www.instagram.com/chintu_463?igsh=MWFmcGhua3d4MXlleQ==' aria-label="Instagram Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
  <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
</svg>
            
            </a>
            <a href='https://www.linkedin.com/in/mohansiva-thota-8b41b4322?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app' aria-label="Instagram Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-linkedin" viewBox="0 0 16 16">
  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
</svg>
            
            </a>
            <a href='https://github.com/mohansiva58/portfolio.git' aria-label="Instagram Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
</svg>
            
            </a>
            <a href='https://wa.me/9701630276' aria-label="Instagram Profile">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-whatsapp" viewBox="0 0 16 16">
  <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
</svg>
            
            </a>
            <br/>
            </div>
            </div>
               
           
      </div>
       <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()}  All Rights Reserved | SRKR Engineering College, Bhimavaram.</p>
            </div>
        </footer>
    </>

    );
};

export default Navbar;