import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BasketCard(props) {

  
  return (
    <Card sx={{width:300,height:550,marginTop:4, flexWrapw:"wrap"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          width={300}
          height={400}
          image={props.product.image}
          alt="loading..."
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="div">
            {props.product.Name.slice(0.20)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Price: ${props.product.Price}
          </Typography>
          <button onClick={()=> props.addToCart(props.product)}>Add to Basket</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}