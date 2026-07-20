import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.colInfo}>
            <Link href="/" className={styles.logo}>
              <Image src="/logos/CITA-EV-Logo-Green.png" alt="CITA EV" width={180} height={50} style={{ objectFit: 'contain' }} />
            </Link>
            <p className={styles.description}>
              Official Distributor of CITA EV Charging Solutions in Pakistan. Powering the future of mobility with intelligent AC and DC chargers.
            </p>
            <p className={styles.companyName}>
              Operated by <span className={styles.blueCompany}>BLUEOCEAN TECH IMPEX PRIVATE LIMITED</span>
            </p>
          </div>

          <div className={styles.colLinks}>
            <h4 className={styles.title}>Products</h4>
            <ul className={styles.linkList}>
              <li><Link href="/products/smart-7">Smart 7 (Residential)</Link></li>
              <li><Link href="/products/smart-22">Smart 22 (Commercial)</Link></li>
              <li><Link href="/products/smart-80-dc">DC Fast Chargers</Link></li>
              <li><Link href="/products">All Products</Link></li>
              <li><Link href="/software">Software Solutions</Link></li>
            </ul>
          </div>

          <div className={styles.colLinks}>
            <h4 className={styles.title}>Company</h4>
            <ul className={styles.linkList}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/certifications">Certifications</Link></li>
              <li><Link href="/partner">Become a Partner</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.colContact}>
            <h4 className={styles.title}>Contact Us</h4>
            <ul className={styles.contactList}>
              <li className={styles.contactPerson}>Naeem Khalid</li>
              <li><a href="tel:+923007929616" className={styles.contactRow}><Phone size={15} /> +92 300 7929616</a></li>
              <li><a href="https://wa.me/923007929616" target="_blank" rel="noopener noreferrer" className={styles.contactRow}><FaWhatsapp size={16} className={styles.waIcon} /> +92 300 7929616</a></li>
              <li className={styles.contactPerson}>Mazhar Hussain</li>
              <li><a href="tel:+923001002226" className={styles.contactRow}><Phone size={15} /> +92 300 1002226</a></li>
              <li><a href="https://wa.me/923001002226" target="_blank" rel="noopener noreferrer" className={styles.contactRow}><FaWhatsapp size={16} className={styles.waIcon} /> +92 300 1002226</a></li>
              <li><a href="mailto:contact@superfastevcharger.com" className={styles.contactRow}><Mail size={15} /> contact@superfastevcharger.com</a></li>
              <li className={styles.contactRow} style={{ alignItems: 'flex-start', marginTop: '8px' }}>
                <MapPin size={15} style={{ marginTop: '3px', flexShrink: 0 }} />
                <span>Office No. 810, Level 8, HI Q Towers, Jail Road, Lahore, Punjab, Pakistan</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className={styles.bottomBar}>
          <p>&copy; {new Date().getFullYear()} CITA EV Chargers Pakistan. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
