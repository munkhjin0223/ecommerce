import Footer from './Footer';
import Header from './Header';
import { createContext, useState, useEffect } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

export const ApplicationContext = createContext({ basket: [], setBasket: () => {} });

function updateDataToSanity(mutations) {
  fetch(`https://${import.meta.env.VITE_SANITY_PROJECT_ID}.api.sanity.io/v2022-03-07/data/mutate/production`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
    },
    body: JSON.stringify({ mutations }),
  });
}

export default function Layout(props) {
  const { children } = props;
  const [basket, setBasket] = useState([]);
  const { user } = useAuth0();

  const removeFromBasket = (product) => {
    setBasket(basket.filter((item) => item.productId !== product.productId));

    const mutations = [
      {
        delete: {
          id: product._id,
        },
      },
    ];

    updateDataToSanity(mutations);
  };

  const updateBasketItem = (basketItem, quantity) => {
    const existingItem = basket.find((item) => item.productId === basketItem.productId);

    existingItem.productQuantity = quantity;

    setBasket([...basket]);

    const mutations = [
      {
        createOrReplace: existingItem,
      },
    ];

    updateDataToSanity(mutations);
  };

  const addToBasket = (product, quantity) => {
    if (!user) {
      alert('Та эхлээд нэвтэрнэ үү');
      return;
    }

    const existingProduct = basket.find((item) => item.productId === product.id);

    let newOrUpdatedItem;

    if (existingProduct) {
      existingProduct.productQuantity += quantity;

      newOrUpdatedItem = existingProduct;

      setBasket([...basket]);
    } else {
      newOrUpdatedItem = {
        _id: `${Math.random().toString(36).substring(2, 9)}`,
        _type: 'basket',
        productId: product.id,
        productName: product.title,
        productPrice: product.price,
        productQuantity: quantity,
        userId: user.sub,
      };

      setBasket([...basket, newOrUpdatedItem]);
    }

    const mutations = [
      {
        createOrReplace: newOrUpdatedItem,
      },
    ];

    updateDataToSanity(mutations);
  };

  useEffect(() => {
    if (!user) {
      return;
    }

    const query = `*[_type=='basket' && userId=='${user.sub}']`;

    fetch(
      `https://${
        import.meta.env.VITE_SANITY_PROJECT_ID
      }.api.sanity.io/v2022-03-07/data/query/production?query=${encodeURIComponent(query)}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${import.meta.env.VITE_SANITY_TOKEN}`,
        },
      }
    ).then((response) => {
      response.json().then((data) => {
        if (!data.error) {
          setBasket(data.result);
        }
      });
    });
  }, [user]);

  return (
    <>
      <ApplicationContext.Provider value={{ basket, addToBasket, removeFromBasket, updateBasketItem }}>
        <Header />
        {children}
        <Footer />
      </ApplicationContext.Provider>
    </>
  );
}
