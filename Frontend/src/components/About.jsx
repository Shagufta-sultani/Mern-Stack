import React from 'react';
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from 'react-icons/hi';

const About = () => {
  return (
    <section className='about' id="about">
    <div className='container'>
    <div className='banner'>
        <div className='top'>
            <h1 className='heading'>ABOUT US</h1>
            <p>The only thing we`re serious is food.</p>
        </div>
        <p className='mid'>
            Lorem, ipsum dolor sit amet consectetur 
            adipisicing elit. Dolore labore amet error,
             magni minus accusantium. A eligendi, odit, laudantium,
              id necessitatibus minima nisi asperiores iusto ab incidunt 
              autem ipsa ducimus!
        </p>
        <Link to={"/"}>
        Explore Menu{" "}
        <span>
            <HiOutlineArrowNarrowRight/>
        </span>
        </Link>
    </div>
    <div className='banner'>
        <img src="/about.png" alt="about" />
    </div>
      
    </div>
    </section>
  )
}

export default About
