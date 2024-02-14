import React from 'react';
import { useState,useEffect } from 'react';

const Countdown = () => {

const [sec,setsec]=useState(20);
const [min,setmin]=useState(15);
const [hour,sethour]=useState(21);


useEffect(()=>{
const interval= setInterval(()=>{

    if(sec===0){
        if(min===0){
            if(hour===0){
                clearInterval(interval);
            }
            else{
                sethour((prevHour)=>prevHour-1);
                setmin(59);
                setsec(59);
            }
        }
        else{
            setmin((prevmin)=>prevmin-1);
 setsec(59);
        }
    }
    else{
        setsec((prevsec)=>prevsec-1);
    }
 }, 1000);

 return ()=> clearInterval(interval);

},[hour,min,sec]);

const formattime=(unit)=>{
    return unit <10 ? '0'+ unit : unit;
};

  return (
    <>
  <div className="countmain">
  <div className="countmainsub">
    <p className='countp'>Time is running out.</p>
    <p className='countp'>Grab your spot fast !</p>
<br />
    <div className='counttimer'>
   {formattime(hour)} : {formattime(min)} : {formattime(sec)}
    </div>
<br />
    <button className='countbtn'>Register Now at ₹ 499 <span style={{textDecoration:"line-through"}}>1999</span> </button>
  </div>
  </div>
    </>
  )
}

export default Countdown;