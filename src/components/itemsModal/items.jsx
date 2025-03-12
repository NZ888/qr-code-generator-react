import React from 'react';
import ItemsModal from "./modal/itemsModal.jsx";
import Item from "./Item/Item.jsx";
import InputModal from "../moreOptionModal/input/InputModal.jsx";

const Items = ({modal, setModal}) => {

    const [items, setItems] = React.useState([
        {id:1, value:" https://mtu.gov.ua/news/289.html"},
        {id:2, value:" https://mtu.gov.ua/news/289.html"},
        {id:3, value:" https://mtu.gov.ua/news/289.html"},
        {id:4, value:" https://mtu.gov.ua/news/289.html"},
        {id:5, value:" https://mtu.gov.ua/news/289.html"},
        {id:6, value:" https://mtu.gov.ua/news/289.html"},
    ]);

    function deleteItem(item) {
        setItems(items.filter(i => i.id !== item.id))
    }

    function regenerateItem(value){
        console.log(value);
    }

    return (
        <ItemsModal setModal={setModal} modal={modal}>
            <h1 style={{fontSize:"24px"}}>All qr codes</h1>
            <form>
               <InputModal style={{marginBottom:"20px"}} labelText={"Find"}/>
            </form>
            {

                items.map((item) => {
                    return <Item key={item.id} link={item.value} deleteFunc={deleteItem} regenerateFunc={regenerateItem} item={item}/>
                })
            }
        </ItemsModal>
    );
};

export default Items;