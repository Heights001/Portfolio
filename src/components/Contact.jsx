function Contact() {
  return (
    <section
      id="contact"
      className="p-6 max-w-7xl mx-auto bg-gray-100 mt-10"
    >
      {/* Section title */}
      <div className="flex items-center mb-6">
        <div className="h-12 w-2 bg-green-500"></div>
        <h2 className="font-bold text-2xl sm:text-4xl ml-5">
          Contact Me
        </h2>
      </div>

      {/* Description */}
      <p className="text-gray-700 max-w-2xl mb-10">
        I am currently open to internship opportunities and collaborations.
        Feel free to reach out if you would like to discuss a role, project,
        or just connect.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Contact Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <ion-icon
              name="mail-outline"
              class="text-green-500 text-2xl"
            ></ion-icon>
            <span className="text-gray-800">
              danielyboah777@gmail.com
            </span>
          </div>

          <div className="flex items-center gap-4">
            <ion-icon
              name="logo-linkedin"
              class="text-green-500 text-2xl"
            ></ion-icon>
            <a
              href="https://www.linkedin.com/in/daniel-yeboah-6a8702269"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:underline"
            >
              LinkedIn Profile
            </a>
          </div>

          <div className="flex items-center gap-4">
            <ion-icon
              name="logo-github"
              class="text-green-500 text-2xl"
            ></ion-icon>
            <a
              href="https://github.com/Heights001"
              target="_blank"
              rel="noreferrer"
              className="text-gray-800 hover:underline"
            >
              GitHub Profile
            </a>
          </div>
        </div>

        {/* Simple Contact Form (UI only) */}
        <form className="bg-white p-6 rounded-lg shadow space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          />

          <textarea
            rows="4"
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
          ></textarea>

          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded font-semibold hover:bg-green-600 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
