function PersonalInfo() {
  return (
    <section id="personal" className="pt-24 p-6 max-w-7xl mt-20 mx-auto bg-gray-200 rounded-lg shadow-md">
      <div className="text-center">
        <h1 className="font-bold text-3xl sm:text-4xl tracking-tight text-gray-700">
          Daniel Okoh Yeboah
        </h1>

        <h2 className="text-xl text-gray-700 tracking-wide mt-5">
          Software and AI Engineer
        </h2>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="/resume/Daniel_Okoh_Yeboah_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-gray-800 inline-block"
          >
           View CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
