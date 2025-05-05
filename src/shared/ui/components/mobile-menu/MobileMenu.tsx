"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslate } from '@tolgee/react';

import { WEBSITE_EMAIL, WEBSITE_PHONE } from "@/shared/lib/constants/constants";

import { Email } from "../../icons/email/email";
import { Phone } from "../../icons/phone/phone";
import { Facebook } from "../../icons/socials/facebook/facebook";
import { Instagram } from "../../icons/socials/instagram/instagram";
import { X } from "../../icons/socials/x/x";
import Button from "../../kit/button/Button";
import styles from "./MobileMenu.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const { t } = useTranslate();

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${styles.mobileMenuButton} ${
          isOpen ? styles.mobileMenuButtonActive : ""
        }`}
      >
        <Image src="/burger.svg" alt="menu" width={50} height={50} />
        <Image src="/menuClose.svg" alt="menu" width={50} height={50} />
      </button>
      <div
        className={`${styles.mobileMenu} ${
          isOpen ? styles.mobileMenuActive : ""
        }`}
      >
        <div className={styles.mobileMenuInner}>
          <div className={styles.mobileMenuNav}>
            <Link href="/">{t("header.navigation.home")}</Link>
            <Link href="/who-we-are">{t("header.navigation.whoWeAre")}</Link>
            <Link href="/targeted-sectors">{t("header.navigation.targetedSectors")}</Link>
            <Link href="/advertise-with-us">{t("header.navigation.advertiseWithUs")}</Link>
            <Link href="/partner-with-us">{t("header.navigation.partnerWithUs")}</Link>
            <Link href="/help-and-support">{t("header.navigation.helpAndSupport")}</Link>
          </div>
          <Button url="/get-in-touch" type="link" color="green">
            {t("header.navigation.getInTouch")}
          </Button>
        </div>
        <div className={styles.mobileMenuBottom}>
          <Link href={`mailto:${WEBSITE_EMAIL}`}>
            <Email />
            {WEBSITE_EMAIL}
          </Link>
          <Link href={`tel:${WEBSITE_PHONE}`}>
            <Phone />
            {WEBSITE_PHONE}
          </Link>
          <div className={styles.mobileMenuBottomSocial}>
            <Link href="#" target="_blank">
              <Facebook />
            </Link>
            <Link href="#" target="_blank">
              <Instagram />
            </Link>
            <Link href="#" target="_blank">
              <X />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
