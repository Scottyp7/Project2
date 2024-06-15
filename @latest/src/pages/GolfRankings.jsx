import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PostCard from "../components/PostCard";


function GolfRankings() {


    const [golfers, setGolfers] = useState({rankings:[]});    


    async function getData() {
        const url = 'https://live-golf-data.p.rapidapi.com/stats?year=2024&statId=186';
        const options = {
            method: 'GET',
            headers: {
                'x-rapidapi-key': '40213f4cf1msh063feedcb071abdp157664jsnff041b1fdcee',
                'x-rapidapi-host': 'live-golf-data.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const results = await response.json();
            setGolfers(results) 
            console.log(results);
        } catch (error) {
            console.error(error);}
    }

    useEffect(() => { // first arg is usually an arrow function 
        getData()
    }, []);



    const rankingsArray = []

    for( let i = 0; i < 5; i++){
        if(i >= golfers.rankings.length)
            {break}
        const golfer = golfers.rankings[i]
        rankingsArray.push(     

        <div key={golfer.playerId}>
            <h3>Rank: {golfer.rank['$numberInt']} Events: {golfer.events['$numberInt']}</h3>
            <h2>Name: {golfer.firstName} {golfer.lastName}</h2>
        </div>)
    }

    {/*const RankingsData = golfers.rankings.map(golfer => 
        <div key={golfer.playerId}>
            <h2>Name:{golfer.firstName} {golfer.lastName}</h2>
            <h3>Ranking:{golfer.rank['$numberInt']}</h3>
        </div>
      )*/}
    
    return (
        <div className="Component Box">
            <Card sx={{ maxWidth: 345, maxheight:600, display:'inline-block'} }>
            <CardMedia
              sx={{ height: 100 }}
              image="https://www.sportstravelmagazine.com/wp-content/uploads/2021/01/pga-logo-news-hero.png"
              title="golf logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                PGA World Rankings
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {rankingsArray}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Share</Button>
              <Button size="small">Learn More</Button>

            </CardActions>
          </Card>        
        </div> 
) } 

export default GolfRankings