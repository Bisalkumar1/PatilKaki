import React from 'react';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import img2 from '../Images/img2.png';

const About = () => {
  return (
    <>
<div className="mainabout">

<div className="aboutmainsub">
   <p><span className='abtheader1 abtph'>ABOUT</span> <span className='abtheader2 abtph'>FOUNDERX</span></p>
   <p className='abtp'>The World needs your creativity and ingenuity. Don't put your dreams on hold.</p>
   <p className='abtp'>Start your founder's journey today!</p>

<div className="secondpartabt mt-5">
   <div className="img order-0 order-lg-0 me-2  secondabtfirst">
    <img className='abtimg' src={img2} alt="image" style={{width:"100%",height:"auto"}} />
   </div>

<div className="secondtwo order-1 order-lg-0 ms-2">
    <p className='stabtp'><ArrowRightIcon style={{color:"seagreen"}}/>Master a <span className='textbold'>structured approach</span> to building a tech venture</p>
    <p className='stabtp'><ArrowRightIcon style={{color:"seagreen"}}/><span className='textbold'>Get coached by </span> India's top 1% founders, operators and investors</p>
<p className='stabtp'><ArrowRightIcon style={{color:"seagreen"}}/><span className='textbold'>Learn by doing -</span> Work on actual startup ideas in a real-world startup team simulation</p>
<p className='stabtp'><ArrowRightIcon style={{color:"seagreen"}}/><span className='textbold'>Expand your network</span> in the community of like-minded peers</p>
<p className='stabtp'><ArrowRightIcon style={{color:"seagreen"}}/><span className='textbold'>Find your co-founder </span> & your core team among the fellows and alumni.</p>

</div>
   </div>
</div>
</div>
    </>
  )
}

export default About;