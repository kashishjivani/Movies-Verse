import styles from "@/app/styles/common.module.css";
import Link from "next/link";

const NotFound = () => {
    return (
        <>
            <section className={styles.container}>
                <div className={styles.error_page}>
                    <h2>Page  Not Found </h2>
                    <Link href="/">
                        <button>     Go to Home Page</button>
                    </Link>
                </div>
            </section>
        </>
    )
}

export default NotFound