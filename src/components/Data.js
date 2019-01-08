import React from 'react'

const   Data =(props) =>{
    const datas = props.data;
    console.log(datas)
  return (
        <div>
             {datas.map((data)=>{
                 return(
           <div className="card container col-lg-6">
            <h5 className="card-header">{data.product_name}</h5>
            <div className="card-body">
                
                <p className="card-text">{data.description}</p>
                <span>{data.price}</span>
               
            </div>
            </div>
                )
        })}
        </div>
      
  )
}

export default Data