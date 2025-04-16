import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return alert("All fields required.");
    setSubmitted(true);
  };

  return (
    <div className="content-wrapper">
      <h1>Contact Me</h1>
      <br></br>
      {submitted ? (
        <p>Thanks for your message, {form.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }} />
          <textarea name="message" placeholder="Message" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }}></textarea>
          <br></br>
          <button type="submit">Send</button>
        </form>
      )}
<br></br><br></br><br></br><br></br><br></br><br></br><br></br>
      <h2>Follow Me</h2>
      <br></br>
      <h3>
        <a href="https://github.com/raychgot" target="_blank" rel="noreferrer">GitHub</a> | 
        <a href="https://www.linkedin.com/in/rachelgottliebb/" target="_blank" rel="noreferrer"> LinkedIn</a>
      </h3>
    </div>
  );
}

