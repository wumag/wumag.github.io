import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";
import React, { Component }  from 'react';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title, subtitle, link }) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
        {link ? <a href={link}>{subtitle}</a> : <p>{subtitle}</p>}
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-20 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-yellow">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <pre>     </pre>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <Project title="Kwik-E-Mart Website" subtitle="A client-side app that allows users to order products and register for an email subscription" link="https://github.com/wumag/osu-cs290-f22-project-8"/>
          <Project title="Calorie Calculator" subtitle="A text-based calculator using the Mifflin-St Jeor formula to calculate calories needed a day to maintain current weight" link="https://github.com/wumag/osu-cs361-w23-calorie-calculator"/>
          <Project title="Exercise Tracker" subtitle="A single page application that tracks exercises completed by the user" link="https://github.com/wumag/osu-cs290-f22-portfolio"/>

          {/* ROW 2 */}
          <Project title="User Database" subtitle="A web app that modelled a random users properties using separate model code and controller code" link="https://github.com/wumag/osu-cs290-f22-project-6"/>
          <Project title="Ludo Game" subtitle="A strategy board game involving object-oriented programming principles, multiple classes, and data structures" link="https://github.com/wumag/osu-cs162-u22-portfolio"/>
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            And more projects in the making...
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
