import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HeaderPage() {

    const [mode, setMode] = useState("light");

    useEffect(() => {
        document.documentElement.setAttribute("data-mode", mode);
    }, [mode]);

    const toggleMode = () => {
        setMode((prevMode) => (prevMode === "dark" ? "light" : "dark"));
    };

    return (

        <div className="header">
            <div className="AppName">CryptoKindness</div>
            <nav>
                <div className="Mode" onClick={toggleMode}>
                    {mode === "light" ? (
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/4489/4489231.png"
                            alt="Light Mode"
                        />
                    ) : (
                        <img
                            src="https://cdn-icons-png.flaticon.com/128/1687/1687788.png"
                            alt="Dark Mode"
                        />
                    )}
                </div>
                <a href="https://github.com/Ayush-Khandelwal28/CryptoKindness.git">
                    <div className="github">
                        <img src="https://cdn-icons-png.flaticon.com/128/2111/2111432.png" alt="" />
                    </div>
                </a>


            </nav>
        </div>
    )
}

export default HeaderPage;