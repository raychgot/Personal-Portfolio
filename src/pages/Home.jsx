import { motion } from "framer-motion";
import heroImg from "../assets/pic.jpeg";
import projectPreview1 from "../assets/project1-preview.jpg"; 
import projectPreview2 from "../assets/project2-preview.jpg"; 
import projectPreview3 from "../assets/project3-preview.jpg"; 

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div className="content-wrapper">
        <div className="hero-section">
          <img
            src={heroImg}
            alt="Rachel Gottlieb"
            className="profile-img"
          />
          <div className="hero-text">
            <h1>Welcome to my Portfolio!</h1>
            <br></br>
            <p className="intro-text">
              Hi, I'm Rachel Gottlieb. I'm a Digital Media student at the University of Central Florida, 
              focusing on Web and Interactive Media. In this portfolio, you will find some of my Mobile Development class projects, as well as a peronsal website with other projects from past courses. 
              I enjoy creating user-centered designs and interactive experiences that blend functionality and style. 
              From past designs to current projects, this portfolio represents my ongoing journey within digital media.
            </p>
          </div>
        </div>

        <div className="featured-section">
          <h2>What I'm Passionate About</h2>
          <div className="passion-grid">
            <div className="passion-item">
              <h3>Creative Development</h3>
              <p>Building interactive experiences that tell stories and engage users</p>
            </div>
            <div className="passion-item">
              <h3>Clean Aesthetics</h3>
              <p>Designs that balance beauty with intuitive functionality</p>
            </div>
            <div className="passion-item">
              <h3>Content Production</h3>
              <p>Bringing content to life with solid and engaging designs.</p>
            </div>
          </div>
        </div>

        <div className="preview-section">
          <h2>Project Previews</h2>
          <div className="project-previews">
            <img src={projectPreview1} alt="Mobile App Project" className="project-preview" />
            <img src={projectPreview2} alt="Website Design" className="project-preview" />
            <img src={projectPreview3} alt="Mobile App Project" className="project-preview" />
          </div>
          <a href="Personal-Portfolio/projects" className="cta-button">See All Projects →</a>
        </div>

        <div className="home-extra">
          <h4>
            Feel free to explore my work, learn more about me, or get in touch through the contact page!
          </h4>
        </div>
      </div>
    </motion.div>
  );
}