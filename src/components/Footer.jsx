function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="py-1 text-center">
            <p className="footer-text">
                &copy; {year} Marielle Collera. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;