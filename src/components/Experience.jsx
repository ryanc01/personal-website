import React from "react";
import ExperienceItem from "./ExperienceItem";

const data = [
  {
    year: 2024,
    title: "Software Engineer Co-op at IBM",
    duration: "Sep 2024 - Present",
    details:
      "Working as a developer on the same hybrid cloud project from my internship.",
  },
  {
    year: 2024,
    title: "Software Engineer Intern at IBM",
    duration: "May 2024 - Aug 2024",
    details:
      "I worked on an agile development team to develop a full-stack serverless AWS application that highlights multi-cloud sprawl issues and reduces cloud costs by up to 42%. I presented the application and held a live demonstration to 60+ person audience including multiple executives.",
  },
  {
    year: 2024,
    title: "Graduated from Virginia Tech",
    duration: "2019 - 2024",
    details:
      "I graduated with a Bachelors of Science in Computer Engineering with a focus in Networking & Cybersecurity and a minor in Computer Science. Coursework included: Intro to AI, Applied Software Design, iOS Development, Network Application Design, Data Structures & Algorithms, Software Design & Data Structures, Embedded Systems, Computer Networking, Computer & Network Security, Computer Architecture, and Computational Engineering.",
  },
  {
    year: 2023,
    title: "Intern at Thorben Consulting",
    duration: "June 2023 - Aug 2023",
    details:
      "Used the AWS Management Console to develop, debug, and deploy cloud-based applications that follow AWS best practices.",
  },
];
const Experience = () => {
  return (
    <div id="experience" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">
        Experience
      </h1>
      {data.map((item, idx) => (
        <ExperienceItem
          key={idx}
          year={item.year}
          title={item.title}
          duration={item.duration}
          details={item.details}
        />
      ))}
    </div>
  );
};

export default Experience;
