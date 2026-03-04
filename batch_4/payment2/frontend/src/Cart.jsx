import axios from 'axios'


const Cart = ({cart}) => {
  let total = Math.floor( cart.reduce((sum,item)=>sum + item.price , 0))

  const handlePayment = async () => {
    const res = await axios.post("http://localhost:5000/create", {
      amount: total,
    });

    const order = res.data;

    const options = {
      key: "rzp_test_SL6wKKwysA628y",
      amount: order.amount,
      currency: "INR",
      order_id: order.id,
      handler: async function (response) {
        const verifyRes = await axios.post("http://localhost:5000/verify", {
          order_id: response.razorpay_order_id,
          payment_id: response.razorpay_payment_id,
          signature: response.razorpay_signature,
        });

       
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

console.log(total)

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.map((item, i) => (

        <div key={i}>
          <p > {item.title}</p>
         
        </div>
      ))}

      <h2>Total : {total}</h2>

   <button onClick={handlePayment}>Pay Now</button>
    </div>
  );
}

export default Cart
