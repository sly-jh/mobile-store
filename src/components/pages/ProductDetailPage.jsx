import { useNavigate, useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import { Button } from 'primereact/button';

import ProductNotFound from '../molecules/ProductNotFound.jsx';

const ProductDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { t } = useTranslation();

  const product = useSelector(state => state.products.items.find(p => String(p.id) === id));

  const handleBack = () => navigate(-1);

  if (!product) {
    return <ProductNotFound onBack={handleBack} />;
  }

  const {
    imgUrl,
    model,
    brand,
    price,
    cpu,
    ram,
    os,
    displayResolution,
    battery,
    primaryCamera,
    secondaryCamera,
    dimentions
  } = product;

  const isValidPrice = val => val !== null && val !== undefined && Number(val) > 0;

  const buildSpecs = () =>
    [
      { label: t('product.cpu'), value: cpu },
      { label: t('product.ram'), value: ram },
      { label: t('product.os'), value: os },
      { label: t('product.screen'), value: displayResolution },
      { label: t('product.battery'), value: battery },
      {
        label: t('product.camera'),
        value: [primaryCamera, secondaryCamera].filter(Boolean).join(', ')
      },
      { label: t('product.dimensions'), value: dimentions }
    ].filter(spec => spec.value && spec.value !== 'null');

  const specs = buildSpecs();
  const showPrice = isValidPrice(price) ? `${price} €` : t('common.no-price');

  return (
    <div className={'p-4 max-w-6xl mx-auto'}>
      <div className={'grid grid-cols-1 md:grid-cols-2 gap-6 items-start'}>
        <div className={'bg-white p-4 rounded shadow-md flex justify-center'}>
          <img
            src={imgUrl}
            alt={`${brand} ${model}`}
            className={'w-full max-w-sm h-auto object-contain'}
          />
        </div>

        <div className={'space-y-4'}>
          <h2 className={'text-2xl font-bold'}>
            {brand} {model}
          </h2>

          <ul className={'space-y-2'}>
            {specs.map(({ label, value }) => (
              <li key={label}>
                <strong>{label}:</strong> {value}
              </li>
            ))}
            <li>
              <strong>{t('common.price')}:</strong> {showPrice}
            </li>
          </ul>

          <div className={'pt-4'}>
            <Button
              label={t('common.back-to-list')}
              onClick={() => navigate('/product')}
              icon={'pi pi-arrow-left'}
              className={'p-button-sm gap-2'}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
