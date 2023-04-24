import React from "react";
import photographySite from "../public/assets/projects/Vizion.png";
import cryptoCoins from "../public/assets/projects/CryptoCoinSearch.png";
import cookBook from "../public/assets/projects/cookbook.png";
import dexApp from "../public/assets/projects/dex.png";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div id="projects" className="w-full pt-4">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Projects
        </p>
        <h2 className="py-4">What I've Built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Photography Services"
            backgroundImg={photographySite}
            projectUrl="/photography"
            techStack="NextJS"
          />
          <ProjectItem
            title="Crypto App"
            backgroundImg={cryptoCoins}
            projectUrl="/crypto"
            techStack="React JS"
          />
          <ProjectItem
            title="Cookbook"
            backgroundImg={cookBook}
            projectUrl="/cookbook"
            techStack="React JS | Firebase"
          />
          <ProjectItem
            title="Crypto DEX (1inch API)"
            backgroundImg={dexApp}
            projectUrl="/dex"
            techStack="JavaScript"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
