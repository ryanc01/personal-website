import React from "react";

const Resume = () => {
  return (
    <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Resume
      </h1>
      {/* Embed PDF */}
      <div className="flex justify-center">
        <embed
          src="Resume.pdf"
          type="application/pdf"
          width="100%"
          height="800px"
        />
      </div>
    </div>
  );
};

export default Resume;
