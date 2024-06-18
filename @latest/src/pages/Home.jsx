import { useState,useEffect } from "react";
import NewsCard from "../components/NewsCard"
import ShopCard from "../components/ShopCard";
import { Grid, Divider} from "@mui/material";
import CustomImageList from "../components/ImageSelect";



export default function Home()
{
    useEffect(() => { // first arg is usually an arrow function 
        fetch('../jsonData/news.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetCardState(json) 
      })
    }, []);


    const [CardState, SetCardState] = useState([])

    const newsSlice = CardState.slice(0,3)
    const newsList = newsSlice.map(newsItem => {
        return <NewsCard key={newsItem.Id} image={newsItem.image} Name={newsItem.Name} Description={newsItem.Description} Time={newsItem.Time} Sport={newsItem.Sport}></NewsCard>
    }  );


    const [ShopState, SetShopState] = useState([])

    const shopSlice = ShopState.slice(0,4)
    const shopList = shopSlice.map(shopItem => {
        return <ShopCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></ShopCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('../jsonData/Shop.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetShopState(json) 
      })
    }, []);

    return(
    <>
    <br></br>
        <div class="row" style={{ display:"flex", justifyContent:"space-evenly"}}>

            <div class="col-sm-1 col-md-1 col-xl-2" style={{justifyContent:"center", alignItems:"center",width:"25vw" }}>        
                <h1 style={{justifyContent:"center", display:"flex", alignItems:"center"}}>News</h1>
                <ul>{newsList}</ul>   
            </div>  
            <div style={{justifyContent:"center",alignItems:"center"}}>  
                <h1 style={{justifyContent:"center", display:"flex", alignItems:"center"}}>Sports</h1>             
                <CustomImageList></CustomImageList>
            </div>
            <div style={{justifyContent:"center", alignItems:"center", width:300}}>    
                <h1 style={{justifyContent:"center", display:"flex", alignItems:"center"}}>Shop</h1>
                <ul>{shopList}</ul>
            </div>

        </div>
    </>
    
    )
}

