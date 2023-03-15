import React from 'react';
import { observer } from 'mobx-react-lite';
import store from '../UserStoreMST';

function Home() {
    const updateMathMarks = () => {
        store.setMath(100);
    };
    return (
        <div>
            <h1>{store.userName} - {store.userId}</h1>
            <h2>Math marks: {store.math}</h2>
            <h2>Hindi marks: {store.hindi}</h2>
            <h2>Total marks: {store.totalMarks}</h2>
            <h2>Percetage: {store.percentage}</h2>
            <button onClick={updateMathMarks}>Update Math</button>
        </div>
    );
}
export default observer(Home);