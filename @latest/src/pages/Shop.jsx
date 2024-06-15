import ShopCard from "../components/ShopCard"


export default function Shop(){
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

    Return(
    <Grid sx={display=flex}>    

       {shopList}

    </Grid>
    )
}