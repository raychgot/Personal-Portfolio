import { motion } from "framer-motion";
import heroImg from "../assets/hero.jpg"; //image

export default function Home() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <div style={{ textAlign: "center", padding: "40px" }}>
        <img src={heroImg} alt="Rachel Gottlieb" style={{ maxWidth: "300px", borderRadius: "50%" }} />
        <h1>Hi, I'm Rachel Gottlieb</h1>
        <p>Digital Media Student</p>
      </div>
    </motion.div>
  );
}
