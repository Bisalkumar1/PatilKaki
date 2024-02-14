import React from 'react';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import HourglassTopIcon from '@mui/icons-material/HourglassTop';
import img1 from '../Images/img1.png';

const Hero = () => {
  return (
<>

<div className="mainhero">
    <div className="firsthero  me-lg-5">
      <p className="herop" style={{fontWeight:"800",color:'white'}}>Discover a Consultant's Approach to Problem Solving</p>
      <p className="fhp" style={{lineHeight:"120%",fontWeight:"600"}}>Learn the proven approach used by top strategy consultants to tackle 
       complex business challenges effectively. Solve an MBB case study LIVE
        with Ashwin to understand the concepts hands-on.</p>
    <div className="boxes mb-5">
      <div className="box1 me-lg-5 me-2"><CalendarTodayIcon/><p>3rd March</p></div>
      <div className="box1 ms-lg-5 me-lg-5 ms-2 me-2"><AccessTimeIcon/><p>1 PM Onwards</p></div>
      <div className="box1 ms-lg-5 ms-2"><HourglassTopIcon/><p>2.5 Hours</p></div>
    </div>
   
   <button  className='herobtn mb-1 btnact'>Register Now at ₹ 499 <span style={{textDecoration:'line-through'}}> 1999</span></button>
   <div className='heroa me-4 me-lg-6'><a href="calltoAction" style={{color:"white"}}>click here to get team discount</a></div>
    </div>

    <div className="secondhero  ms-lg-5">
     <div className="imghero mb-4"> <img src={img1} alt="Image" style={{width:'100%', height:"auto"}} /> </div> 
      <div className="lb">
      <div className='linehero'></div>
      <div className="linebox">Instructed by</div>
      </div>
    </div>
  </div>

</>
  )
}

export default Hero;