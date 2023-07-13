import { useState } from "react";



function Card({id,image,name,info,price,removeTour}){
    const [readmore,setReadmore]= useState(false);
    const description =readmore?info:`${info.substring(0,200)}...`;
    function readmoreHandler(){
        setReadmore(!readmore);
    }    
    return (
        <div className="card">
            <img src={image} alt="monuments" className="image"></img>
            <div className="tour-info">
                <h4 className="tour-price">Rs {price}</h4>
                <div className="tour-details">
                    <h4 className="tour-name">{name}</h4>
                </div>
                <div className="description">
                    {description}
                    <span className="read-more" onClick={readmoreHandler}>
                        {readmore?'Show Less':'Read More'}
                    </span>
                </div>                
            </div>
            <button className="btn-red" onClick={()=>removeTour(id)}>
                Not Interested
            </button>
        </div>
        
    )

}

export default Card;