import React, { useState } from 'react';

import './Home.css'
import { assets } from '../../assets/assets';
import Header from '../../components/Header/Header'
import ExploreMenu from '../../components/ExploreMenu/ExploreMenu'
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay'
export default function Home() {

  const [category,setCategory] = useState("All")
  return (
    <div>
    <Header></Header>
    <ExploreMenu category={category} setCategory={setCategory}></ExploreMenu>
    <FoodDisplay category={category}></FoodDisplay>  
    </div>
  )
}

