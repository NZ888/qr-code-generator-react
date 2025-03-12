import React, { useRef, useState } from 'react';
import classes from "./generator.module.css";
import { QRCodeSVG } from 'qrcode.react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

import MoreOptionModal from "../moreOptionModal/MoreOptionModal.jsx";

const Generator = () => {
    const [link, setLink] = useState("");
    const svgRef = useRef(null);
    const [modal, setModal] = useState(false);

    const handleDownloadPNG = () => {
        domtoimage.toBlob(svgRef.current)
            .then((blob) => saveAs(blob, 'Qr.png'))
            .catch((err) => console.error("error convert to PNG:", err));
    };

    const handleClick = () => {
        setModal(true);
    };

    const handleChange = (e) => {
        setLink(e.target.value);
    };

    return (
        <div className={classes.container}>
            <MoreOptionModal modal={modal} setModal={setModal} baseValue={link}/>

            <div className={classes.qrCode} ref={svgRef}>
                <QRCodeSVG value={link} size={319} />
            </div>
            <div className={classes.input}>
                <input
                    type="text"
                    placeholder="Type something, for example URL"
                    value={link}
                    onChange={handleChange}
                />
                <button onClick={handleDownloadPNG}>Download</button>
            </div>
            <div className={classes.moreOption}>
                {window.innerWidth >= 720 ? <a href="#!" onClick={handleClick}>More options...</a> : null }

            </div>
        </div>
    );
};

export default Generator;
