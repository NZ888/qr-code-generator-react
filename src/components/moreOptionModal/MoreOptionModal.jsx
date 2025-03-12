import React, {useEffect, useRef, useState} from 'react';
import Modal from "../modal/Modal.jsx";
import classes from "./moreOptModal.module.css";
import InputModal from "./input/InputModal.jsx";
import {QRCodeSVG} from "qrcode.react";
import ImgSettingsComponent from "./imgSettings/ImgSettingsComponent.jsx";
import domtoimage from "dom-to-image";

const MoreOptionModal = ({ modal, setModal, baseValue }) => {
    const svgRef = useRef(null);
    const [form, setForm] = useState({
        value: baseValue,
        size: '128',
        BKGcolor: "#fdfcfc",
        FRGcolor: '',
        source: '',
        width: '',
        height: '',
        opacity: ''
    });

    useEffect(() => {
        setForm(prev => ({ ...prev, value: baseValue }));
    }, [baseValue]);

    function handleChildData(newImgData) {
        setForm(prev => ({
            ...prev,
            ...newImgData
        }));
    }

    const [includeImage, setIncludeImage] = React.useState(false);

    function handleCheckboxChange(e) {
        setIncludeImage(e.target.checked);
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }


    const inputs = [
        { id: 1, type: 'text',   name: 'value',       label: 'Value' },
        { id: 2, type: 'number', name: 'size',        label: 'Size(px):' },
        { id: 3, type: 'color',  name: 'BKGcolor',    label: 'Background Color:' },
        { id: 4, type: 'color',  name: 'FRGcolor',    label: 'Foreground Color:' },
        { id: 5, type: 'number', name: 'marginSize',  label: 'Margin Size:' },
    ];

    const handleDownloadPNG = () => {
        domtoimage.toBlob(svgRef.current)
            .then((blob) => saveAs(blob, 'Qr.png'))
            .catch((err) => console.error("error convert to PNG:", err));
    };


    return (
        <Modal visible={modal} setVisible={setModal}>
            <div className={classes.container}>
                <div className={classes.upperContainer}>
                    <div className={classes.formDivForUpperContainer}>
                        <form>
                            {inputs.map(input => (
                                <InputModal
                                    key={input.id}
                                    labelText={input.label}
                                    type={input.type}
                                    name={input.name}
                                    onChange={handleChange}
                                    value={form[input.name] || ''}
                                />
                            ))}
                        </form>
                    </div>

                    <div className={classes.qrCodeAreaDiv}>
                        <div ref={svgRef}>
                            <QRCodeSVG
                                value={form.value}
                                size={form.size}
                                bgColor={form.BKGcolor}
                                fgColor={form.FRGcolor}
                                marginSize={form.marginSize}
                                imageSettings={{
                                    src: form.source,
                                    height: form.height,
                                    width: form.width,
                                    opacity: form.opacity,
                                }}
                                className={classes.qrCode}
                            />
                        </div>
                    </div>
                </div>

                <div className={classes.downerContainer}>
                    <form>
                        <h1>Include Image:</h1>
                        <input
                            type="checkbox"
                            checked={includeImage}
                            onChange={handleCheckboxChange}
                        />
                    </form>

                    { includeImage && (
                        <ImgSettingsComponent onSendData={handleChildData} />
                    )}
                    <div className={classes.buttonst}>
                        <button className={classes.buttonCancel} onClick={()=> setModal(false)}>Cancel</button>
                        <button className={classes.buttonCancel} onClick={handleDownloadPNG}>Download</button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default MoreOptionModal;
