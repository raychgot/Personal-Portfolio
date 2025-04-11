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
    <div style={{ padding: "40px" }}>
      <h2>Contact Me</h2>
      {submitted ? (
        <p>Thanks for your message, {form.name}!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Name" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }} />
          <input type="email" name="email" placeholder="Email" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }} />
          <textarea name="message" placeholder="Message" onChange={handleChange} style={{ display: "block", margin: "10px 0", width: "100%" }}></textarea>
          <button type="submit">Send</button>
        </form>
      )}

      <h3>Follow Me</h3>
      <p>
        <a href="https://github.com/raychgot" target="_blank" rel="noreferrer">GitHub</a> | 
        <a href="https://linkedin.com/in/rachelgottlieb" target="_blank" rel="noreferrer"> LinkedIn</a>
      </p>
    </div>
  );
}
