export default function Footer() {
    return (
        <footer style={{position: "relative", zIndex: 11}}>
            <div className="footer-left">
                © 2026 Alireza Yousefzadeh. All rights reserved.
            </div>
            <div className="footer-right">
                <a
                    href="https://github.com/33alireza"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    GitHub
                </a>
                <a
                    href="https://x.com/AlirezaYouDev"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Twitter
                </a>
            </div>
        </footer>
    );
}