import React from 'react';
import {useOvermind} from './States'

const OvermindCounter = () => {
    const {state, actions} = useOvermind();

    return (
        <div>
            <h3>{state.counter}</h3>
            <button onClick={() => {
                actions.increase(1)
            }}>+
            </button>
            <button onClick={() => {
                actions.decrease(1)
            }}>-
            </button>
        </div>
    );
};

export default OvermindCounter;
