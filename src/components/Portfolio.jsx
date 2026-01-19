import React, { useState, useEffect, useRef } from "react";
import "./Portfolio.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaEnvelope,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaPython,
  FaJava,
  FaDownload,
  FaGraduationCap,
  FaCertificate,
  FaSchool,
  FaBrain,
  FaFolderOpen,
  FaFileAlt,
} from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress } from "react-icons/si";
import englishCert from "../assets/images/english-course.jpeg";
import graphicCert from "../assets/images/graphic-design.jpeg";
import csDiploma from "../assets/images/cs-diploma.jpeg";
import multimediaCert from "../assets/images/multimedia-social.jpeg";
import olResult from "../assets/files/ol-result.pdf";
import alResult from "../assets/files/al-result.pdf";
//import higherEduResult from "../assets/files/higher-edu-result.pdf";
import ePermit from "../assets/files/ePermit.pdf";
import gnQuickCheck from "../assets/files/GN QuickCheck.pdf";
import bankApp from "../assets/files/Bank-app (Python).pdf";
import higherEduImage from "../assets/images/image.png";
import profileImg from "../assets/images/lina.jpg";
import cv from "../assets/files/Linali.pdf";
import greenNatureImg from "../assets/images/Green.png";
import greenNatureVideo from "../assets/videos/Green-nature -web.mp4";
import linaliImg from "../assets/images/linali.png";
import olIctImg from "../assets/images/OL-ICT.png";
import mlImage from "../assets/images/ML.png";

