"use client";

import styles from '../styles/Header.module.css'
import React from "react";
import LoginModal from "./loginModal";
import SignupModal from "./signupModal";
import Image from "next/image";
import Logo from '../public/Logo.png'
import {Avatar} from "antd"
import {BellOutlined, DownOutlined, MessageOutlined, UserOutlined} from "@ant-design/icons";

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

            <div className={styles.searchContainer}>
                <input type="text" placeholder="Search" className={styles.searchInput} />
            </div>

            <nav className={styles.rightNav}>
                <BellOutlined style={{fontSize: '23px'}}/>
                <MessageOutlined style={{fontSize: '23px'}}/>
                <Avatar><UserOutlined/></Avatar>
                <DownOutlined/>
            </nav>
            <LoginModal isOpen={isLoginModalOpen} onClose={closeModals} onSwitch={openSignUpModal}/>
            <SignupModal isOpen={isSignUpModalOpen} onClose={closeModals} onSwitch={openLoginModal}></SignupModal>
        </header>
    );
};
