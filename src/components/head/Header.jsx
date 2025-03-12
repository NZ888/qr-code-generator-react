import React from 'react';
import classes from './header.module.css';
import logo from "../../assets/qr-code 1.png"
import burgerMenu from "../../assets/free-icon-burger-bar-5358649 1.png"
import {Link, useLocation} from 'react-router-dom';
import Items from "../itemsModal/items.jsx";

const Header = () => {
    let location = useLocation();

    const [modal, setModal] = React.useState(false);



    return (
        <>
            <Items modal={modal} setModal={setModal} />
            <header className={classes.container}>
                <div className={classes.logo}>
                    {location.pathname === "/" ? (
                        <img src={logo} alt="logo" draggable={false}/>
                    ) : (
                        <img src={burgerMenu} alt="logo" draggable={false} onClick={() => {setModal(true)}}/>
                    )}

                </div>
                <nav className={classes.navigation}>

                    {location.pathname === "/generator" ? (
                        <>
                            <Link to={"/"}>Home</Link>
                        </>
                    ): (
                        <>
                            <Link to={"/generator"}>Genetator</Link>
                            <a href="https://github.com/NZ888" target="_blank">Contact</a>
                        </>
                    )}
                </nav>
            </header>
            <hr/>
        </>
    );
};

export default Header;