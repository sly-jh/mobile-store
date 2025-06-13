import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

import { Card } from 'primereact/card';

const ProductCard = ({ id, model, imgUrl, price, onClick }) => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const isDisabled = !price;

  return (
    <Card
      key={id}
      title={model}
      onClick={() => navigate(`/product/${id}`)}
      className={`w-full shadow-md transition-shadow ${
        isDisabled ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-lg'
      }`}
      header={
        <button
          onClick={isDisabled ? undefined : onClick}
          type={'button'}
          aria-label={`Ver detalles del modelo ${model}`}
          className={`h-48 w-full overflow-hidden rounded-t-md bg-white transition-transform duration-300
           ${isDisabled ? 'cursor-default' : 'cursor-pointer hover:scale-105'}`}
          disabled={isDisabled}
        >
          <img src={imgUrl} alt={model} className={'w-full h-full object-contain'} />
        </button>
      }
      footer={
        <div className={'px-4 py-2'}>
          <div className={'flex justify-between items-center'}>
            {price ? (
              <span className={'text-lg font-semibold text-gray-700'}>${price}</span>
            ) : (
              <span className={'text-sm text-gray-400 italic'}>{t('commons.no-price')}</span>
            )}
          </div>
        </div>
      }
    />
  );
};

ProductCard.propTypes = {
  id: PropTypes.string.isRequired,
  model: PropTypes.string.isRequired,
  imgUrl: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
};

ProductCard.defaultProps = {
  price: null,
  onClick: () => {}
};

export default ProductCard;
