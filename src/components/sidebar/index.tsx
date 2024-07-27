import React from 'react';
import { getTranslation } from '@/locales';
import styles from './Sidebar.module.css';
import { ISiteContext } from "@/interfaces";

interface SidebarProps {
  context: ISiteContext;
}

const Sidebar = ({ context }: SidebarProps) => {
  const { locale } = context; 

  return (
    <aside className={styles.sidebar}>
      <ul>
        <li>{getTranslation(locale, 'sidebar', 'menuItems.home')}</li>
        <li>{getTranslation(locale, 'sidebar', 'menuItems.about')}</li>
        <li>{getTranslation(locale, 'sidebar', 'menuItems.blog')}</li>
        <li>{getTranslation(locale, 'sidebar', 'menuItems.contact')}</li>
      </ul>
    </aside>
  );
};

export default Sidebar;