import { Link } from 'react-router-dom';

import HeaderIcons from './HeaderIcons.jsx';
import SearchBar from './SearchBar.jsx';
import LanguageSelector from '../molecules/LanguageSelector.jsx';

const Header = () => (
  <header className={'w-full px-2 py-3'}>
    <div className={'mx-auto flex flex-col md:flex-row items-center justify-between gap-4 px-4'}>
      <div className={'flex-shrink-0 flex items-center w-full md:w-auto'}>
        <Link to={'/'} className={'text-2xl font-bold text-gray-800'}>
          Mobile Store
        </Link>
        <div className={'ml-auto md:hidden flex space-x-8'}>
          <HeaderIcons />
          <LanguageSelector />
        </div>
      </div>

      <div className={'hidden md:flex md:flex-grow md:justify-center md:w-auto w-full'}>
        <SearchBar />
      </div>

      <div className={'hidden md:flex md:flex-shrink-0 md:justify-end md:space-x-8'}>
        <HeaderIcons />
        <LanguageSelector />
      </div>

      <div className={'mt-4 md:hidden w-full'}>
        <SearchBar />
      </div>
    </div>
  </header>
);

export default Header;
