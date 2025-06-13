import { useTranslation } from 'react-i18next';

import { Button } from 'primereact/button';
import { LANGUAGE_CODES } from '../../commons/constants.js';
import { getLanguageKey } from '../../commons/utils.js';

const LanguageSelector = () => {
  const { i18n } = useTranslation();

  const languageKeyES = getLanguageKey(LANGUAGE_CODES.ES);
  const languageKeyEN = getLanguageKey(LANGUAGE_CODES.EN);

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className={'flex items-center space-x-2'}>
      <Button
        label={languageKeyES}
        className={`bg-gray-200 hover:bg-gray-300 text-black rounded px-3 py-1 flex items-center ${
          i18n.language === LANGUAGE_CODES.ES
            ? 'bg-green-100 border-2 border-green-500 text-green-800'
            : ''
        }`}
        onClick={() => changeLanguage(LANGUAGE_CODES.ES)}
        icon={
          <img
            src={'https://flagcdn.com/w20/es.png'}
            alt="Spanish flag"
            className={`w-4 h-4 mr-1 ${
              i18n.language === LANGUAGE_CODES.ES ? 'border-2 border-green-500' : ''
            }`}
          />
        }
      />
      <Button
        label={languageKeyEN}
        className={`bg-gray-200 hover:bg-gray-300 text-black rounded px-3 py-1 flex items-center ${
          i18n.language === LANGUAGE_CODES.EN
            ? 'bg-green-100 border-2 border-green-500 text-green-800'
            : ''
        }`}
        onClick={() => changeLanguage(LANGUAGE_CODES.EN)}
        icon={
          <img
            src={'https://flagcdn.com/w20/gb.png'}
            alt="English flag"
            className={`w-4 h-4 mr-1 ${
              i18n.language === LANGUAGE_CODES.EN ? 'border-2 border-green-500' : ''
            }`}
          />
        }
      />
    </div>
  );
};

export default LanguageSelector;
