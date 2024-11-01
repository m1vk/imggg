"use client";

import styles from './MainHeader.module.css'
import Link from "next/link";
import React from "react";
import LoginModal from "./loginModal";

export default function Header() {
    const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <div className={styles.logoContainer}>
                    <img src='../assets/Logo.png' alt="Pinterest Logo" className={styles.logo}/>
                </div>
                <div className={styles.leftNav}>
                    <Link href="/" className={styles.navLink}>Watch</Link>
                    <Link href="/" className={styles.navLink}>Explore</Link>
                </div>
            </div>

            <nav className={styles.rightNav}>
                <Link href="/" className={styles.navLink}>About</Link>
                <Link href="/" className={styles.navLink}>Buisness</Link>
                <Link href="/" className={styles.navLink}>Blog</Link>
                <Link href='/' className={styles.loginButton} onClick={openLoginModal}>Log in</Link>
                <Link href='/' className={styles.signupButton}>Sign up</Link>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeLoginModal} />
        </header>
    );
};
