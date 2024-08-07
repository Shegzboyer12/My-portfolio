import React, { useState } from "react";
import Header from "../../component/Header/header";
import Image from "../../image/Web.webp";
import Footer from "../../component/Footer/footer";
import emailjs from "emailjs-com";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_vcspgqk', 'template_f60d53h', e.target, 'KMzlrCxBT0LCDvzPx')
      .then((result) => {
        console.log(result.text);
        alert("Message Sent!");
      }, (error) => {
        console.log(error.text);
        alert("An error occurred, please try again.");
      });
  };

  return (
    <div className="bg-black text-white min-h-screen flex flex-col">
      <div
        className="relative h-[560px] bg-cover bg-center"
        style={{ backgroundImage: `url(${Image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="flex flex-col relative h-full w-full md:w-5/12 min-h-screen items-center text-center justify-center md:ml-[31%] pb-36 px-4">
          <div className="flex mb-48"><Header /></div>
          <div className="mb-56 flex flex-col gap-2 items-center">
            <h1 className="text-5xl font-bold">ABOUT</h1>
            <p className="text-xl w-72">I'm a front-end developer, I create responsive websites.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center p-6 flex-grow">
        <form className="w-full max-w-lg" onSubmit={handleSubmit}>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Your Name</h2>
            <input 
              type="text" 
              name="name"
              placeholder="Input your name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Your Email</h2>
            <input 
              type="email" 
              name="email"
              placeholder="Input your email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Subject</h2>
            <input 
              type="text" 
              name="subject"
              placeholder="Input Subject" 
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold mb-2">Message</h2>
            <textarea 
              name="message"
              placeholder="Write your message here" 
              rows="4" 
              value={formData.message}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md text-black"
            />
          </div>
          <div>
            <button type="submit" className="bg-yellow-400 w-full h-10 rounded-md hover:bg-yellow-500 transition-colors">
              Submit
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
