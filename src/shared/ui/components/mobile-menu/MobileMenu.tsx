"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { Email } from "../../icons/email/email";
import { Phone } from "../../icons/phone/phone";
import { Facebook } from "../../icons/socials/facebook/facebook";
import { Instagram } from "../../icons/socials/instagram/instagram";
import { X } from "../../icons/socials/x/x";
import Button from "../../kit/button/Button";
import styles from "./MobileMenu.module.scss";

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link href="/">Home</Link>
            <Link href="/who-we-are">Who we are</Link>
            <Link href="#">Targeted sectors</Link>
            <Link href="/advertise-with-us">Advertise with us</Link>
            <Link href="/partner-with-us">Partner with us</Link>
            <Link href="#">Help & support</Link>
          </div>
          <Button url="/get-in-touch" type="button" color="green">
            Get in touch
          </Button>
        </div>
        <div className={styles.mobileMenuBottom}>
          <Link href="mailto:example@gmail.com">
            <Email />
            example@gmail.com
          </Link>
          <Link href="tel:+0000000000">
            <Phone />
            +000 000 00 00
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
