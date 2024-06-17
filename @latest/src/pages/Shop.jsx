import BasketCard from "../components/BasketCard";
import { useState,useEffect } from "react";



export default function Shop(){
    const [ShopState, SetShopState] = useState([])

    useEffect(() => { // first arg is usually an arrow function 
        fetch('Shop.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetShopState(json) 
      })
    }, []);



    const golfFilter = ShopState.filter(shopItem => shopItem.category.includes("Football"));
    const footballFilter = ShopState.filter(shopItem => shopItem.category.includes("Golf"));
    const tennisFilter = ShopState.filter(shopItem => shopItem.category.includes("Tennis"));

    
    const tennisList = footballFilter.map(shopItem => {
      return <BasketCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></BasketCard>
  }  );

    const footballList = tennisFilter.map(shopItem => {
        return <BasketCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></BasketCard>
    }  );

    const golfList = golfFilter.map(shopItem => {
        return <BasketCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></BasketCard>
    }  );
    return(
    <>
      <div style={{border:"2px solid black", padding:50, flex:"1 1 200px", width:875, float:"right"}}>
        <div style={{border:"2px solid black", display:"flex", justifyContent:"space-between", padding:10}}>
            {footballList}
        </div>
        <div style={{border:"2px solid black", display:"flex", justifyContent:"space-between", padding:10}}>
            {golfList}
        </div>
        <div style={{border:"2px solid black", display:"flex", justifyContent:"space-between", padding:10}}>
            {tennisList}
        </div>
    </div>
    </>
    
    )
}