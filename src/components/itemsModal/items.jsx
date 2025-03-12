import React from 'react';
import ItemsModal from "./modal/itemsModal.jsx";

const Items = ({modal, setModal}) => {
    return (
        <ItemsModal setModal={setModal} modal={modal}>

        </ItemsModal>
    );
};

export default Items;