import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ApplicationContext } from './Layout';

export default function Product(props) {
  const product = props.product;
  const { addToBasket } = useContext(ApplicationContext);

  return (
    <div className='col-lg-4'>
      <div className='item'>
        <div className='thumb'>
          <div className='hover-content'>
            <ul>
              <li>
                <a href='single-product.html'>
                  <Link to={'/product/' + product.id}>
                    <i className='fa fa-eye'></i>
                  </Link>
                </a>
              </li>
              <li>
                <a onClick={() => addToBasket(product, 1)}>
                  <i className='fa fa-shopping-cart'></i>
                </a>
              </li>
            </ul>
          </div>
          <img src={product.thumbnail} height={200} alt='' />
        </div>
        <div className='down-content'>
          <h4>{product.title}</h4>
          <span>${product.price}</span>
          <ul className='stars'>
            <li>
              <i className='fa fa-star'></i>
            </li>
            <li>
              <i className='fa fa-star'></i>
            </li>
            <li>
              <i className='fa fa-star'></i>
            </li>
            <li>
              <i className='fa fa-star'></i>
            </li>
            <li>
              <i className='fa fa-star'></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
