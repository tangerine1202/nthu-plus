import React from 'react'
import Link from 'next/link'
import styles from '../styles/Header.module.css'

class Header extends React.Component {
  render() {
    return (
      <nav className={styles.header}>
        <Link href="" >
          <a className={styles.header_home}>Nthu+</a>
        </Link>
        <div className={styles.header_gap}>
          {/* this is a gap */}
        </div>
        <Link href="">
          <a className={styles.header_page}>Page1</a>
        </Link>
        <Link href="">
          <a className={styles.header_page}>Page2</a>
        </Link>
        <Link href="">
          <a className={styles.header_page} > Page3</a>
        </Link>
      </nav>
    )
  }
}

export default Header;