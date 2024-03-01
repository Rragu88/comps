import {createContext, useState, useEffect} from "react";

const NavigationContext = createContext();

function NavigationProvider({ children }) {
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    useEffect(() => {
        const handleLocationChange = () => {
            setCurrentPath(window.location.pathname);
        }
        window.addEventListener('popstate', handleLocationChange);

        return () => {
            window.removeEventListener('popstate', handleLocationChange);
        }

    }, []);

    const navigate = (to) => {
        window.history.pushState({}, '', to);
        setCurrentPath(to);
    }

    return (
        <NavigationContext.Provider value={{currentPath, navigate}}>
            {children}
        </NavigationContext.Provider>
    );
}

export { NavigationProvider, NavigationContext };