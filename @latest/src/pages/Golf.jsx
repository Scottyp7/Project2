import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import NewsCard from "../components/NewsCard";
import { Grid } from "@mui/material";
import EventsCard from "../components/EventsCard";
import ShopCard from "../components/ShopCard";


export default function Golf() {


    const [rankings, setRankings] = useState([]);    


    useEffect(() => { // first arg is usually an arrow function 
        fetch('../jsonData/Rankings.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            setRankings(json) 
      })
    }, []);

    const rankingsList = rankings.map(rankItem => {
    return(
    <div key={rankItem.Rank}>
        <h2>Name: {rankItem.Name}</h2>
        <h3>Rank: {rankItem.Rank} Events: {rankItem.Events}</h3>

    </div>)
    
    }  );


    //News Cards
    const [CardState, SetCardState] = useState([])

    const newsFilter = CardState.filter(newsItem => newsItem.Sport.includes("Golf"));

    const newsList = newsFilter.map(newsItem => {
        return <NewsCard key={newsItem.Id} image={newsItem.image} Name={newsItem.Name} Description={newsItem.Description} Time={newsItem.Time} Sport={newsItem.Sport}></NewsCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('../jsonData/news.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetCardState(json) 
      })
    }, []);

    const [eventState, SetEventState] = useState([])

    useEffect(() => { // first arg is usually an arrow function 
        fetch('../jsonData/CurrentEvents.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetEventState(json) 
      })
    }, []);
    const eventList = eventState.map(eventItem => {
        return <EventsCard key={eventItem.Id} Heading={eventItem.Heading} image={eventItem.image} Location={eventItem.Location} Event={eventItem.Event} Name={eventItem.Name} Score={eventItem.Score}></EventsCard>
    }  );



    //Shop Cards
    const [ShopState, SetShopState] = useState([])

    const shopFilter = ShopState.filter(shopItem => shopItem.category.includes("Golf"));

    const shopSlice = shopFilter.slice(0,4)
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
	




    {/*const RankingsData = golfers.rankings.map(golfer => 
        <div key={golfer.playerId}>
            <h2>Name:{golfer.firstName} {golfer.lastName}</h2>
            <h3>Ranking:{golfer.rank['$numberInt']}</h3>
        </div>
      )*/}
    


    return (
    <div className='Container1' style={{ display:"flex", justifyContent:"space-between", margin:20}}>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWvoZVUx8I0Gpr1TzG6PL_QZ7yV1SCEIVqMw&sv" height="100" width="300"></img>
            <div style={{ maxHeight:1500,width:300, display:"flex", justifyContent:"space-evenly", flexWrap:"wrap", }}>
                {rankingsList}
            </div>
        </div>

        <div style={{ maxHeight:1500,minWidth:600, display:"flex", justifyContent:"space-evenly", flexWrap:"wrap", }}>
            {newsList}
        </div>

        <div style={{flexDirection:"column", justifyContent:"center", alignItems:"center"}}>
            <div style={{ minWidth:300, height:375}}>
                {eventList}
            </div>        
            
            <div style={{  minWidth:300, justifyContent:"center", alignItems:"center"}}>
                {shopList}
            </div>
        </div>
    </div>
  
) } 	

