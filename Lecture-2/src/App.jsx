import Product  from "../components/Product";
// function App() {
//   return <div>Hello Poooo!</div>;
// }

let shoeData = [
  {
    id:1,
    title: "Nike Shoes",
    price: "799"
  },
  {
    id:2,
    title : "Abibas Shoes",
    price: "299"
  },
  {
    id:3,
    title : "lakhani shoes",
    price : "599"
  },
  {
    id:4,
    title :"Goldstar Shoes",
    price : "1599"
  }
]

function App() {
  // let a = 5;
  // let b = 5;
  // let c = a + b;
  // console.log(c);
  return (
    <div>
      {shoeData.map((data) => {
                return <Product key = {data.id} title={data.title} price={data.price} />;
            })}
    </div>
  )
}

export default App;
