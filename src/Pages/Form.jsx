import React, { useEffect, useState } from 'react';

const Form = () => {

const [num,setnum]=useState("");
const [email,setemail]=useState("");
const [showform,setshowform]=useState(false);

const EventNum=(e)=>{
setnum(e.target.value);
}

const EventEmail=(e)=>{
    setemail(e.target.value);
    }


    const clickEvent=()=>{
setshowform(false);
    }

useEffect(()=>{

const timer=setTimeout(()=>{
    setshowform(true);
},15000);

return ()=>clearTimeout(timer);
},[]);


  return (
   <>
   <div style={{backgroundColor:"seagreen",height:"100vh"}}>
<div className="container">
  <h1 className='pt-4'>Form will Popup after 15 sec</h1>
</div>

 { showform && 
   <div className="formmain">
   <div className='crossicon'>
    <button className='crossbtn' onClick={clickEvent}>X</button>
    </div>
  
    <div className="formcontainer">
  
    <div className='mt-2'>
        <header>Flat 15% OFF</header>
        <p>Enter Your details and win a coupon worth 15% Off</p>
</div>
        <form action="">
        <div className="number mt-2 mb-2">
             <input className='fs' type="number" placeholder='Enter Your Phone' required value={num} onChange={EventNum} />
            </div>
            <div className="email mt-3 mb-3">
             <input className='fs' type="email" placeholder='Enter Your Email' required value={email} onChange={EventEmail}/>
            </div>

            <button className='formbtn btnact'>Show me Coupon</button>
        </form>
    </div>
    </div>
 }
 </div>
   </>
  )
}

export default Form;