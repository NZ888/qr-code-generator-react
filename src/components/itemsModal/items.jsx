import React, {useContext, useEffect, useState} from 'react';
import ItemsModal from "./modal/itemsModal.jsx";
import Item from "./Item/Item.jsx";
import InputModal from "../moreOptionModal/input/InputModal.jsx";
import { usePosts } from "../hooks/usePosts.js";
import {LinkContext} from "../contexts/LinkContext.jsx";
import {useNavigate} from "react-router-dom";

const Items = ({ modal, setModal }) => {
    const [filter, setFilter] = useState({ query: "" });
    const [id, setId] = useState(0);
    const [items, setItems] = useState([]);
    const navigate = useNavigate();
    const searchedPost = usePosts(items, filter.query);

    const { updateRegeneratedLink } = useContext(LinkContext)

    useEffect(() => {
        const currentLinks = localStorage.getItem("links");

        if (currentLinks) {
            try {
                const parsedLinks = JSON.parse(currentLinks);
                if (Array.isArray(parsedLinks)) {
                    setItems(parsedLinks.map(link => ({ id: id, value: link })));
                    setId(prevId => prevId + parsedLinks.length);
                }
            } catch (error) {
                console.error("Error parsing links:", error);
            }
        }
    }, [localStorage.getItem("links")]);

    function deleteItem(item) {
        setItems(items.filter(i => i.id !== item.id));
        const linksString = localStorage.getItem("links");

        if (linksString) {
            try {
                const parsedLinks = JSON.parse(linksString);
                if (Array.isArray(parsedLinks)) {
                    const updatedLinks = parsedLinks.filter(link => link !== item.value);
                    localStorage.setItem("links", JSON.stringify(updatedLinks));
                }
            } catch (error) {
                console.error("Error parsing links:", error);
            }
        }
    }

    function regenerateItem(value) {
        updateRegeneratedLink(value);
        navigate('/generator');
    }

    return (
        <ItemsModal setModal={setModal} modal={modal}>
            <h1 style={{ fontSize: "24px" }}>All qr codes</h1>
            <form>
                <InputModal
                    style={{ marginBottom: "20px" }}
                    labelText={"Find"}
                    value={filter.query}
                    onChange={event => setFilter({ ...filter, query: event.target.value })}
                />
            </form>

            {filter.query ? (
                searchedPost.map((item) => (
                    <Item
                        key={item.id}
                        link={item.value}
                        deleteFunc={deleteItem}
                        regenerateFunc={regenerateItem}
                        item={item}
                    />
                ))
            ) : (
                items.map((item) => (
                    <Item
                        key={item.id}
                        link={item.value}
                        deleteFunc={deleteItem}
                        regenerateFunc={regenerateItem}
                        item={item}
                    />
                ))
            )}
        </ItemsModal>
    );
};

export default Items;