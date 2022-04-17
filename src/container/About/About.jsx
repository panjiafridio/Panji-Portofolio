import React, { useState ,useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../clients';
// import { images } from '../../constants';
import './About.scss';

// const abouts = [
//   { title: 'Web Developer', description: "I'm good Web Developer", imgUrl : images.about01 },
//   { title: 'Front end Developer', description: "I'm good Front end Developer", imgUrl : images.about02 },
//   { title: 'Back-end Developer', description: "I'm good Back-end Developer", imgUrl : images.about03 },
//   { title: 'UI/UX Designer', description: "I'm good UI/UX Designer", imgUrl : images.about04 },
// ]

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "abouts"]';

    client.fetch(query)
      .then((data) => {
        setAbouts(data)
      })
  }, []);

  return (
    <>
      <h2 className='head-text'> i know that <span>Good Dev</span><br />means <span>Good Business</span></h2>

      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity : 1 }}
            whileHover={{ scale : 1.1 }}
            transition={{ duration: 0.5, type: 'tween' }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>{about.title}</h2>
            <p className="p-text" style={{ marginTop: 10 }}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default AppWrap(About, 'about')
