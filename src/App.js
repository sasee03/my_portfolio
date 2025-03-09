import React, { useState, useRef } from 'react';
import './App.css';
import myPic from './my_pic.jpg';
import cpp from './C++.png';
import python from './py.jpg';
import TF from './TF.png';
import ML from './ML.png';
import PT from './PT.png';
import MySQL from './mySQL.png';
import DL from './DL.jpg';
import DSA from './DSA.png';
import FAISS from './FAISS.jpg';
import CV from './opencv.jpg';
import BS from './BS.jpg';
import SL from './streamlit.png';
import YOLO from './YOLO.jpg';
import emailjs from '@emailjs/browser';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [emailError, setEmailError] = useState(null);
  const formRef = useRef(null);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setEmailError(null);
    const serviceId = 'service_wqr0l8b'; 
    const templateId = 'template_bk6vhdg'; 
    const userId = '573Cm-jm6UuofeZc0';
    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message
    };
    emailjs.send(serviceId, templateId, templateParams, userId)
    .then((response) => {
      console.log('Email sent successfully!', response.status, response.text);
      setIsSubmitted(true);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch((error) => {
      console.error('Email sending failed:', error);
      setEmailError('Failed to send message. Please try again later.');
      setIsSubmitting(false);
    });
};
  
  return (
    <div className="app">
      <header className="header">
        <nav>
          <div className="logo">Saseendran S</div>
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#expertise">Expertise</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </nav>
      </header>
      
      <section id="about" className="about-section">
        <div className="container">
          <div className="profile-card" >
            <div className="profile-image">
              <img src= {myPic} alt="Profile" />
            </div>
            <div className="profile-content">
              <h1>Hi, I'm Saseendran S</h1>
              <p className="title">AI & Data Science Specialist</p>
              <p className="bio">
                I'm an AI & Data Science undergraduate with hands-on experience in AI projects and internships. 
                Proficient in Python, Machine Learning, Deep Learning, Data Structures & Algorithms, and Generative AI. 
                I specialize in developing innovative solutions, optimizing models, and leading technical workshops. 
                My passion lies in AI-driven problem-solving and research.
              </p>
              <div className="education">
                <p><strong>B.Tech in AI & Data Science</strong> (2022-2026)</p>
                <p>PSG Institute of Technology and Applied Research, Coimbatore</p>
              </div>
              <div className="cta-buttons">
                <a href="#contact" className="cta-primary">Get In Touch</a>
                <a href="#projects" className="cta-secondary">View My Work</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="expertise" className="expertise-section">
        <div className="container">
          <h2>My Expertise</h2>
          <div className="expertise-cards">
            <div className="expertise-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                </svg>
              </div>
              <h3>Generative AI Engineer</h3>
              <p>Developing cutting-edge AI models for text, image, and audio generation. Specializing in LLMs, conversational AI, and prompt engineering with experience using NVIDIA Nemotron.</p>
            </div>
            
            <div className="expertise-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                  <polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline>
                  <polyline points="7.5 19.79 7.5 14.6 3 12"></polyline>
                  <polyline points="21 12 16.5 14.6 16.5 19.79"></polyline>
                  <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                  <line x1="12" y1="22.08" x2="12" y2="12"></line>
                </svg>
              </div>
              <h3>ML/DL Engineer</h3>
              <p>Building and deploying machine learning and deep learning models using frameworks like TensorFlow, PyTorch, and ResNet. Experienced in image classification, NLP, and model optimization.</p>
            </div>
            
            <div className="expertise-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="3" y1="9" x2="21" y2="9"></line>
                  <line x1="9" y1="21" x2="9" y2="9"></line>
                </svg>
              </div>
              <h3>Data Analyst</h3>
              <p>Transforming raw data into actionable insights using statistical analysis, data visualization, and business intelligence tools. Proficient in Python for data analysis and manipulation.</p>
            </div>
            
            <div className="expertise-card">
              <div className="card-icon">
                <svg viewBox="0 0 24 24" width="48" height="48" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M18 10h-4v4h4v-4z"></path>
                  <path d="M22 10c0-2.5-1-5-3-7H5c-2 2-3 4.5-3 7 0 5 2 10 10 12 8-2 10-7 10-12z"></path>
                </svg>
              </div>
              <h3>AI Solutions Developer</h3>
              <p>Creating robust and innovative AI-driven solutions for real-world problems. Experienced in developing conversational bots, automated systems, and intelligent applications.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="experience" className="experience-section">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-date">Nov 2024 - Jan 2025</div>
              <div className="timeline-content">
                <h3> Milan Digital GEN AI Intern</h3>
                <h3>Conversational AI bot for Financial Data Extraction</h3>
                <p>Developed a conversational AI bot using NVIDIA Nemotron for financial data extraction. The system processed voice and text interactions to extract and store structured financial data.</p>
                <div className="tags">
                  <span className="tag">NVIDIA Nemotron</span>
                  <span className="tag">Streamlit</span>
                  <span className="tag">Speech Recognition</span>
                  <span className="tag">Text-to-Speech</span>
                </div>
              </div>
            </div>
            
            <div className="timeline-item">
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h3>Book Data Enhancement Automation</h3>
                <p>Automated book metadata updates in Odoo by integrating cover image checks and Goodreads review retrieval. Created a system that validates cover images and fetches reviews automatically.</p>
                <div className="tags">
                  <span className="tag">Odoo XML-RPC</span>
                  <span className="tag">Web Scraping</span>
                  <span className="tag">BeautifulSoup</span>
                  <span className="tag">Goodreads API</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="projects" className="projects-section">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="project-cards">
            <div className="project-card">
              <div className="project-content">
                <h3>Vendor Comparison System</h3>
                <p>Developed and fine-tuned an automated vendor comparison system using Small Language Models (SLM). The system provides price comparisons, delivery time estimates, and value-based recommendations.</p>
                <div className="tags">
                  <span className="tag">TAPEX</span>
                  <span className="tag">Sentence-BERT</span>
                  <span className="tag">FAISS Indexing</span>
                  <span className="tag">Web Scraping</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-content">
                <h3>Bird Image Classification Using ResNet</h3>
                <p>Developed a deep learning model for classifying bird species using ResNet architecture. Preprocessed and augmented datasets to achieve high accuracy in species identification.</p>
                <div className="tags">
                  <span className="tag">TensorFlow</span>
                  <span className="tag">Keras</span>
                  <span className="tag">ResNet</span>
                  <span className="tag">OpenCV</span>
                </div>
              </div>
            </div>
            
            <div className="project-card">
              <div className="project-content">
                <h3>Conversational AI Bot for Financial Data</h3>
                <p>Built an AI-powered chatbot using NVIDIA Nemotron to extract financial details from conversations and store structured data with voice and text-based interaction capabilities.</p>
                <div className="tags">
                  <span className="tag">NVIDIA Nemotron</span>
                  <span className="tag">Streamlit</span>
                  <span className="tag">Python</span>
                  <span className="tag">CSV Processing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="skills" className="skills-section">
        <div className="container">
          <h2>Technical Skills</h2>
          <div className="skills-container">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skill-items">
                <div className="skill-logo">
                  <img src={python} alt="Python" />
                  <span>Python (Proficient)</span>
                </div>
                <div className="skill-logo">
                  <img src= {cpp}  alt="C++" />
                  <span>C, C++ (Basics)</span>
                </div>
                <div className="skill-logo">
                  <img src={MySQL} alt="MySQL" />
                  <span>MySQL</span>
                </div>
                <div className="skill-logo">
                  <img src={DSA} alt="DSA" />
                  <span>Data Structures & Algorithms</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>AI & Machine Learning</h3>
              <div className="skill-items">
                <div className="skill-logo">
                  <img src={ML} alt="Machine Learning" />
                  <span>Machine Learning</span>
                </div>
                <div className="skill-logo">
                  <img src={DL} alt="Deep Learning" />
                  <span>Deep Learning</span>
                </div>
                <div className="skill-logo">
                  <img src={TF} alt="TensorFlow" />
                  <span>TensorFlow</span>
                </div>
                <div className="skill-logo">
                  <img src={PT} alt="PyTorch" />
                  <span>PyTorch</span>
                </div>
              </div>
            </div>
            
            <div className="skill-category">
              <h3>Tools & Frameworks</h3>
              <div className="skill-items">
                <div className="skill-logo">
                  <img src={YOLO} alt="YOLOv8" />
                  <span>YOLOv8</span>
                </div>
                <div className="skill-logo">
                  <img src={CV} alt="OpenCV" />
                  <span>OpenCV</span>
                </div>
                <div className="skill-logo">
                  <img src={SL} alt="Streamlit" />
                  <span>Streamlit</span>
                </div>
                <div className="skill-logo">
                  <img src={BS} alt="BeautifulSoup" />
                  <span>BeautifulSoup</span>
                </div>
                <div className="skill-logo">
                  <img src={FAISS} alt="FAISS" />
                  <span>FAISS</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="certifications">
            <h3>Certifications</h3>
            <div className="certification-items">
              <div className="certification-badge">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 15l-2 6 2-2 2 2-2-6z"></path>
                  <circle cx="12" cy="9" r="7"></circle>
                </svg>
                <span>Machine Learning for Engineering and Science Applications</span>
              </div>
              <div className="certification-badge">
                <svg viewBox="0 0 24 24" width="32" height="32" stroke="currentColor" strokeWidth="2" fill="none">
                  <path d="M12 15l-2 6 2-2 2 2-2-6z"></path>
                  <circle cx="12" cy="9" r="7"></circle>
                </svg>
                <span>Applied Accelerated Artificial Intelligence</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <section id="contact" className="contact-section">
        <div className="container">
          <h2>Get In Touch</h2>
          <div className="contact-container">
            <div className="contact-info">
              <h3>Let's Connect</h3>
              <p>I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.</p>
              <div className="contact-details">
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                  <span>saseegood03@gmail.com</span>
                </div>
                <div className="contact-item">
                  <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                  <span>8248594221</span>
                </div>
                <div className="social-links">
                  <a href="https://www.linkedin.com/in/saseendran-s-901420215/" className="social-link">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>
                  <a href="https://github.com/sasee03" className="social-link">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>
                  <a href="https://leetcode.com/u/sasee_29/" className="social-link">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 7l-5 5 5 5"></path>
                      <path d="M15 7l5 5-5 5"></path>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/sazeeee._/" class="social-link">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="#6A5ACD" strokeWidth="2" fill="none">
                      <rect x="3" y="3" width="18" height="18" rx="5"></rect> 
                      <circle cx="12" cy="12" r="4"></circle> 
                      <circle cx="18" cy="6" r="1"></circle> 
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="contact-form">
              <form ref={formRef} onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={formData.name}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="message">Message</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows="5" 
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                <button 
                  type="submit" 
                  className="submit-button" 
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...':'Send Message'}
                </button>
                {isSubmitted && <p className="form-success">Message sent successfully!</p>}
                {emailError && <p className="form-error">{emailError}</p>}
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="footer">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Saseendran S. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
