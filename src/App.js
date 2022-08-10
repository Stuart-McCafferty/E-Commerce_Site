import React, {useState} from 'react';
import StockCard from './components/StockCard';
import Basket from './components/Basket';
// import HeaderBar from './components/HeaderBar'

function App() {
  const [items, setItems] =useState([
    {
      name: "Les s'wank",
      image: "../img/businessman-working-on-phone.jpg",
      price: 500,
    },
    {
      name: "Nike Waffle One",
      image: "./img/mens-business-fashion.jpg",
      price: 450,
    },
    {
      name: "Black Suit",
      image: "./img/mens-grey-black-suit.jpg",
      price: 250,
    },
    {
      name: "Taiolored Suit",
      image: "./img/tailored-suit.jpg",
      price: 399,
    },
    {
      name: "Three piece Suit",
      image: "./img/three-piece-suit.jpg",
      price: 199,
    },
    {
      name: "Shoes",
      image: ".img/tying-up-boot-laces.jpg",
      price: 250,
    }

  ])

  const [basket, setBasket] = useState([])


  
  const handleBasketToggle = (item) => {
      // basket.push(items)
      setBasket((prev) => {
        return [...prev, item]
      })
      console.log(item)
      console.log(basket)
  }
  
  

  return (
    <div>
      {/* <HeaderBar /> */}
      <ul><StockCard items={items} onItemSelected={handleBasketToggle} /></ul>
      <ul><Basket basket={basket}/></ul>
    </div>

  );
  
}

export default App;
