export default function Projects() {
  const projects = [
    {
      title: "To-Do App",
      description: "A task management app built in React Native.",
      link: "https://raychgot.github.io/new-todo-app1/"
    }, 
    {
      title: "Exercise Tracker",
      description: "Tracks reps and durations using React Native & Expo.",
      link: "https://raychgot.github.io/updated-exercise-app1/"
    },
    {
      title: "Personal Website",
      description: "My personal website created in the Front-End Web Design course showcasing other past projects.",
      link: "https://students.gaim.ucf.edu/~ra617629/Dig3174C/FinalProject.html"
    }
  ];

  return (
    <div className="content-wrapper">
      <h1>My Projects</h1>
      <br /><br />
      <ul>
        {projects.map((project, index) => (
          <ul key={index} style={{ marginBottom: "20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a 
              href={project.link} 
              target="_blank" 
              rel="noreferrer"
            >
              {index === 2 ? "View on students.gaim.ucf.edu" : "View on GitHub"}
            </a>
          </ul>
        ))}
      </ul>
    </div>
  );
}

