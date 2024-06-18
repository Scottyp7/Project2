import { useState,useEffect } from 'react';
import ShopCard from '../components/ShopCard';
import BasketCard from '../components/BasketCard'
import '../styles/ShopPage.css';

const Shop2 = () => {
  const [selectedCategory, setSelectedCategory] = useState([]);
  const [cart, setCart] = useState([]);
  const [ShopState, SetShopState] = useState([])
  const [categories, setCategories] = useState(["Golf"])

  useEffect(() => { // first arg is usually an arrow function 
      fetch('../jsonData/Shop.json')
          .then((response) => response.json())
          .then((json) => { // json structure
          SetShopState(json)

          const uniqueCategories = [...new Set(json.map(item => item.category))]
            setCategories(uniqueCategories)
    })
  }, []);
  
  // when button is pressed inside of basket card. It passes the value of the product to the cart state
  const addToCart = (product) => {
    setCart([...cart, product]);
  };


  let limit = 4
  const [limitState, SetLimitState] = useState(3)
    function increaseLimit(){
        SetLimitState(limitState + 3)
    }
    function decreaseLimit(){
      SetLimitState(limitState - 3)
  }
  const filteredProducts = ShopState.filter(product => product.category === selectedCategory).slice(0,limitState);



  const footballList = filteredProducts.map(shopItem => {
    return (
    <div>
      <BasketCard key={shopItem.Id} product={shopItem} addToCart={addToCart}></BasketCard>
    </div>
  )
  }  );
  return (
    <div className="shop-container">
      <header className="shop-header" style={{height:30}}>
        <h1>Sport Shop - {selectedCategory}</h1>
        <h3>Items in Cart: {cart.length}</h3>
      </header>

      <div className="shop-content">
        <aside className="shop-sidebar">         
            <button onClick={increaseLimit}>Load More</button>
            <button onClick={decreaseLimit}>Load Less</button>

        <br></br>

        {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setSelectedCategory(category)}
              className={`shop-category ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </aside>
        <main className="shop-main">
          <div>

          </div>  
          <div  style={{display:"flex", width:1200, height:1200, justifyContent:'space-evenly', flexWrap:'wrap', marginTop:-50}}
          >{footballList}
          </div>   
         
        </main>      

      </div>
          
    </div>
  );
};

export default Shop2;
