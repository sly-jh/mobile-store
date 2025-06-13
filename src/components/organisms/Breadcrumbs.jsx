import { Link, useLocation } from 'react-router-dom';

const Breadcrumbs = () => {
  const location = useLocation();
  const segments = location.pathname.split('/').filter(Boolean);

  const crumbs = segments.map((segment, idx) => {
    const path = '/' + segments.slice(0, idx + 1).join('/');
    const label = segment.charAt(0).toUpperCase() + segment.slice(1);
    return { path, label };
  });

  if (crumbs.length === 0) {
    return null;
  }

  return (
    <nav className="text-sm text-gray-600 px-4 mb-4">
      <ol className="flex space-x-2">
        <li>
          <Link to="/" className="text-blue-600 hover:underline">
            Home
          </Link>
        </li>
        {crumbs.map((crumb, i) => (
          <li key={crumb.path} className="flex items-center space-x-2">
            <span>/</span>
            <Link
              to={crumb.path}
              className={`${
                i === crumbs.length - 1
                  ? 'text-gray-900 font-semibold pointer-events-none'
                  : 'text-blue-600 hover:underline'
              }`}
            >
              {crumb.label}
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
