import profilePic from "../assets/image.jpg";

function PersonalInfo() {
  return (
    <section className="pt-24 p-6 max-w-7xl mt-20 mx-auto bg-gray-200">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Text */}
        <div>
          <h1 className="font-bold text-3xl sm:text-4xl tracking-tight text-gray-700">
            Daniel Okoh Yeboah
          </h1>

          <h2 className="text-xl text-gray-700 tracking-wide mt-5">
            Software Developer
          </h2>

          <p className="mt-4 text-gray-600">
            Junior Software Developer passionate about building responsive and user-friendly web applications. Currently seeking internship opportunities.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="bg-gray-700 text-white rounded-md px-6 py-3 font-semibold hover:bg-gray-800">
              Resume
            </button>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center">
          <img
            src={profilePic}
            alt="Profile"
            className="h-80 rounded-md object-cover shadow-lg border-4 border-gray-500"
          />
        </div>
      </div>
    </section>
  );
}

export default PersonalInfo;
