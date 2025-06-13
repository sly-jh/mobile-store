import { Badge } from 'primereact/badge';
import { useSelector } from 'react-redux';

const HeaderIcons = () => {
  const cartCount = useSelector(
    state => state.cart?.items?.length || 0
  );

  return (
    <div className="flex items-center gap-[15px] text-xl text-gray-700">
      <i className="pi pi-user cursor-pointer hover:text-blue-500" />
      <i className="pi pi-heart cursor-pointer hover:text-pink-500" />
      <div className="relative">
        <i className="pi pi-shopping-cart cursor-pointer hover:text-green-500" />
        {cartCount > 0 && (
          <Badge
            value={cartCount}
            severity="info"
            className="absolute -top-2 -right-2"
          />
        )}
      </div>
    </div>
  );
};

export default HeaderIcons;
