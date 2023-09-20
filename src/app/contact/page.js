import ContactCard from "@/components/ContactCard";
import styles from "./contact.module.css";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
    return (
        <>
            <div className={styles.container}>
                <h1>Contact Us</h1>
                <ContactCard />

                <section className={styles.contact_section}>
                    <h2> We would Love to hear <span> from you </span> </h2>
                    <ContactForm />
                </section>
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2928578325063!2d72.50066107526872!3d23.01301697918048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b26c9ddeb37%3A0xe6817dfb18d3c1f6!2sPrahlad%20Nagar%20Cross%20Road!5e0!3m2!1sen!2sin!4v1695124943685!5m2!1sen!2sin" width={600} height={450} style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className={styles.mapping}></iframe>
        </>
    );
};

export default Contact;