import React, { createContext, useState, useEffect } from 'react'

export const StoreContext = createContext(null)

const StoreProvider = ({ children }) => {
    const [isMobile, setIsMobile] = useState(false)


    const handleIsMoblie =()=>{
        if (window.innerWidth <= 600) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }
    useEffect(()=>{
        handleIsMoblie()
    }, [])

    window.addEventListener('resize',handleIsMoblie)

    return (
        <StoreContext.Provider value={{
            isMobile,
        }}>
            {children}
        </StoreContext.Provider>
    )
}

export default StoreProvider