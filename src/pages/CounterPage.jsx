import { produce } from "immer";
import { useReducer } from "react";
import Button from "../components/Button.jsx";
import Panel from "../components/Panel.jsx";

const INCREMENT_COUNT = 'increment';
const DECREMENT_COUNT = 'decrement';
const UPDATE_VALUE_TO_ADD = 'updateValueToAdd';
const ADD_VALUE_TO_COUNT = 'addValueToCount';

const reducer = (state, action) => {
    // switch (action.type) {
    //     case INCREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + 1,
    //         };
    //     case DECREMENT_COUNT:
    //         return {
    //             ...state,
    //             count: state.count - 1,
    //         };
    //     case UPDATE_VALUE_TO_ADD:
    //         return {
    //             ...state,
    //             valueToAdd: action.payload,
    //         };
    //     case ADD_VALUE_TO_COUNT:
    //         return {
    //             ...state,
    //             count: state.count + state.valueToAdd,
    //             valueToAdd: 0,
    //         };
    //     default:
    //         return state;
    // }

    switch (action.type) {
        case INCREMENT_COUNT:
            state.count += 1;
            break;
        case DECREMENT_COUNT:
            state.count -= 1;
            break;
        case UPDATE_VALUE_TO_ADD:
            state.valueToAdd = action.payload;
            break;
        case ADD_VALUE_TO_COUNT:
            state.count += state.valueToAdd;
            state.valueToAdd = 0;
            break;
        default:
            return;
    }
}

function CounterPage({ initialCount }) {
    const [state, dispatch] = useReducer(produce(reducer), {
        count: initialCount,
        valueToAdd: 0,
    });

    const handleIncrementClick = () => {
        // setCount(count + 1);
        dispatch({
            type: INCREMENT_COUNT,
        });
    }

    const handleDecrementClick = () => {
        dispatch({
            type: DECREMENT_COUNT,
        });
    }

    const handleValueChange = (event) => {
        dispatch({
            type: UPDATE_VALUE_TO_ADD,
            payload: parseInt(event.target.value) || 0,
        });
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch({
            type: ADD_VALUE_TO_COUNT,
        });
    }

    return (
        <Panel className='m-3'>
            <h1 className='text-lg'>Count: {state.count}</h1>
            <div className='flex flex-row'>
                <Button onClick={handleIncrementClick}>Increment</Button>
                <Button onClick={handleDecrementClick}>Decrement</Button>
            </div>
            <form onSubmit={handleSubmit}>
                <label>Add a lot</label>
                <input
                    value={state.valueToAdd || ''}
                    onChange={handleValueChange}
                    type='number'
                    className='p-1 m-3 bg-gray-50 border border-gray-300' />
                <Button>Add it!</Button>
            </form>
        </Panel>
    );
}

export default CounterPage;