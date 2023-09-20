'use client'

import styles from "@/app/contact/contact.module.css";
import { Mulish } from 'next/font/google'
import { useState } from "react";

const mulish = Mulish({
    weight: ['300', '400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    display: 'swap',
})

const ContactForm = () => {

    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        message: ""
    })
    const [status, setStatus] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        var response;

        try {
            response = await fetch('/api/contact', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    username: user.username,
                    email: user.email,
                    phone: user.phone,
                    message: user.message
                })
            })
        }
        catch(e) {
            console.log(e);
        }

        if(response.status === 200) {
            setUser({
                username: "",
                email: "",
                phone: "",
                message: ""
            })
            setStatus('success');
        }
        else {
            setStatus('error');
        }
    }


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUser((prevUser) => ({...prevUser, [name]: value}))
    }

    return (

        <form className={styles.contact_form} onSubmit={handleSubmit}>
            <div className={styles.input_field}>
                <label htmlFor="username" className={styles.label}>
                    Name
                    <input type="text" name="username" id="username" placeholder="Enter your Name" className={mulish.className} value={user.username} onChange={handleChange} required autoComplete="off" />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="email" className={styles.label}>
                    Email
                    <input type="text" name="email" id="email" placeholder="Enter your Email" className={mulish.className} value={user.email} onChange={handleChange} required autoComplete="off" />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="phone" className={styles.label}>
                    Phone Number
                    <input type="number" name="phone" id="phone" placeholder="Enter your Phone Number" className={mulish.className} value={user.phone} onChange={handleChange} required autoComplete="off" />
                </label>
            </div>

            <div className={styles.input_field}>
                <label htmlFor="message" className={styles.label}>
                    Message
                    <textarea type="text" rows={5} name="message" id="message" placeholder="Enter your Message" className={mulish.className} value={user.message} onChange={handleChange} required autoComplete="off" />
                </label>
            </div>

            <div>
                {status === 'success' && <p className={status.success_msg}> Thank you for your message!</p>}
                {status === 'error' && <p className={styles.error_msg}> There was an error submitting your message. Please try again!</p>}
                <button className={mulish.className} type="submit">
                    Send Message
                </button>
            </div>

        </form>)
}

export default ContactForm