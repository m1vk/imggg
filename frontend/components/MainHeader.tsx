"use client";

import styles from '../styles/Header.module.css'
import Link from "next/link";
import React from "react";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";
import Image from "next/image";
import Logo from '../public/Logo.png'
import { FloatButton } from "antd";
import { PlusOutlined } from "@ant-design/icons";

export default function UnAuthHeader() {
    const [isLoginModalOpen, setIsLoginModalOpen] = React.useState(false);
    const [isSignUpModalOpen, setIsSignUpModalOpen] = React.useState(false);

    const openLoginModal = () => {
        setIsSignUpModalOpen(false);
        setIsLoginModalOpen(true);
    };

    const openSignUpModal = () => {
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(true);
    };

    const closeModals = () => {
        setIsLoginModalOpen(false);
        setIsSignUpModalOpen(false);
    };

    return (
        <header className={styles.header}>
            <div className={styles.leftContainer}>
                <div className={styles.logoContainer}>
                    <Image src={Logo} alt="Logo" width={120} height={80}/>
                </div>
                <div className={styles.leftNav}>
                    <button className={styles.roundButton}>+</button>
                </div>
            </div>

            <nav className={styles.rightNav}>
                <Link href='/' className={styles.loginButton} onClick={openLoginModal}>Log in</Link>
                <Link href='/' className={styles.signupButton} onClick={openSignUpModal}>Sign up</Link>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeModals} onSwitch={openSignUpModal} />
            <SignupModal isOpen={isSignUpModalOpen} onClose={closeModals} onSwitch={openLoginModal}></SignupModal>
        </header>
    );
};
