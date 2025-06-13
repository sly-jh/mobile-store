import { BreadCrumb } from 'primereact/breadcrumb';
import { useLocation, Link } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  const items = segments.map((seg, i) => ({
    label: decodeURIComponent(seg),
    template: () => (
      <Link to={'/' + segments.slice(0, i + 1).join('/')} className="text-blue-600 underline">
        {decodeURIComponent(seg)}
      </Link>
    )
  }));

  return (
    <div className="px-4 mb-2">
      <BreadCrumb home={{ icon: 'pi pi-home', url: '/' }} model={items} />
    </div>
  );
};

export default Breadcrumbs;
