import Image from "next/image";
import Link from "next/link";

import { Facebook } from "../../icons/socials/facebook/facebook";
import { Instagram } from "../../icons/socials/instagram/instagram";
import { X } from "../../icons/socials/x/x";
import styles from "./Footer.module.scss";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={"_container"}>
        <div className={styles.footerTop}>
          <div className={styles.footerTopLeft}>
            <Link href="/">
              <Image
                src={"/foot_logo.svg"}
                alt="The Clicksly"
                width={113}
                height={70}
              />
            </Link>
            <div className={styles.footerNavigations}>
              <nav>
                <h3>Company</h3>
                <Link href="/who-we-are">Who We Are</Link>
                <Link href="#">Targeted Sectors</Link>
                <Link href="/get-in-touch">Get in Touch</Link>
              </nav>
              <nav>
                <h3>Partnership</h3>
                <Link href="/advertise-with-us">Advertise With Us</Link>
                <Link href="/partner-with-us">Partner With Us</Link>
                <Link href="#">Help & Support</Link>
              </nav>
              <nav>
                <h3>Legal</h3>
                <Link href="#">Terms and Conditions</Link>
                <Link href="#">Privacy Policy</Link>
                <Link href="#">Cookie Policy</Link>
                <Link href="#">Refund Policy</Link>
              </nav>
            </div>
          </div>
          <Image
            src={"/foot_logo_big_mob.svg"}
            alt="The Clicksly"
            width={1440}
            height={248}
            className={styles.footerBottomImageMob}
          />
          <div className={styles.footerTopRight}>
            <div className={styles.office}>
              <h3>Office Addresses</h3>
              <p>
                [Street Address][City, State/Province, ZIP/Postal Code][Country]
              </p>
            </div>
            <div className={styles.registered}>
              <h3>Registered Address</h3>
              <p>
                [Street Address][City, State/Province, ZIP/Postal Code][Country]
              </p>
            </div>
            <div className={styles.contact}>
              <h3>Contact Information</h3>
              <h4>Email:</h4>
              <Link href="mailto:example@gmail.com">example@gmail.com</Link>
              <h4>Phone:</h4>
              <Link href="tel:+0000000000">+000 000 00 00</Link>
            </div>
          </div>
        </div>
      </div>
      <Image
        src={"/foot_logo_big.svg"}
        alt="The Clicksly"
        width={1440}
        height={248}
        className={styles.footerBottomImage}
      />
      <div className={"_container"}>
        <div className={styles.footerBottom}>
          <div className={styles.footerBottomLeft}>
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
          <div className={styles.footerBottomRight}>
            <p>© {new Date().getFullYear()} SL Freight Management S.R.O</p>
            <p>All Rights Reserved.</p>
          </div>
          <nav className={styles.legalMobile}>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Cookie Policy</Link>
            <Link href="#">Refund Policy</Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
