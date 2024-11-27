import { useReducer } from "react";
import { Sub } from "../types";

const INITIAL_STATE = {
    nick: "",
    subMonths: 0,
    avatar: "",
    description: "",
};

type Action =
    | {
        type: "change_value";
        payload: {
            inputName: string;
            inputValue: string;
        };
    }
    | {
        type: "clear"
    };

function reducer(state: Sub, action: Action) {
    switch (action.type) {
        case "change_value":
            const { inputName, inputValue } = action.payload;
            return {
                ...state,
                [inputName]: inputValue,
            };
        case "clear":
            return INITIAL_STATE;
    }
}

const useNewSubForm = () => {
    return useReducer(reducer, INITIAL_STATE)
}

export default useNewSubForm