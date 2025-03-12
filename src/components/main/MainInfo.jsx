import React from 'react';
import classes from "./main.info.module.css"
import qrImage from "../../assets/qr-code 1.png"
import {useNavigate} from "react-router-dom";



const MainInfo = () => {

    const navigate = useNavigate();

    return (
        <div className={classes.mainContainer}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <h1>Create Your Own <br/> QR Code Instantly</h1>
                    <p>Customize, and Download Your QR Code in Seconds!</p>
                    <button onClick={()=> navigate("/generator")}>Try it!</button>
                </div>
            </div>
            <div className={classes.about}>
                <div className={classes.text}>
                    <p>
                        Welcome to QR Code Generator, your go-to tool for creating custom QR codes quickly <br/> and effortlessly. Whether you need a QR code for a website, contact details, or any other <br/> information, our platform makes it simple.

                        <br/><br/>   ✔ Fast & Free – Generate your QR code in seconds.  <br/> ✔ Customizable – Adjust colors, shapes, and styles to match your brand.  <br/> ✔ Download & Share – Save your QR code in high-quality formats and use it anywhere.

                        <br/>  Start generating your QR codes today – it's easy, efficient, and completely free!

                    </p>
                </div>
                <div className={classes.image}>
                    <div className={classes.imageBG}>
                        <img src={qrImage} alt=""/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainInfo;