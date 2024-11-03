import React, {useState} from 'react';
import styles from '../styles/Modal.module.css';
import Image from "next/image";
import GoogleIcon from '../public/google-icon.png'

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSwitch: () => void;
}

export default function SignUpModal({ isOpen, onClose, onSwitch }: ModalProps) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');

    if (!isOpen) return null;

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setPassword('')
        setEmail('')
        setUsername('')
        console.log(email)
    }

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    &times;
                </button>
                <h1>Welcome to img!</h1>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Username" name="username" value={username}
                           onChange={(e) => setUsername(e.target.value)} required/>
                    <input type="text" placeholder="Email" name="email" value={email}
                           onChange={(e) => setEmail(e.target.value)} required/>
                    <input type="password" placeholder="Password" name="password" value={password}
                           onChange={(e) => setPassword(e.target.value)} required/>
                    <button type="submit" className={styles.submitButton}>Sign up</button>
                </form>
                <button className={styles.googleButton}>
                    <Image src={GoogleIcon} alt="Google icon" width={20} height={20} />
                    Sign in with Google
                </button>
                <p> By continuing, you agree to Pinterest's Terms of Service and
                    <br/>acknowledge you've read our Privacy Policy.
                    <br/>Notice at collection .</p>
                <button type="button" onClick={onSwitch} className={styles.altButton}>Already have an account?</button>
            </div>
        </div>
    );
}
