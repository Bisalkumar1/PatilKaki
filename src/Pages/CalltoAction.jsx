import React from 'react';

const CalltoAction = () => {
  return (
    <>
       <div className="ctamain">
        <div className="ctasub">
            <div className="firstcta">
  <h3 className='mb-4' style={{fontWeight:"700"}}>Crash course Launch Offer (Save INR 1799)</h3>
  <p className='ctap1 mb-1'> Learn the toolkit of the professionals in just 3 hours </p>
  <p className='ctap1 mb-1'>Enjoy the discounted price of ₹ 299</p>
  <p className='ctap1'>The launch offer expires soon, grab your seat NOW!</p>
            </div>
    
            <div className="secondcta">
                   <p className='ctap'>Price of the Program</p>
               <div><span className='ctapb' style={{color:"rgb(233, 195, 43)",fontWeight:"600"}}>₹499</span> <span style={{textDecoration:"line-through"}}> ₹1999</span></div> 
                   <button className='ctabtn'>Register Now</button>
            </div>
        </div>
       </div>
    </>
  )
}

export default CalltoAction