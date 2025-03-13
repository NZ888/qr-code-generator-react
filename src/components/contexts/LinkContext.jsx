import React, { createContext, useState } from 'react';

export const LinkContext = createContext({});

export  const LinkProvider = ({ children }) => {
    const [regeneratedLink, setRegeneratedLink] = useState('');

    const updateRegeneratedLink = (newLink) => {
        setRegeneratedLink(newLink);
    }
    return (
        <LinkContext.Provider value={{regeneratedLink, updateRegeneratedLink}}>{children}</LinkContext.Provider>
    )
}

