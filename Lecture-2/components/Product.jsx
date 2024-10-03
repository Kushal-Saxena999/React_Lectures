function Product({ title, price }) { // Here we can remove props and in place put title.price and in h1 and h3 remove props simple title and price
  return (
      <>
          <h1>{title}</h1>
          <h3>{price}</h3>
      </>
  );
}

export default Product;