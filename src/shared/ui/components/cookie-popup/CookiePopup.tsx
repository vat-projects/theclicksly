'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';
import { useTranslations } from 'next-intl';

import styles from './CookiePopup.module.scss';

const CookiePopup = () => {
  const t = useTranslations();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  const handleDecline = () => {
    setIsVisible(false);
  };

  return (
    <div
      className={classNames(styles.cookiePopup, {
        [styles.visible]: isVisible,
      })}
    >
      <h2>{t('cookiePopup.title')}</h2>
      <p>
        {t('cookiePopup.text')} <Link href="/legal/cookie-policy">{t('cookiePopup.link')}</Link>.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleDecline} className={classNames(styles.decline)}>
          {t('cookiePopup.decline')}
        </button>
        <button onClick={handleAccept} className={classNames(styles.accept)}>
          {t('cookiePopup.accept')}
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