const Portfolio = () => {

  const [activeTab, setActiveTab] = useState('projects');

  const [selectedCert, setSelectedCert] = useState(null);

  const openImage = (cert) => setSelectedCert(cert);
  const closeImage = () => setSelectedCert(null);

  /* ================= EDUCATION PDF MODAL STATE ================= */
  const [selectedEducationPDF, setSelectedEducationPDF] = useState(null);

  const openEducationPDF = (pdf) => setSelectedEducationPDF(pdf);
  const closeEducationPDF = () => setSelectedEducationPDF(null);

  /* ================= PROJECT MODAL STATE ================= */
  const [selectedProject, setSelectedProject] = useState(null);
  const [showProjectModal, setShowProjectModal] = useState(false);

  const openProjectModal = (project) => {
    setSelectedProject(project);
    setShowProjectModal(true);
  };

  const closeProjectModal = () => {
    setShowProjectModal(false);
    setSelectedProject(null);
  };

  /* ================= PROFILE MODAL STATE ================= */
  const [showProfileModal, setShowProfileModal] = useState(false);

  const openProfileModal = () => setShowProfileModal(true);
  const closeProfileModal = () => setShowProfileModal(false);

  /* ================= CV MODAL STATE ================= */
  const [showCVModal, setShowCVModal] = useState(false);

  const openCVModal = () => setShowCVModal(true);
  const closeCVModal = () => setShowCVModal(false);

  /* ================= EDUCATION MODAL STATE ================= */
  const [showEducationModal, setShowEducationModal] = useState(false);

  const openEducationModal = () => setShowEducationModal(true);
  const closeEducationModal = () => setShowEducationModal(false);

  /* ================= SCROLL ANIMATIONS ================= */
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          } else {
            entry.target.classList.remove("active");
          }
        });
      },
      { threshold: 0.1 }
    );

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.current.observe(el));

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  /* Close modal with ESC key */
  useEffect(() => {
    const handleEsc = (e) => e.key === "Escape" && closeImage();
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  /* Download function */
  const downloadImage = (src, filename) => {
    const link = document.createElement('a');
    link.href = src;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">G.D. Linali Madhumini</div>
        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="sky">
          {[...Array(6)].map((_, i) => (
            <div
              key={i}
              className="star"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}

          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="firefly"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            />
          ))}
        </div>

        <h1>G.D. Linali Madhumini</h1>
        <h2>Undergraduate Software Engineer</h2>
        <div
          className="profile-circle"
          style={{
            backgroundImage: `url(${profileImg})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          onClick={openProfileModal}
        ></div>

        <p>
      Undergraduate Software Engineering student with a strong interest in modern web
              technologies, clean architecture, and interactive user experiences.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn primary">View Projects</a>
          <button className="btn secondary" onClick={openCVModal}>
            View CV
          </button>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section reveal">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="certificates-section">
            <hr></hr>
            <br></br>
            <h3>Certificates</h3>
            <br></br>
            <div className="projects">
              <div
                className="project-card certificate"
                onClick={() =>
                  openImage({
                    src: englishCert,
                    title: "Certificate course in English",
                    issuer: "University of Colombo",
                  })
                }
              >
                <h4>Certificate course in English </h4>
                <p>Issued by University of Colombo</p>
                <p>2023</p>
              </div>

              <div
                className="project-card certificate"
                onClick={() =>
                  openImage({
                    src: graphicCert,
                    title: "Online Certificate course in Graphic Design",
                    issuer: "SLTCA",
                  })
                }
              >
                <h4>Online Certificate course in Graphic Design</h4>
                <p>Issued by SLTCA</p>
                <p>2022</p>
              </div>

              <div
                className="project-card certificate"
                onClick={() =>
                  openImage({
                    src: csDiploma,
                    title: "Diploma course in Computer Science",
                    issuer: "SLTCA",
                  })
                }
              >
                <h4>Diploma course in Computer Science </h4>
                <p>Issued by SLTCA</p>
                 <p>2023</p>
              </div>

               <div
      className="project-card certificate"
      onClick={() =>
        openImage({
          src: multimediaCert,
          title: "Multimedia & Social media Handling training course",
          issuer: "SLTCA",
        })
      }
    >
      <h4>Certificate of achievement in Multimedia & Social media Handling training course</h4>
      <p>Issued by SLTCA</p>
                 <p>2023</p>
                 
    </div>
    <hr></hr>

            </div>
          </div>
          <div className="about-text-section">
            <p>
              <br></br>
                        I am particularly passionate about front-end development and full-stack applications,
                where I can combine logical problem-solving with creative design. I enjoy transforming ideas into functional,
                visually engaging products and continuously improving them through iteration and user feedback.
<br></br>
<br></br>
I value clean code, best practices, and continuous learning, and I actively explore new frameworks,
 tools, and technologies to stay up to date in the fast-evolving tech landscape. Seeing a finalized project
  deliver user satisfaction and real-world impact motivates me to keep improving my skills and pushing my limits.
<br></br>
<br></br>
I am eager to collaborate on meaningful projects, learn from experienced developers, and grow into a professional
 software engineer who builds solutions that truly make a difference.
            </p>
            <br></br>

            <span className="project-tag" onClick={openEducationModal} style={{ cursor: 'pointer' }}>Education</span>
          </div>
        </div>
      </section>

      {/* ================= BEAUTIFUL CERTIFICATE MODAL ================= */}
      {selectedCert && (
        <div className="cert-modal" onClick={closeImage}>
          <div
            className="cert-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cert-close" onClick={closeImage}>×</button>

            <div className="cert-header">
              <h3>{selectedCert.title}</h3>
              <p>{selectedCert.issuer}</p>
            </div>

            <div className="cert-image-container">
              <img
                src={selectedCert.src}
                alt={selectedCert.title}
                className="cert-image"
              />
              <button
                className="download-btn"
                onClick={() => downloadImage(selectedCert.src, `${selectedCert.title}.jpg`)}
                title="Download Certificate"
              >
               ⤓
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ================= PROFILE MODAL ================= */}
      {showProfileModal && (
        <div className="profile-modal" onClick={closeProfileModal}>
          <div
            className="profile-content"
            onClick={(e) => e.stopPropagation()}
          >
            
            <div className="profile-image-container">
              <img
                src={profileImg}
                alt="Profile"
                className="profile-image"
              />
              <button
                className="download-btn"
                onClick={() => downloadImage(profileImg, "G.D. Linali Madhumini Profile.jpg")}
                title="Download Profile Image"
              >
                ⤓
              </button>
              <button className="profile-close" onClick={closeProfileModal}>×</button>
            </div>
          </div>
        </div>
      )}

      {/* ================= CV MODAL ================= */}
      {showCVModal && (
        <div className="cv-modal" onClick={closeCVModal}>
          <div
            className="cv-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="cv-close" onClick={closeCVModal}>×</button>
            <iframe
              src={cv}
              title="CV"
              className="cv-iframe"
            ></iframe>
            <div className="cv-actions">
              <a href={cv} download className="btn primary">
                Download CV
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDUCATION MODAL ================= */}
      {showEducationModal && (
        <div className="education-modal" onClick={closeEducationModal}>
          <div
            className="education-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="education-close" onClick={closeEducationModal}>×</button>
            <div className="education-header">
              <h3>Educational Qualifications</h3>
              <p>--- My academic journey and achievements ---</p>
            </div>
            <br></br>

            <div className="education-timeline">
              <div className="education-item">
                <div className="education-icon">
                  <FaGraduationCap />
                </div>
                <div className="education-details">
                  <h4>Bachelor of Science in Software Engineering</h4>
                  <p className="education-institution">Open University of Sri Lanka</p>
                  <p className="education-year">2023 - Present</p>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <p className="education-description">Currently pursuing undergraduate studies in Software Engineering.</p>
                  <br></br>
                  <div className="education-actions">

                    <button
                      className="btn education-secondary"
                      onClick={() =>
                        openImage({
                          src: higherEduImage,
                          title: "Higher Education Details",
                          issuer: "Open University of Sri Lanka",
                        })
                      }
                    >
                      View Details
                    </button>
                  </div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">
                  <FaCertificate />
                </div>
                <div className="education-details">
                  <h4>Advanced Level Examination</h4>
                  <p className="education-institution">Sripalee College - Horana</p>
                  <p className="education-year">2020 | 2022</p>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <p className="education-description">Completed Advanced Level studies with focus on Mathematics stream and Technology stream.</p>
                  <br></br>
                  <div className="education-actions">
                    <button
                      className="btn education-secondary"
                      onClick={() =>
                        openEducationPDF({
                          src: alResult,
                          title: "Advanced Level Results",
                        })
                      }
                    >
                      View Results
                    </button>
                  </div>
                </div>
              </div>

              <div className="education-item">
                <div className="education-icon">
                  <FaSchool />
                </div>
                <div className="education-details">
                  <h4>Ordinary Level Examination</h4>
                  <p className="education-institution">Sripalee College - Horana</p>
                  <p className="education-year">2017</p>
                  <br></br>
                  <hr></hr>
                  <br></br>
                  <p className="education-description">Successfully completed Ordinary Level examinations covering core subjects and foundation studies.</p>
                 <br></br>
                  <div className="education-actions">
                    <button
                      className="btn education-secondary"
                      onClick={() =>
                        openEducationPDF({
                          src: olResult,
                          title: "Ordinary Level Results",
                        })
                      }
                    >
                      View Results
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ================= EDUCATION PDF MODAL ================= */}
      {selectedEducationPDF && (
        <div className="education-pdf-modal" onClick={closeEducationPDF}>
          <div
            className="education-pdf-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="education-pdf-close" onClick={closeEducationPDF}>×</button>
            <h3>{selectedEducationPDF.title}</h3>
            <iframe
              src={selectedEducationPDF.src}
              title={selectedEducationPDF.title}
              className="education-pdf-iframe"
            ></iframe>
            <div className="education-pdf-actions">
              <a href={selectedEducationPDF.src} download className="btn primary">
                Download {selectedEducationPDF.title}
              </a>
            </div>
          </div>
        </div>
      )}

      {/* ================= PROJECT MODAL ================= */}
      {showProjectModal && selectedProject && (
        <div className="project-modal" onClick={closeProjectModal}>
          <div
            className="project-content"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="project-close" onClick={closeProjectModal}>×</button>
            <div className="project-modal-header">
              <h3>{selectedProject.title}</h3>
            </div>
            <div className="project-modal-body">
              <div className="project-image-container">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="project-image"
                />
              </div>
              <div className="project-details">
                <p className="project-description">{selectedProject.description}</p>
                <div className="project-tech-list">
                  <h4>Technologies Used:</h4>
                  <ul>
                    {selectedProject.tech.map((tech, index) => (
                      <li key={index}>{tech}</li>
                    ))}
                  </ul>
                </div>
                <div className="project-links">
                  <a href={selectedProject.liveDemo} target="_blank" rel="noopener noreferrer" className="btn primary">
                    {selectedProject.demoText || "Live Demo"}
                  </a>
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="btn secondary">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* SKILLS */}
      <section id="skills" className="section reveal slide-left">
        <h2>Technical Skills</h2>

        <div className="skills-grid">
          {/* Row 1 */}
          <div className="skill-item">
            <FaJs style={{ color: "#F7DF1E" }} />
            <span>JavaScript</span>
          </div>

          <div className="skill-item">
            <FaReact style={{ color: "#61DAFB" }} />
            <span>React.js</span>
          </div>

          <div className="skill-item">
            <SiMongodb style={{ color: "#47A248" }} />
            <span>MongoDB</span>
          </div>

          <div className="skill-item">
            <FaNodeJs style={{ color: "#339933" }} />
            <span>Node.js</span>
          </div>

          {/* Row 2 */}
          <div className="skill-item">
            <SiExpress style={{ color: "#000000" }} />
            <span>Express.js</span>
          </div>

          <div className="skill-item">
            <FaHtml5 style={{ color: "#E34F26" }} />
            <span>HTML5</span>
          </div>

          <div className="skill-item">
            <FaCss3Alt style={{ color: "#1572B6" }} />
            <span>CSS3</span>
          </div>

          <div className="skill-item">
  <a
    href="https://www.sololearn.com/certificates/CC-X5GBHBGO"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
    <FaPython style={{ color: "#3776AB" }} />
    <span>Python</span>
  </a>
</div>


          {/* Row 3 */}
          <div className="skill-item">
            <SiMysql style={{ color: "#4479A1" }} />
            <span>SQL</span>
          </div>

          <div className="skill-item">
            <FaGitAlt style={{ color: "#F05032" }} />
            <span>Git & GitHub</span>
          </div>

          <div className="skill-item">
  <a
    href="https://www.sololearn.com/certificates/CC-F1RK7OQO"
    target="_blank"
    rel="noopener noreferrer"
    style={{ textDecoration: "none", color: "inherit" }}
  >
       
    <FaJava style={{ color: "#007396" }} />
    <span>Java</span>
  </a>
</div>


          <div
            className="skill-item"
            onClick={() =>
              openImage({
                src: mlImage,
                title: "Machine Learning Certificate",
                issuer: "Your Issuer",
              })
            }
            style={{ cursor: "pointer" }}
          >
            <FaBrain style={{ color: "#FF6B6B" }} />
            <span>Machine Learning</span>
          </div>
          <p style={{ textAlign: "center", marginTop: "15px", fontStyle: "italic", color: "#ccc" }}>
    💡 Click an icon to view the certificate (Java, Python, Machine Learning)
  </p>
        </div>
        
      </section>

      {/* PROJECTS */}

<section id="projects" className="section projects-section reveal">
  <h2 className="section-title">Projects</h2>
  <p className="section-subtitle">
    A selection of projects showcasing my skills and problem-solving abilities
  </p>

  {/* Tabs */}
  <div className="tabs" style={{
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '40px',
    gap: '20px',
    flexWrap: 'wrap'
  }}>
    <button
      className={`tab-button ${activeTab === 'projects' ? 'active' : ''}`}
      onClick={() => setActiveTab('projects')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '15px 25px',
        border: 'none',
        background: activeTab === 'projects'
          ? 'linear-gradient(135deg, #1a1a2e, #16213e)'
          : 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        color: activeTab === 'projects' ? '#47b5ff' : '#495057',
        cursor: 'pointer',
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: activeTab === 'projects'
          ? '0 8px 25px rgba(0, 123, 255, 0.3)'
          : '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: activeTab === 'projects' ? 'scale(1.05)' : 'scale(1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        if (activeTab !== 'projects') {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (activeTab !== 'projects') {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      <FaFolderOpen style={{ fontSize: '20px' }} />
      Projects
      {activeTab === 'projects' && (
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: 'shine 2s infinite'
        }} />
      )}
    </button>
    <button
      className={`tab-button ${activeTab === 'documents' ? 'active' : ''}`}
      onClick={() => setActiveTab('documents')}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        padding: '15px 25px',
        border: 'none',
        background: activeTab === 'documents'
          ? 'linear-gradient(135deg, #0f3460, #0a1f3d)'
          : 'linear-gradient(135deg, #f8f9fa, #e9ecef)',
        color: activeTab === 'documents' ? '#fff' : '#495057',
        cursor: 'pointer',
        borderRadius: '25px',
        fontSize: '16px',
        fontWeight: 'bold',
        boxShadow: activeTab === 'documents'
          ? '0 8px 25px rgba(40, 167, 69, 0.3)'
          : '0 4px 15px rgba(0, 0, 0, 0.1)',
        transition: 'all 0.3s ease',
        transform: activeTab === 'documents' ? 'scale(1.05)' : 'scale(1)',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        if (activeTab !== 'documents') {
          e.target.style.transform = 'scale(1.02)';
          e.target.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (activeTab !== 'documents') {
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
        }
      }}
    >
      <FaFileAlt style={{ fontSize: '20px' }} />
      Project Documents
      {activeTab === 'documents' && (
        <div style={{
          position: 'absolute',
          top: '0',
          left: '0',
          width: '100%',
          height: '100%',
          background: 'rgba(255, 255, 255, 0.1)',
          animation: 'shine 2s infinite'
        }} />
      )}
    </button>
  </div>

  <style jsx>{`
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(100%); }
    }
  `}</style>

  {/* Tab Content */}
  {activeTab === 'projects' && (
    <div className="projects-grid" style={{
      animation: 'fadeIn 0.5s ease-in-out',
      opacity: activeTab === 'projects' ? 1 : 0,
      transform: activeTab === 'projects' ? 'translateY(0)' : 'translateY(20px)',
      transition: 'opacity 0.5s ease-in-out, transform 0.5s ease-in-out'
    }}>
      <div className="project-card" style={{ "--i": 1 }}>
        <div className="project-header">
          <h3>My Portfolio</h3>
          <span className="project-tag">Completed</span>
        </div>

        <p className="project-description">
          An interactive and gamified personal portfolio built with React,
          featuring animations, smooth transitions, and a modern UI.
        </p>

        <ul className="project-tech">
          <li>React</li>
          <li>CSS</li>
          <li>Animations</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "My Portfolio",
            image: linaliImg,
            description: "An interactive and gamified personal portfolio built with React, featuring animations, smooth transitions, and a modern UI. This project showcases my skills in front-end development, UI/UX design, and creating engaging user experiences.",
            tech: ["React", "CSS", "Animations"],
            liveDemo: "https://your-portfolio-link.com",
            github: "https://github.com/yourusername/portfolio"
          })}>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <h3>Green Nature</h3>
          <span className="project-tag">Completed</span>
        </div>

        <p className="project-description">
          An interactive platform that educates users on
          eco-friendly practices, with practical knowledge and actionable steps toward a more sustainable lifestyle.
        </p>

        <ul className="project-tech">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "Green Nature",
            image: greenNatureImg,
            description: "An interactive platform that educates users on eco-friendly practices, with practical knowledge and actionable steps toward a more sustainable lifestyle. Features include interactive quizzes, resource guides, and community forums.",
            tech: ["HTML", "CSS", "JavaScript"],
            liveDemo: greenNatureVideo,
            github: "https://github.com/corelina98-bot/Green-Nature.git",
            demoText: "Demo Video"
          })}>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <h3>Smart O/L ICT</h3>
          <span className="project-tag">Ongoing</span>
        </div>

        <p className="project-description">
          The Smart O/L Gamified Web Application is for G.C.E Ordinary Level students to help learn ICT
          effectively and enjoyably using gamification techniques.
        </p>

        <ul className="project-tech">
          <li>MongoDB</li>
          <li>Express.js</li>
          <li>React</li>
          <li>Node.js</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "Smart O/L ICT",
            image: olIctImg,
            description: "The Smart O/L Gamified Web Application is for G.C.E Ordinary Level students to help learn ICT effectively and enjoyably using gamification techniques. It includes interactive lessons, quizzes, and rewards to motivate students.",
            tech: ["MongoDB", "Express.js", "React", "Node.js"],
            liveDemo: "",
            github: "https://github.com/corelina98-bot/Smart-OL-ICT.git"
          })}>View Project</button>
        </div>
      </div>

    

      <div className="project-card">
        <div className="project-header">
          <h3>ePermit</h3>
          <span className="project-tag">Completed</span>
        </div>

        <p className="project-description">
          This project is a developed web-based system to simplify the permit approval process under the domain of Politics and Governance.
        </p>

        <ul className="project-tech">
          <li>Web Technologies</li>
          <li>UI/UX Design</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "ePermit",
            image: olIctImg,
            description: "This project is a developed web-based system to simplify the permit approval process under the domain of Politics and Governance. I made the complete SRS document which include use case diagrams, functional & non-functional requirements and UI mockups.",
            tech: ["Web Technologies", "UI/UX Design"],
            liveDemo: "",
            github: ""
          })}>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <h3>GN QuickCheck</h3>
          <span className="project-tag">Completed</span>
        </div>

        <p className="project-description">
          This project is a A Mindful Digital Platform for Checking Grama Niladhari Availability and Required Documentation.
        </p>

        <ul className="project-tech">
          <li>UX Design</li>
          <li>Prototyping</li>
          <li>UI/UX Research</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "GN QuickCheck",
            image: greenNatureImg,
            description: "This project is a A Mindful Digital Platform for Checking Grama Niladhari Availability and Required Documentation. In this project we designed a digital platform prototype to check Grama Niladhari availability and also conducted UX research and collaborated with team members to improve usability.",
            tech: ["UX Design", "Prototyping", "UI/UX Research"],
            liveDemo: "",
            github: ""
          })}>View Project</button>
        </div>
      </div>

      <div className="project-card">
        <div className="project-header">
          <h3>Bank App</h3>
          <span className="project-tag">Completed</span>
        </div>

        <p className="project-description">
          This project is about a analysis and a Python command-line app that simulates a basic bank account management system.
        </p>

        <ul className="project-tech">
          <li>Python</li>
        </ul>

        <div className="project-actions">
          <button onClick={() => openProjectModal({
            title: "Bank App",
            image: linaliImg,
            description: "A Python-based bank application project.",
            tech: ["Python"],
            liveDemo: "",
            github: ""
          })}>View Project</button>
        </div>
      </div>
    </div>
  )}

  {activeTab === 'documents' && (
    <div className="certificates-section">
      <div className="projects-grid">
        <div
          className="project-card certificate"
          onClick={() =>
            openEducationPDF({
              src: ePermit,
              title: "ePermit Project Document",
            })
          }
        >
          <h4>ePermit Project Document</h4>
          <p>University Project</p>
          <p>June 2025</p>
        </div>

        <div
          className="project-card certificate"
          onClick={() =>
            openEducationPDF({
              src: gnQuickCheck,
              title: "GN QuickCheck Project Document",
            })
          }
        >
          <h4>GN QuickCheck Project Document</h4>
          <p>University Group Project</p>
          <p>October 2025</p>
        </div>

        <div
          className="project-card certificate"
          onClick={() =>
            openEducationPDF({
              src: bankApp,
              title: "Bank App (Python) Project Document",
            })
          }
        >
          <h4>Bank App (Python) Project Document</h4>
          <p>Python Project</p>
          <p>Completed</p>
        </div>
      </div>
    </div>
  )}
</section>


      {/* CONTACT */}
      <section id="contact" className="section contact reveal slide-right">
        <h2>Contact</h2>

        <div className="contact-icons">
          <a href="https://github.com/corelina98-bot"><FaGithub /></a>
          <a href="https://www.linkedin.com/in/linali-madhumini-06958935a"><FaLinkedin /></a>
          <a href="https://www.instagram.com/linalimadhumini?igsh=MXE1b3ljbzgzbmR3Ng=="><FaInstagram /></a>
          <a href="https://wa.me/94755852082" target="_blank"><FaWhatsapp /></a>
          <a href="mailto:s23010147@ousl.lk"><FaEnvelope /></a>
        </div>

        <p>Email: s23010147@ousl.lk</p>
        <p>Role: Software Engineer</p>
      </section>

      <footer>
        <p>© 2025 G.D. Linali Madhumini</p>
      </footer>
    </>
  );
};

export default Portfolio;
