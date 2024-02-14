import React from 'react';
import Sdata from '../Components/Sdata';
import Crad from '../Components/Crad';


const Why = () => {
  return (
    <>
    <div className="mainwhy">
    <div className="head pt-2 pb-2">
      <header><span style={{color:"crimson"}}>But,</span></header>
      <header>why should you become a Mindful Marketer?</header>
    </div>
      <div className="subwhy mt-5">

      <div className="container-fluid mb-5">
    <div className="row">
        <div className="col-10 mx-auto">
            <div className="row gy-5">
           {
            Sdata.map((val,ind)=>{
                return <Crad
                key={ind}  
                    img={val.img} 
                    title={val.text}
                /> 
            })   
           }

            </div>
        </div>
    </div>
</div>
      </div>
    </div>
    </>
  )
}

export default Why;