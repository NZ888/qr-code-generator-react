import React, {useContext, useEffect, useRef, useState} from 'react';
import classes from "./generator.module.css";
import { QRCodeSVG } from 'qrcode.react';
import { saveAs } from 'file-saver';
import domtoimage from 'dom-to-image';

import MoreOptionModal from "../moreOptionModal/MoreOptionModal.jsx";
import {LinkContext} from "../contexts/LinkContext.jsx";

const Generator = () => {
    const [link, setLink] = useState("");
    const svgRef = useRef(null);
    const [modal, setModal] = useState(false);

    const { regeneratedLink } = useContext(LinkContext);

    useEffect(() => {
        if (regeneratedLink) {
            setLink(regeneratedLink);
        }
    }, [regeneratedLink])


    const handleDownloadPNG = (link) => {
        domtoimage.toBlob(svgRef.current)
            .then((blob) => saveAs(blob, 'Qr.png'))
            .catch((err) => console.error("error convert to PNG:", err));

        if (link !== "") {
            const storageLinks = localStorage.getItem("links");
            let links = storageLinks ? JSON.parse(storageLinks) : [];

            links.push(link);
            localStorage.setItem("links", JSON.stringify(links));
        }

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
                <button onClick={()=> handleDownloadPNG(link)}>Download</button>
            </div>
            <div className={classes.moreOption}>
                {window.innerWidth >= 720 ? <a href="#!" onClick={handleClick}>More options...</a> : null }

            </div>
        </div>
    );
};

export default Generator;
