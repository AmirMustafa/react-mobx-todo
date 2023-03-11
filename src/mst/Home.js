import React from 'react';
import store from '../UserStoreMST';

function Home() {
    return (
        <div>
            <h1>{store.userName} - {store.userId}</h1>
        </div>
    );
}
export default Home;