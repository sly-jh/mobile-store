import PropTypes from 'prop-types';

const DiscountBanner = ({ message, className }) => (
  <div
    role={'button'}
    className={`bg-red-500 hover:bg-red-700 text-white font-bold p-4 ${className}`}
  >
    {message}
  </div>
);

DiscountBanner.propTypes = {
  message: PropTypes.string.isRequired,
  className: PropTypes.string
};

DiscountBanner.defaultProps = {
  className: ''
};

export default DiscountBanner;
