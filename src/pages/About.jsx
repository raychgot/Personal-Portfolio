export default function About() {
  return (
    <div className="content-wrapper">
      <h1>About Me</h1>
      <br />
      <p className="about-text">
        While studying digital media at the University of Central Florida, I have gained many skills and insight into this industry.
        My coursework has covered interactive design, web design, and mobile app development.
        With a passion for content strategy, digital communication, and front-end development, I am eagar continue learning and building my skills.
        I've worked with content tools like Canva, Photoshop, Figma, and have built interactive apps through React. In the past, 
        I have taken on roles that have helped me to grow my skills within the communication field. I have designed and managed ad sales for a yearbook campaign, 
        assisted with social media and promotional efforts for a retail brand, created and edited content online for an educational app, 
        and have gained experience in business communication and customer engagement through various roles. I am looking forward to creating new projects and 
        learning new tools as I grow as a student in this industry.
      </p>

      <div className="skills-vertical">
        <div className="skill-category">
          <h3>Technologies</h3>
          <div className="skill-items">
            <span className="skill-bubble">Visual Studio Code</span>
            <span className="skill-bubble">Canva</span>
            <span className="skill-bubble">Microsoft Office</span>
            <span className="skill-bubble">Google Drive</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Languages</h3>
          <div className="skill-items">
            <span className="skill-bubble">JavaScript</span>
            <span className="skill-bubble">React</span>
            <span className="skill-bubble">HTML</span>
            <span className="skill-bubble">CSS</span>
          </div>
        </div>

        <div className="skill-category">
          <h3>Soft Skills</h3>
          <div className="skill-items">
            <span className="skill-bubble">Teamwork</span>
            <span className="skill-bubble">Communication</span>
            <span className="skill-bubble">Organization</span>
            <span className="skill-bubble">Time Management</span>
          </div>
        </div>
      </div>
    </div>
  );
}