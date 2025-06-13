import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { fetchProducts } from '../../store/slices/productsSlice';
import { selectFilteredProducts } from '../../selectors/products.js';

import ProductCard from '../molecules/ProductCard.jsx';
import Loader from '../molecules/Loader.jsx';

const ProductListPage = () => {
  const dispatch = useDispatch();
  const products = useSelector(selectFilteredProducts);
  const status = useSelector(state => state.products.status);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={'w-full py-14'}>
      {status === 'loading' ? (
        <div className={'flex justify-center items-center min-h-[300px]'}>
          <Loader
            style={{ width: '50px', height: '50px' }}
            strokeWidth={'4'}
            fill={'var(--surface-ground)'}
            animationDuration={'.5s'}
          />
        </div>
      ) : (
        <div
          className={'grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6 w-full'}
        >
          {products.map(product => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductListPage;
