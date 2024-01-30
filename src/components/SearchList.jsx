import Product from './Product';
import useData, { sleep } from '../hooks/useData';
import { memo } from 'react';

const List = memo(({ searchValue }) => {
  console.log('searchValue from: ', searchValue);
  sleep(2000);
  const { data, loading } = useData(`https://dummyjson.com/products/search?q=${searchValue}`, {
    products: [],
  });

  if (loading) {
    return <div>...</div>;
  }

  const products = data.products;

  return (
    <>
      {products.map((product) => (
        <Product product={product} key={product.id} />
      ))}
    </>
  );
});

export default List;
