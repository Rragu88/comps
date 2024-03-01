import {NavigationContext} from "../context/Navigation.jsx";
import {useContext} from "react";

function useNavigation() {
    return useContext(NavigationContext);
}

export default useNavigation;