import React from 'react';

const Crad = (props) => {
  return (
    <>
        <div className="cardmain">
            <div className='cardimg'>{props.img}</div>
            <p className='cardpt'>{props.title}</p>
        </div>
    </>
  )
}

export default Crad;