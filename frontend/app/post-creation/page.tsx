"use client"

import React, { useState } from 'react';
import styles from '../../styles/PostCreation.module.css';
import Header from '../../components/MainHeader'

export default function PostCreation() {

    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(e.target.value);
    };

    return (
        <div className={styles.pageContainer}>
            <Header/>
            <header className={styles.header}>
                <h1>Create a Pin</h1>
            </header>
            <div className={styles.content}>
                <div className={styles.fileUploadContainer}>
                    <div className={styles.uploadBox}>
                        <span>Select a file or drag it here</span>
                        <p>We recommend using high-quality files in .jpg format (under 20 MB) or .mp4 format (under 200
                            MB).</p>
                    </div>
                </div>
                <div className={styles.inputContainer}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="title" className={styles.label}>Title</label>
                        <input type="text" id="title" className={styles.inputField}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="description" className={styles.label}>Description</label>
                        <textarea id="description" className={styles.textArea}></textarea>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="link" className={styles.label}>Link</label>
                        <input type="text" id="link" className={styles.inputField}/>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="board" className={styles.label}>Board</label>
                        <select id="board" className={styles.selectField} value={selectedValue} onChange={handleChange}>
                            <option value="default">Select a board</option>
                        </select>
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="tag" className={styles.label}>Tags</label>
                        <input type="text" id="tag" className={styles.inputField}/>
                    </div>
                </div>
            </div>
        </div>


    );
}
