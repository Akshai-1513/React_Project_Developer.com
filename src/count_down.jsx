import React, { useEffect, useState, useRef } from "react";
import "./styles/count_down.css";

function CountDown({ label = "Count", target = 1000, duration = 1000 }) {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const counterRef = useRef(null);
  const counterIdRef = useRef(`counter-${label}-${Math.random().toString(36).substr(2, 9)}`);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );
    
    if (counterRef.current) {
      observer.observe(counterRef.current);
    }
    
    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!isVisible) return;
    
    const counterId = counterIdRef.current;
    const hasAnimated = sessionStorage.getItem(counterId);
    
    if (hasAnimated === 'true') {
      setCount(target);
      return;
    }
    
    sessionStorage.setItem(counterId, 'true');
    
    setCount(0);
    
    let start = 0;
    const steps = duration / 10;
    const increment = Math.ceil(target / steps);
    
    const interval = setInterval(() => {
      start += increment;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 10);
    
    return () => clearInterval(interval);
  }, [isVisible, target, duration]);

  return (
    <div className="counter-item" ref={counterRef}>
      <h2>{count.toLocaleString()}</h2>
      <p>{label}</p>
    </div>
  );
}

function App() {
  useEffect(() => {
    const pageLoadKey = 'page-freshly-loaded';
    
    if (!sessionStorage.getItem(pageLoadKey)) {
      sessionStorage.clear();
      sessionStorage.setItem(pageLoadKey, 'true');
    }
  }, []);

  return (
    <div className="counter-container">
      <CountDown 
        label="LinkedIn Connections" 
        target={1000000}
      />
      <CountDown 
        label="YouTube Subscribers" 
        target={500000} 
      />
      <CountDown 
        label="Website Visits" 
        target={2000000} 
      />
    </div>
  );
}

export default App;