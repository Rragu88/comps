import useNavigation from "../hooks/use-navigation.jsx";

function Route({ path, children }) {
    const { currentPath } = useNavigation();
    return currentPath === path ? children : null;
}

export default Route;