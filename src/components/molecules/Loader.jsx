import { ProgressSpinner } from 'primereact/progressspinner';

const Loader = () => (
  <div className={'flex flex-col items-center justify-center h-96 gap-4'}>
    <ProgressSpinner
      style={{ width: '80px', height: '80px' }}
      strokeWidth="6"
      fill={'transparent'}
      animationDuration={'0.5s'}
    />
    <p className={'text-gray-600 text-lg font-medium animate-pulse'}>Cargando productos...</p>
  </div>
);

export default Loader;
