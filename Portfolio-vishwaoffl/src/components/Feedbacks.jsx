import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const SocialHandles = [
  {
    name: "GitHub",
    link: "https://github.com/praathampatel",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/pratham-patel-725418103",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/praathampatel",
  },
  // Add more social handles as needed
];

const SocialHandle = ({ name, link }) => (
  <motion.a
    href={link}
    target="_blank"
    rel="noopener noreferrer"
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    whileHover={{ scale: 1.05, boxShadow: "0px 0px 20px rgba(255, 255, 255, 0.3)" }}
    transition={{ duration: 0.3 }}
  >
    <div className="mt-1">
      <h3 className="text-white font-semibold text-lg">{name}</h3>
    </div>
  </motion.a>
);

const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with me on</p>
          <h2 className={styles.sectionHeadText}>Social Media.</h2>
        </motion.div>
      </div>
      <div className={`-mt-20 pb-14 ${styles.paddingX} grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7`}>
        {SocialHandles.map((handle, index) => (
          <SocialHandle key={index} {...handle} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");


