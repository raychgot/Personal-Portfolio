export default function About() {
  return (
    <div className="content-wrapper">
      <h1>About Me</h1>
      <br />
      <p className="about-text">
        I am a digital media student at the University of Central Florida with a passion for content strategy, digital communication, and front-end development.
        I've worked with content tools like Canva, managed ad campaigns, and built interactive apps. My coursework has covered interactive design, web design, and mobile app development.
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