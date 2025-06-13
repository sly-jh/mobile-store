import { useEffect, useRef, useState } from 'react';
import { Outlet } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { Divider } from 'primereact/divider';
import Header from '../components/organisms/Header';
import DiscountBanner from '../components/molecules/DiscountBanner.jsx';
import Breadcrumbs from '../components/molecules/Breadcrumbs.jsx';

const AppLayout = () => {
  const { t } = useTranslation();

  const headerRef = useRef(null);
  const [headerHeight, setHeaderHeight] = useState(0);

  useEffect(() => {
    if (headerRef.current) {
      const resizeObserver = new ResizeObserver(entries => {
        const { height } = entries[0].contentRect;
        setHeaderHeight(height);
      });

      resizeObserver.observe(headerRef.current);

      return () => resizeObserver.disconnect();
    }
  }, []);

  const commonClasses =
    'flex-1 cursor-pointer hover:brightness-95 transition-shadow duration-200 hover:shadow-md';

  return (
    <div className={'flex flex-col min-h-screen'}>
      <div ref={headerRef} className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        <div className="flex w-full">
          <DiscountBanner message={t('offers-discount')} className={commonClasses} />
          <DiscountBanner message={t('offers-phones')} className={commonClasses} />
          <DiscountBanner message={t('offers-accessories')} className={commonClasses} />
        </div>
        <Header />
      </div>

      <div style={{ paddingTop: `${headerHeight}px` }}>
        <div className={'p-4'}>
          <Divider layout={'horizontal'} className={'border-t border-gray-500 opacity-70'} />
        </div>

        <Breadcrumbs />

        <main className={'flex-1 overflow-y-auto bg-gray-50 px-4 py-8'}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AppLayout;
