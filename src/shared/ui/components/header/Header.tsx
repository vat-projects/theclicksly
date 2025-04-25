import Image from "next/image";
import Link from "next/link";

import { Email } from "../../icons/email/email";
import { Phone } from "../../icons/phone/phone";
import { Facebook } from "../../icons/socials/facebook/facebook";
import { Instagram } from "../../icons/socials/instagram/instagram";
import { X } from "../../icons/socials/x/x";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import styles from "./Header.module.scss";

export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.headerTop}>
        <div className={"_container"}>
          <div className={styles.headerTopInner}>
            <div className={styles.headerTopLeft}>
              <Link href="mailto:example@gmail.com">
                <Email />
                example@gmail.com
              </Link>
              <Link href="tel:+0000000000">
                <Phone />
                +000 000 00 00
              </Link>
            </div>
            <div className={styles.headerTopRight}>
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
      </div>
      <div className={styles.headerBottom}>
        <div className={"_container"}>
          <div className={styles.headerBottomInner}>
            <Link href="/">
              <Image src="/logo.svg" alt="logo" width={46} height={29} />
            </Link>
            <nav className={styles.headerBottomNav}>
              <Link href="/">Home</Link>
              <Link href="#">Who we are</Link>
              <Link href="#">Targeted sectors</Link>
              <Link href="#">Advertise with us</Link>
              <Link href="#">Partner with us</Link>
              <Link href="#">Help & support</Link>
            </nav>
            <Link href="#" className={styles.getInTouch}>
              Get in touch
            </Link>
            <MobileMenu />
          </div>
        </div>
      </div>
    </header>
  );
};
