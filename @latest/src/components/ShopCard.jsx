import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function ShopCard(props) {


  return (
    <Card sx={{ maxWidth: 200, minHeight:400, maxHeight:400}}>
      <CardActionArea>
        <CardMedia
          component="img"
          minHeight="500px"
          image={props.image}
          alt="loading..."
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.Name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${props.Price}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}