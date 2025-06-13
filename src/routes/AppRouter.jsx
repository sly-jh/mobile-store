import { Routes, Route, Navigate } from 'react-router-dom';

import AppLayout from '../layout/AppLayout.jsx';
import ProductListPage from '../components/pages/ProductListPage.jsx';
import ProductDetailPage from '../components/pages/ProductDetailPage.jsx';

const AppRouter = () => (
  <Routes>
    <Route path={'/'} element={<AppLayout />}>
      <Route index element={<Navigate to="product" replace />} />
      <Route path={'product'} element={<ProductListPage />} />
      <Route path="product/:id" element={<ProductDetailPage />} />
    </Route>
  </Routes>
);

export default AppRouter;
