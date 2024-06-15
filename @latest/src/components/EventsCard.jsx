import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function EventsCard(props) {

  return (
  <>
    
    <Card sx={{ maxWidth: 280, maxHeight: 475, minHeight:475, margin:1.7}}><h3>Current Event:</h3>
      
      <Typography variant="body1" color="text.secondary">
        {props.Event}, {props.Location}
      </Typography>

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image={props.image}
          alt="loading..."
        />
        <CardContent>
            <Typography gutterBottom variant="h5" fontWeight={"Bold"} component="div">
                 
                
            </Typography>
            <Typography gutterBottom variant="h6" fontWeight={"Bold"} component="div">
               {props.Location} 
            </Typography>
            <Typography variant="h6" color="text.secondary">
                Current Leader:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {props.Name}, {props.Score}
            </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </>
  );
}