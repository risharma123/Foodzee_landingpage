import React, { useState } from "react";

import Item from "./Item";
import foodData from "./Menu";

const Header = () => {
  const button=[
    {name:"All",type:"all"},
    {name:"Lunch",type:"lunch"},
    {name:"BreakFast",type:"breakfast"},
    {name:"Dinner",type:"dinner"},

  ];
  const [data,setData]=useState(foodData);
  const [selected,setSelected]=useState(foodData);
const [btn,setBtn]=useState("all")

  const handleInputValue=(e)=>{
    const input=e.target.value
   
    if(input==="")
    {
      
      setSelected(null);
    }
    const filter = data?.filter((food) =>
      food.name1.toLowerCase().includes(input.toLowerCase())
    );
    
    setSelected(filter)
  }

  const searchFood=(type)=>{
    if(type==="all"){
      setSelected(data);
      setBtn("all")
      return;
    }
    const filter = data?.filter((food) =>
      food.type.toLowerCase().includes(type.toLowerCase())
    );

    setSelected(filter);
    setBtn(type);
  }


  return (
    <div className="Header-detail">
      <div className="Header">
        <img src="/Foody Zone.svg" alt="logo" />
        <input type="text" placeholder="Search Food....." className="input"  onChange={handleInputValue}/>
      </div>
      {button.map((value,i)=>(
       <button key={i}className={btn===value.type?"btn-active":"btns"} onClick={()=>searchFood(value.type)}>{value.name}</button>
        ))}
      
      <Item item={selected}/>
    </div>
  );
};

export default Header;
