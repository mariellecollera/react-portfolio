function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="d-flex justify-content-center align-items-center">
            <p className="footer-text m-0">
                &copy; {year} Marielle Collera. All Rights Reserved.
            </p>
        </footer>
    );
}

export default Footer;