import React, {useState} from 'react';
import styles from '../styles/Modal.module.css';

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
                <button type="button" onClick={onSwitch} className={styles.altButton}>Already have an account?</button>
            </div>
        </div>
    );
}
