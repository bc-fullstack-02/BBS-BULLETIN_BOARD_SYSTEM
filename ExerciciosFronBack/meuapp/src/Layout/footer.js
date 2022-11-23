import { SocialIcon } from 'react-social-icons';


import styles from './footer.module.css'
const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <div className={styles.icones}>
                <SocialIcon url="https://www.linkedin.com/in/bene-tesla" />
                <SocialIcon url="https://github.com/benetesla" />
                <SocialIcon url="https://www.instagram.com/benetesla/" />
                <SocialIcon url="https://www.facebook.com/bene.tesla" />

            </div>


        </footer>
    );
}
export default Footer;