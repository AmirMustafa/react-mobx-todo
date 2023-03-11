import React from 'react';
import store from '../UserStoreMST';

function Home() {
    return (
        <div>
            <h1>{store.userName} - {store.userId}</h1>
            <h2>Math marks: {store.math}</h2>
            <h2>Hindi marks: {store.hindi}</h2>
            <h2>Total marks: {store.totalMarks}</h2>
            {/* <button onClick={}>Update Hindi</button> */}
        </div>
    );
}
export default Home;