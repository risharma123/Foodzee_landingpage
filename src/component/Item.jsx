import React from "react";



const Item = ({item}) => {
 
  return (
    
      <div className="food-container">
       {item.map((items,i)=>{
       
        return(<div key={i}className="FoodCard">
            <div>
              <img src={items.image} alt="item" />
            </div>
            <div>
              <h4 className="text">{items.name1}</h4>
              <div className="text-detail">
                <p>
                 {items.text}
                </p>
                <div className="price">${items.price}</div>
              </div>
            </div>
          </div>
        )} 
  
  )}
  </div>
  )};

export default Item;
