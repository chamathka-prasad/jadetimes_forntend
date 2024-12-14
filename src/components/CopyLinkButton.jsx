import { useState } from "react";

import useSwitch from "../hooks/useSwitch";

const CopyLinkButton = ({ position }) => {
    const [isCopied, handleCopiedOn, handleCopiedOff] = useSwitch();
    const [tooltipMessage, setToolTipMessage] = useState("");
    function copyLink() {
        navigator.clipboard.writeText(window.location.href)
            .then(() => {
                setToolTipMessage("Link copied")
                handleCopiedOn();
            })
            .catch((error) => {
                setToolTipMessage("Failed to copy the link")
            })
            .finally(() => {
                setTimeout(handleCopiedOff, 4000);
            });
    }
    return (
        <div className="relative flex">
            <button className="w-7 lg:w-6 lg:hover:text-accent" onClick={copyLink}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M4.715 6.542 3.343 7.914a3 3 0 1 0 4.243 4.243l1.828-1.829A3 3 0 0 0 8.586 5.5L8 6.086a1 1 0 0 0-.154.199 2 2 0 0 1 .861 3.337L6.88 11.45a2 2 0 1 1-2.83-2.83l.793-.792a4 4 0 0 1-.128-1.287z" />
                    <path d="M6.586 4.672A3 3 0 0 0 7.414 9.5l.775-.776a2 2 0 0 1-.896-3.346L9.12 3.55a2 2 0 1 1 2.83 2.83l-.793.792c.112.42.155.855.128 1.287l1.372-1.372a3 3 0 1 0-4.243-4.243z" />
                </svg>
            </button>
            {isCopied && <div className={`absolute text-nowrap text-xs -${position}-24 top-1/2 -translate-y-1/2 bg-neutral-900 text-white px-2 py-1`} aria-hidden>{tooltipMessage}</div>}
        </div>
    )
}

export default CopyLinkButton