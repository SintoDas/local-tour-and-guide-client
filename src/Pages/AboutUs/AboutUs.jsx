import React from "react";

const AboutUs = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800 mb-4">
            About Our Team
          </h2>
          <p className="text-gray-600">
            Discover the people behind our tours and guide service.
          </p>
        </div>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="text-center">
            <img
              src="team-member-image-1.jpg"
              alt="Team Member 1"
              className="w-32 h-32 object-cover mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              John Doe
            </h3>
            <p className="text-gray-600">Tour Guide</p>
          </div>
          <div className="text-center">
            <img
              src="team-member-image-2.jpg"
              alt="Team Member 2"
              className="w-32 h-32 object-cover mx-auto rounded-full"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">
              Jane Smith
            </h3>
            <p className="text-gray-600">Tour Organizer</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
