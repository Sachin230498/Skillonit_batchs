import {useState,useEffect} from 'react'
import axios from 'axios';


const Products = ({cart,setCart}) => {
  const [products,setProducts] = useState([])
  

  useEffect(()=>{
    axios.get("https://fakestoreapi.com/products")
    .then(res=>setProducts(res.data)
    )
  },[])

  const addtoCart = (products)=>{
    setCart([...cart,products])
  }

  return (
    <div>
      <h1>Products page</h1>

      {products.map((p)=>(
        <div key={p.id}>
          <img src={p.image} alt="" />
          <h3>{p.title}</h3>
          <h4>{p.price}</h4>
          <button onClick={()=>addtoCart(p)}>Add To Cart</button>

        </div>
     ))}
    </div>
  );
}

export default Products
