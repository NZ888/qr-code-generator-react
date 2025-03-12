import React from 'react';
import classes from "./imgSetting.module.css";
import InputModal from "../input/InputModal.jsx";

const ImgSettingsComponent = ({ onSendData }) => {
    const [formImage, setFormImage] = React.useState({
        source: '',
        width: '33',
        height: '33',
        opacity: '1',
    });

    function handleChangeFormImage(e) {
        const { name, value } = e.target;
        setFormImage(prev => {
            const updated = { ...prev, [name]: value };
            onSendData(updated);
            return updated;
        });
    }

    return (
        <div className={classes.imageSettingsDiv}>
            <div className={classes.leftDiv}>
                <form style={{ marginLeft:10 }}>
                    <InputModal
                        style={{margin:0}}
                        labelText="Source"
                        type="text"
                        name="source"
                        value={formImage.source}
                        onChange={handleChangeFormImage}
                    />
                    <InputModal
                        style={{margin:0}}
                        labelText="Image Width:"
                        type="number"
                        name="width"
                        value={formImage.width}
                        onChange={handleChangeFormImage}
                    />
                    <InputModal
                        style={{margin:0}}
                        labelText="Image Height:"
                        type="number"
                        name="height"
                        value={formImage.height}
                        onChange={handleChangeFormImage}
                    />
                </form>
            </div>

            <div className={classes.rightDiv}>
                <form style={{ marginLeft:10 }}>
                    <InputModal
                        style={{ margin:0 }}
                        labelText="Image Opacity:"
                        type="number"
                        step="0.1"
                        name="opacity"
                        value={formImage.opacity}
                        onChange={handleChangeFormImage}
                    />
                </form>
            </div>
        </div>
    );
};

export default ImgSettingsComponent;
