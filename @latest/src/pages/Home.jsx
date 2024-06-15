import { useState,useEffect } from "react";
import NewsCard from "../components/NewsCard"
import ShopCard from "../components/ShopCard";
import { Grid, Divider} from "@mui/material";
import CustomImageList from "../components/ImageSelect";


export default function Home()
{

    const [CardState, SetCardState] = useState([])

    const newsList = CardState.map(newsItem => {
        return <NewsCard key={newsItem.Id} image={newsItem.image} Name={newsItem.Name} Description={newsItem.Description} Time={newsItem.Time} Sport={newsItem.Sport}></NewsCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('news.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetCardState(json) 
      })
    }, []);

    const [ShopState, SetShopState] = useState([])

    const shopList = ShopState.map(shopItem => {
        return <ShopCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></ShopCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('Shop.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetShopState(json) 
      })
    }, []);

    const myStyle = {
        
    }

    return(
    <>
    <br></br>
        <Grid
        columns={12}
        container
        direction="row"
        justifyContent="flex-start"
        alignItems="flex-start"
        >
            <CustomImageList></CustomImageList>
            <ul>{newsList}</ul>
            <ul>{shopList}</ul>
        </Grid>

    </>
    
    )
}

