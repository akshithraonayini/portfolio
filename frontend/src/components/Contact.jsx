import React, { useState, useEffect } from "react";
import { Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [stars, setStars] = useState([]);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  // Backend URL from Vercel environment variable
  const BACKEND_URL = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  // Generate stars and handle mouse movement
  useEffect(() => {
    const generateStars = () => {
      const newStars = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          id: i,
          left: Math.random() * 100,
          top: Math.random() * 100,
          size: Math.random() * 2 + 1,
          duration: Math.random() * 3 + 2,
          delay: Math.random() * 2,
        });
      }
      setStars(newStars);
    };
    generateStars();

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch(`${BACKEND_URL}/messages`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        throw new Error(`Error: ${res.status}`);
      }

      const data = await res.json();
      alert(data.message || "Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      console.error(err);
      alert("Error sending message. Please try again later.");
    }
    setLoading(false);
  };

  return (
    <section className="min-h-screen relative overflow-hidden flex flex-col items-center justify-center px-6 py-20">
      {/* Stars Background */}
      <div className="absolute inset-0 overflow-hidden">
        {stars.map((star) => (
          <div
            key={star.id}
            className="absolute rounded-full bg-white"
            style={{
              left: `${star.left}%`,
              top: `${star.top}%`,
              width: `${star.size}px`,
              height: `${star.size}px`,
              animation: `twinkle ${star.duration}s ease-in-out ${star.delay}s infinite`,
            }}
          />
        ))}
      </div>

      {/* Contact Form */}
      <div className="relative z-10 w-full max-w-2xl">
        <h2 className="text-4xl font-bold text-center mb-6">Get in Touch</h2>
        <form
          onSubmit={handleSubmit}
          className="bg-white bg-opacity-10 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white border-opacity-20 flex flex-col gap-6"
        >
          <input
            name="name"
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-5 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input
            name="email"
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-5 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="6"
            value={form.message}
            onChange={handleChange}
            required
            className="w-full bg-white bg-opacity-5 border border-gray-600 rounded-xl px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
          ></textarea>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-6 py-3 rounded-xl hover:from-blue-600 hover:to-purple-700 transition duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
          >
            {loading ? "Sending..." : "Send Message"} <Send size={18} />
          </button>
        </form>

        {/* Social Links */}
        <div className="mt-10 text-center">
          <p className="text-gray-300 mb-2">Or reach me at:</p>
          <a
            href="mailto:akshithrao190@example.com"
            className="font-medium text-white text-lg hover:text-blue-400 transition duration-300"
          >
            akshithrao190@example.com
          </a>

          <div className="flex justify-center gap-6 mt-8">
            <a
              href="https://github.com/akshithraonayini"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-gray-400 to-gray-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white bg-opacity-10 p-4 rounded-full border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 transform hover:scale-110">
                <Github size={28} className="text-white" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/akshith-rao-nayini/"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-300"></div>
              <div className="relative bg-white bg-opacity-10 p-4 rounded-full border border-white border-opacity-20 hover:bg-opacity-20 transition duration-300 transform hover:scale-110">
                <Linkedin size={28} className="text-blue-400" />
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
