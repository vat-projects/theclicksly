'use client';
import { useState } from 'react';
import Image from 'next/image';

import { useLocale } from 'next-intl';

import styles from './LangSelector.module.scss';

import { usePathname, useRouter } from '@/i18n/navigation';

export default function LangSelector() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const handleChange = (locale: string) => {
    router.push(pathname, { locale });
    setIsOpen(false);
  };

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.langSelector}>
      <button onClick={handleToggle} className={styles.langSelectorItemLabel}>
        <Image src={`/images/${locale}.svg`} alt={locale} width={24} height={24} />
        {locale}
        <Image src={`/images/arrow-down.svg`} alt={'arrow-down'} width={16} height={16} />
      </button>
      {isOpen && (
        <div className={styles.langSelectorDropdown}>
          <button onClick={() => handleChange('en')} className={styles.langSelectorDropdownItem}>
            <Image src={`/images/en.svg`} alt={'en'} width={24} height={24} />
            EN
          </button>
          <button onClick={() => handleChange('de')} className={styles.langSelectorDropdownItem}>
            <Image src={`/images/de.svg`} alt={'de'} width={24} height={24} />
            DE
          </button>
          <button onClick={() => handleChange('it')} className={styles.langSelectorDropdownItem}>
            <Image src={`/images/it.svg`} alt={'it'} width={24} height={24} />
            IT
          </button>
        </div>
      )}
    </div>
  );
}
