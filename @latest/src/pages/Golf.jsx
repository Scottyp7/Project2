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
        fetch('Rankings.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            setRankings(json) 
      })
    }, []);

    const rankingsList = rankings.map(rankItem => {
    return(
    <div key={rankItem.rank}>
        <h3>Rank: {rankItem.rank} Events: {rankItem.events}</h3>
        <h2>Name: {rankItem.Name}</h2>
    </div>)
    
    }  );


    //News Cards
    const [CardState, SetCardState] = useState([])

    const newsFilter = CardState.filter(newsItem => newsItem.Sport.includes("Golf"));

    const newsList = newsFilter.map(newsItem => {
        return <NewsCard key={newsItem.Id} image={newsItem.image} Name={newsItem.Name} Description={newsItem.Description} Time={newsItem.Time} Sport={newsItem.Sport}></NewsCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('news.json')
            .then((response) => response.json())
            .then((json) => { // json structure
            SetCardState(json) 
      })
    }, []);

    const [eventState, SetEventState] = useState([])

    useEffect(() => { // first arg is usually an arrow function 
        fetch('CurrentEvents.json')
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

    const shopFilter = ShopState.filter(shopItem => shopItem.cateogry.includes("Golf"));

    const shopList = shopFilter.map(shopItem => {
        return <ShopCard key={shopItem.Id} image={shopItem.image} Name={shopItem.Name} Price={shopItem.Price}></ShopCard>
    }  );

    useEffect(() => { // first arg is usually an arrow function 
        fetch('Shop.json')
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
        <div style={{ maxHeight:1500,minWidth:300, display:"flex", justifyContent:"space-evenly", flexWrap:"wrap", }}>
            {rankingsList}
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

