import { useStateValue } from "../contextProvider/StateProvider";
import { actionType } from "../contextProvider/reducer";
import { getAllFoodItems } from "./firebaseFunctions";

export const fetchUser = () => {
    const userInfo =
        localStorage.getItem("user") !== undefined ?
        JSON.parse(localStorage.getItem("user")) :
        localStorage.clear();

    return userInfo;
};

export const useFetchItems = () => {
    const [, dispatch] = useStateValue();

    const fetchData = async() => {
        await getAllFoodItems().then((data) => {
            dispatch({
                type: actionType.SET_FOOD_ITEMS,
                foodItems: data,
            });
        });
    };

    return { fetchData };
};