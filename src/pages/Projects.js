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
      description: "My personal portfolio built with React and Vite.",
      link: "https://github.com/raychgot/portfolio-site"
    }
  ];

  return (
    <div style={{ padding: "40px" }}>
      <h2>My Projects</h2>
      <ul>
        {projects.map((project, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noreferrer">View on GitHub</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
