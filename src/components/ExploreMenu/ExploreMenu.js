import React from 'react';
import './ExploreMenu.css';
import { menu_list } from '../../assets/assets';

export default function ExploreMenu({category,setCategory}) {
  return (
    <div className="exploremenu" id="explore-menu">
      <h1>Explore Our Menu</h1>
      <p className="explore-menu-text">
        "Explore Menu" invites diners to discover a diverse array of culinary offerings, showcasing appetizing dishes crafted with fresh ingredients and enticing flavors, promising a delightful dining experience at every visit.
      </p>
      <div className="explore-menu-list">
        {menu_list.map((item, index) => (
          <div onClick={()=>setCategory(prev=>prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
            <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
            <p>{item.menu_name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
