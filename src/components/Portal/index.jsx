import { useEffect } from "react";
import { createPortal } from "react-dom";

export default function Portal({ onClose, children, className = '' }) {
    const handleClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        return () => {
            document.body.style.overflow = '';
        }
    }, []);

    return createPortal(
        <div
            onClick={handleClick}
            className={`fixed inset-0 z-50 bg-[#0000007f] backdrop-blur-sm flex items-center justify-center ${className}`}
        >
            {children}
        </div>,
        document.body
    );
}