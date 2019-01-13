import React from 'react'

const   Data =(props) =>{
    const datas = props.data;
    console.log(datas)
  return (
        <div  >
           
             {datas.map((data, idx)=>{
                 return(
           <div className="card container col-lg-6 data-design" key={idx}>
            <h5 className="card-header card-col">{data.product_name}</h5>
            <div className="card-body">
                
                <p className="card-text">{data.description}</p>
                <hr></hr>
                <span>Availability:<span className="aval">{data.availability ===true ? "Yes" :"No"}</span> </span>
                <hr></hr>
                <span>{data.price}</span>
               
            </div>
            </div>
                )
        })}
    
        </div>
      
  )
}

export default Data