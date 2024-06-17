import React, { useState } from 'react';
import '../styles/ShopPage.css';






const Shop2 = () => {
  const [selectedCategory, setSelectedCategory] = useState('Electronics');
  const [cart, setCart] = useState([]);
  
  const [ShopState, SetShopState] = useState([])

  useEffect(() => { // first arg is usually an arrow function 
      fetch('Shop.json')
          .then((response) => response.json())
          .then((json) => { // json structure
          SetShopState(json) 
    })
  }, []);
  

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="shop-container">
      <header className="shop-header">
        <h1>Shop Website</h1>
        <p>Items in cart: {cart.length}</p>
      </header>
      <div className="shop-content">
        <aside className="shop-sidebar">
          {Object.keys(productsData).map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shop-category ${selectedCategory === category ? 'active' : ''}`}
            >
              {category}
            </button>
          ))}
        </aside>
        <main className="shop-main">
          <h2>{selectedCategory}</h2>
          {productsData[selectedCategory].map(product => (
            <div key={product.id} className="product-item">
              <h3>{product.name}</h3>
              <p>${product.price}</p>
              <button onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default Shop2;
