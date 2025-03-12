import React from 'react';
import "./itemsModal.css"

const ItemsModal = ({modal, setModal, children}) => {
    const [mouseDownTargetIsOverley, setMouseDownTargetIsOverley] = React.useState(false);

    if(!modal){
        return null;
    }

    function handleOverlayMouseDown(event) {
        if (event.target === event.currentTarget) {
            setMouseDownTargetIsOverley(true)
        }
    }

    function handleOverlayMouseUp(event) {
        if (mouseDownTargetIsOverley === true && event.target === event.currentTarget) {
            setModal(false)
        }
        setMouseDownTargetIsOverley(false)
    }

    return (
        <div
            className="modal active"
            onMouseDown={handleOverlayMouseDown}
            onMouseUp={handleOverlayMouseUp}
        >
            <div className="modalContent">
                {children}
            </div>
        </div>
    );
};

export default ItemsModal;