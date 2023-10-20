import React, {useEffect} from 'react'

const About = () => {

    useEffect(() => {
        document.title = "About Us";
    }, []);

  return (
    <div className='container'>
      <h2>We are developed Full Stack Site for Courses.</h2>
    </div>
  )
}

export default About
