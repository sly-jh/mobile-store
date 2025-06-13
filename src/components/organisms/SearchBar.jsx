import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { setSearchTerm } from '../../store/slices/productsSlice.js';
import { InputText } from 'primereact/inputtext';

const SearchBar = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();

  const [query, setQuery] = useState('');

  const handleSearch = e => {
    const value = e.target.value;
    setQuery(value);
    dispatch(setSearchTerm(value.trim()));
  };

  return (
    <div
      className={
        'group flex items-center border rounded-full px-4 py-2 w-full max-w-xl hover:border-blue-500 transition-colors duration-200'
      }
    >
      <InputText
        value={query}
        onChange={handleSearch}
        placeholder={t('common.search-placeholder')}
        className={'flex-1 border-none shadow-none focus:outline-none focus:ring-0'}
      />
    </div>
  );
};

export default SearchBar;
