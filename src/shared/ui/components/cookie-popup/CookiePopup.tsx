'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';

import classNames from 'classnames';

import styles from './CookiePopup.module.scss';

const CookiePopup = () => {
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
      <h2>Cookie settings</h2>
      <p>
        Cookies help us improve our website. By clicking &apos;Accept&apos;, you agree to our use of
        cookies for functionality, analytics, and personalized content. Learn more in our{' '}
        <Link href="/legal/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className={styles.buttons}>
        <button onClick={handleDecline} className={classNames(styles.decline)}>
          Decline
        </button>
        <button onClick={handleAccept} className={classNames(styles.accept)}>
          Accept
        </button>
      </div>
    </div>
  );
};

export default CookiePopup;
