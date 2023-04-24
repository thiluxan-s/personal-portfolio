import React from "react";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#5651e5]">
            About
          </p>
          <h2>Who I Am</h2>
          <p className="py-2 text-gray-600">
            / / I am not your normal developer.
          </p>
          <p className="py-2 text-gray-600">
            I have spent 8 years in the hospitality service industry managing a
            chain of restaurants and cafes. I have always had a knack for
            technology and working with computers. In 2014 I started working in
            SEO and content management. This led to me picking up HTML & CSS to
            make minor edits to websites of various businesses. What I thought
            was just a few edits quickly turned into a love for programming.
          </p>
          <p className="py-2 text-gray-600">
            Fascinated with how intricate programming can be I was quickly drawn
            to learn more. I started learning JavaScript and was even more
            enthused with making websites interactive. I then started
            freelancing for various contractees. I am now spending my time
            building projects with NextJS while learning new technologies.
          </p>
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out some of my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className="rounded-xl"
            src="https://images.unsplash.com/photo-1553390774-b4822481c894?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=744&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
