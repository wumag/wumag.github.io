import LineGradient from "../components/LineGradient";
// import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import React, { Component }  from 'react';

const About = () => {
  // const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="about" className="pt-0 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-20">
        <motion.div
          className="md:w-3/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            ABOUT <span className="text-yellow">ME</span>
          </p>
          <LineGradient width="w-1/5" />
          <p className="mt-10 mb-2">
            <b>I was</b> a resident advisor, a campus senator, and a club secretary at California Polytechnnic State
            University, San Luis Obispo where I graduated cum laude with a bachelor's degree in Nutrition.
          </p>
          <p className="mt-2 mb-2">
            <b>I am</b> a post-baccalaureate computer science student at Oregon State University, on track to graduate
            by fall of 2023.
          </p>
          <p className="mt-2 mb-2">
            <b>I love</b> to create aesthetically pleasing pieces, whether it be through programming, digital design or 
            on my Instagram reels. 
          </p>
          <p className="mt-2 mb-2">
            <b>I strive</b> to go outside of my comfort zone and explore my limits as a continuous learner.
          </p>
        </motion.div>
        </div>
        <div>
          <p className="font-playfair font-semibold text-xl mt-10 mb-0">
            <center>In my free time, you can find me...</center>
          </p>
        </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-6 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">01</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 mb-5">
                Weight-Lifting
              </p>
            </div>
            <img alt="deadlift" src="../assets/icons8-deadlift-100.png" />
          </div>
          <p className="mt-10">
            I do this to intimidate the men around me. Jokes aside, lifting empowers me and sculpts me into a
            stronger individual, both mentally and physically. And I just love blasting EDM on max volume. :)
          </p>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">02</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 mb-5">
                Coffee-ing
              </p>
            </div>
            <img alt="coffee" src="../assets/icons8-cafe-100.png" />
          </div>
          <p className="mt-10">
            I have a <i>slight</i> caffeine addiction... Preworkout to get me pumped up for deadlifts, tea to keep
            me warm in those freezing PNW winters, and coffee because I work as a barista part-time! I love me a good
            oatmilk cortado.
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              {/* <p className="font-playfair font-semibold text-5xl">03</p> */}
              <p className="font-playfair font-semibold text-3xl mt-3 mb-5">
                Baking
              </p>
            </div>
            <img alt="cake" src="../assets/icons8-cake-100.png" />
          </div>
          <p className="mt-10">
            To accompany my morning, mid-day, and evening coffees (and to combat my gym gains), 
            I like to indulge in sweets quite often! I've been baking since middle school, but macarons are still
            my enemy.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
