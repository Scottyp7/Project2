import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function NewsCard(props) {

  return (
  <>
    
    <Card sx={{ maxWidth: 280, maxHeight: 500, minHeight:500}}><h2>{props.Sport} - {props.Time.toLowerCase()}</h2>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="loading...."
        />
        <CardContent>
            <Typography gutterBottom variant="h5" fontWeight={"Bold"} component="div">
                {props.Name} 
            </Typography>
            <Typography variant="body1" color="text.secondary">
                {props.Description}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  );
}