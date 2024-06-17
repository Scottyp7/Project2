import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function BasketCard(props) {

       function ShowBasket() {
    // State to store items in the basket
    const [basket, setBasket] = useState([]);
  
    // Function to add item to the basket
    const addItemToBasket = (item) => {
      setBasket([...basket, item]);
    };
  // Basket component to display items in the basket
const Basket = ({ basket }) => {
  return (
    <div className="basket">
      <h2>Basket</h2>
      <ul>
        {basket.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );

};  
};

  return (
    <Card sx={{ maxWidth: 200, minHeight:400, maxHeight:400 }}>
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
          <button onClick={() => addItemToBasket(props.Id)}>Addto Basket</button>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}