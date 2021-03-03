import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import("./Dashboard");

function App() {


  const [cart, setCart] = useState([]);
  const [item, setItem] = useState([{
    CarName: "Audi",
    amount: 12000000,
    quantity: 1,
    image:
      "https://freepngimg.com/thumb/car/11-2-car-picture.png",
    id: 7001,
    lessThanZero: false,
  },

  {
    CarName: "Suzuki",
    amount: 1720000,
    quantity: 1,
    image:
      "http://www.pngmart.com/files/10/Suzuki-Car-PNG-Photos.png",
    id: 8532,
    lessThanZero: false,
  },
  {
    CarName: "ISUZU",
    amount: 4920000,
    quantity: 1,
    image:
      "http://pngimg.com/uploads/isuzu/isuzu_PNG32.png",
    id: 7632,
    lessThanZero: false,
  },
  ]);

  // function AddCart(value) {
  //   setCart([...cart,value])

  // return console.log(value)


  function AddItem(product) {
    const exist = AddItem.find((eachproduct) => eachproduct.id === product.id)
    if (exist === undefined) {
      setCart([...cart, product])
    }

  }



  return (


    <div className="main">

      {item.map((value, index) => (
        <div key={index}>

          <img src={value.image}></img>
          <p>{value.CarName}</p>
          <p>{value.amount}</p>
          <p>{value.quantit}</p>
          <p>{value.id}</p>

          <button onClick={() => {
            AddItem(product)
          }}>Add To Cart</button>

        </div>

      ))};

      <div>

      {cart.map((value, index) => (
        <div key={index}>

          <img src={value.image}></img>
          <p>{value.CarName}</p>
          <p>{value.amount}</p>
          <p>{value.quantit}</p>
          <p>{value.id}</p>

         
        </div>

      ))};

      </div>

    </div>
  )
}
export default App;







// function AddToCart(value) {
  //   const exist = cart.find((x) => x._id === value._id)
  //   if (exist) {
  //     setCart(
  //       cart.map((x) =>
  //         x._id === value._id ? { ...exist, stock: exist.stock + 1 } : x
  //       )
  //     )
  //     var prevProducts = [...cartItem];
  //     prevProducts[index].stock =  prevProducts[index].stock + 1;
  //     setCartItem(prevProducts);


  //   } else {
  //     setCart([...cart, { ...value, stock: 1 }])
  //     console.log(value)
  //   }

  // }


