import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function PostCard(props) {
  


  return (

      
        <Card sx={{ maxWidth: 345, maxheight:600, display:'inline-block'} }>
          <CardMedia
            sx={{ height: 100 }}
            image="https://t4.ftcdn.net/jpg/01/59/78/65/360_F_159786506_DBq2ev6ZLa03ey7AM5QYxubClvgO7zcB.jpg"
            title="bitcoin logo"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Bitcoin Rate
            </Typography>
            <Typography variant="body2" color="text.secondary">
                {props.currency}:{props.value}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>

  );
}