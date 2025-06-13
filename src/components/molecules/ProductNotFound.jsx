import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import { Button } from 'primereact/button';

const ProductNotFound = ({ onBack }) => {
  const { t } = useTranslation();

  return (
    <div className="p-8 text-center">
      <p className="text-xl font-semibold mb-6 text-gray-700">{t('common.not-found')}</p>
      <Button
        label={t('common.back')}
        icon="pi pi-arrow-left"
        onClick={onBack}
        className="p-button-sm"
      />
    </div>
  );
};

ProductNotFound.propTypes = {
  onBack: PropTypes.func.isRequired
};

export default ProductNotFound;
