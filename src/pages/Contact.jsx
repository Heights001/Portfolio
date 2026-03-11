import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yfhlfd8",
        "template_7twxepd",
        form.current,
        "U5Rg5W0h2xZKYPAsu"
      )
      .then(
        () => {
          alert("Message sent successfully!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message.");
        }
      );

    e.target.reset();
  };

  return (
    <section id="contact" className="p-6 max-w-7xl mx-auto bg-gray-100 mt-10">
      <div className="flex items-center mb-6">
        <div className="h-12 w-2 bg-green-500"></div>
        <h2 className="font-bold text-2xl sm:text-4xl ml-5">
          Contact Me
        </h2>
      </div>

      <p className="text-gray-700 max-w-2xl mb-10">
        I am currently open to internship opportunities and collaborations.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

        {/* Contact Info */}
        <div className="space-y-6">
          <p className="text-gray-800">danielyboah777@gmail.com</p>
        </div>

        {/* Contact Form */}
        <form
          ref={form}
          onSubmit={sendEmail}
          className="bg-white p-6 rounded-lg shadow space-y-4"
        >
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          />

          <textarea
            name="message"
            rows="4"
            placeholder="Your Message"
            required
            className="w-full border border-gray-300 rounded px-4 py-2"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded font-semibold hover:bg-green-600"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;