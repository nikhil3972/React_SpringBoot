import React, {useEffect} from 'react'

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Me";
    }, []);

  return (
    <div className='container'>
      <h2>Call me : 8888496629</h2>
      <h2>Email : niks123@gmail.com</h2>
    </div>
  )
}

export default Contact
