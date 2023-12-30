import { Router, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import './locomotive-scroll.css'
import { useEffect,useRef } from "react";
import LocomotiveScroll from 'locomotive-scroll'
function App() {
  const scrollRef = useRef(null);
  useEffect(()=>{
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth:true,  
    });
    return(()=>{
      scroll.destroy;
    })
  },[])
  return (
    <div className="container scroll-container" ref={scrollRef}>
      <Navbar />
      <Hero />
      <div className="about" data-scroll data-scroll-speed={0}>
        <div className="heading">
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25_34)">
              <path
                d="M48.0244 20.0969L29.7458 1.81816C27.0429 -0.606053 22.9481 -0.606053 20.2452 1.81816L1.96661 20.0749C-0.655537 22.699 -0.655537 26.9513 1.96661 29.5754L20.2452 47.8322C20.8619 48.4672 21.6005 48.9711 22.4169 49.3134C23.2332 49.6557 24.1103 49.8295 24.9954 49.8242C25.8775 49.8351 26.7527 49.6682 27.5688 49.3335C28.385 48.9988 29.1253 48.503 29.7457 47.8759L48.0243 29.5973L48.0517 29.5699C50.6602 26.9464 50.6479 22.7052 48.0244 20.0969Z"
                fill="#BBCABA"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_34">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1>ABOUT ME</h1>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25_34)">
              <path
                d="M48.0244 20.0969L29.7458 1.81816C27.0429 -0.606053 22.9481 -0.606053 20.2452 1.81816L1.96661 20.0749C-0.655537 22.699 -0.655537 26.9513 1.96661 29.5754L20.2452 47.8322C20.8619 48.4672 21.6005 48.9711 22.4169 49.3134C23.2332 49.6557 24.1103 49.8295 24.9954 49.8242C25.8775 49.8351 26.7527 49.6682 27.5688 49.3335C28.385 48.9988 29.1253 48.503 29.7457 47.8759L48.0243 29.5973L48.0517 29.5699C50.6602 26.9464 50.6479 22.7052 48.0244 20.0969Z"
                fill="#BBCABA"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_34">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="info">
          <div className="pfp"></div>
          <div className="summary" data-scroll data-scroll-speed={0}>
            <h2>A intro to who I am?</h2>
            <p>Hello there! I'm Ashish Saikia, a passionate and aspiring full-stack developer and UI/UX designer hailing from the vibrant and diverse landscapes of India. </p>
            <p>I find joy in seamlessly blending my technical prowess with a keen eye for design to create digital experiences that are not only functional but also visually engaging.</p>
          </div>
        </div>
      </div>
      <div className="services" data-scroll>
        <div className="heading">
        <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25_34)">
              <path
                d="M48.0244 20.0969L29.7458 1.81816C27.0429 -0.606053 22.9481 -0.606053 20.2452 1.81816L1.96661 20.0749C-0.655537 22.699 -0.655537 26.9513 1.96661 29.5754L20.2452 47.8322C20.8619 48.4672 21.6005 48.9711 22.4169 49.3134C23.2332 49.6557 24.1103 49.8295 24.9954 49.8242C25.8775 49.8351 26.7527 49.6682 27.5688 49.3335C28.385 48.9988 29.1253 48.503 29.7457 47.8759L48.0243 29.5973L48.0517 29.5699C50.6602 26.9464 50.6479 22.7052 48.0244 20.0969Z"
                fill="#BBCABA"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_34">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>

          <h1>SERVICES</h1>
          <svg
            width="50"
            height="50"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_25_34)">
              <path
                d="M48.0244 20.0969L29.7458 1.81816C27.0429 -0.606053 22.9481 -0.606053 20.2452 1.81816L1.96661 20.0749C-0.655537 22.699 -0.655537 26.9513 1.96661 29.5754L20.2452 47.8322C20.8619 48.4672 21.6005 48.9711 22.4169 49.3134C23.2332 49.6557 24.1103 49.8295 24.9954 49.8242C25.8775 49.8351 26.7527 49.6682 27.5688 49.3335C28.385 48.9988 29.1253 48.503 29.7457 47.8759L48.0243 29.5973L48.0517 29.5699C50.6602 26.9464 50.6479 22.7052 48.0244 20.0969Z"
                fill="#BBCABA"
              />
            </g>
            <defs>
              <clipPath id="clip0_25_34">
                <rect width="50" height="50" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="offer">
          <div className="card1">
            <h1>My expertise.</h1>
            <h3>As a Full Stack Developer and UI/UX Designer, I merge technical prowess with creative design, crafting holistic digital solutions for impactful online experiences.</h3>
          </div>
          <div className="card2">
            <h1>full stack</h1>
            <h1>full stack</h1>
            <h1>full stack</h1>
            <h1>full stack</h1>
            <h1>full stack</h1>
            <h1>full stack</h1>
            <h1>full stack</h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
