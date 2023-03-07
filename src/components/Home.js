import React from 'react';
import { observer } from "mobx-react-lite"

function Home({ store }) {
    const changeUser = () => {
        store.updateUser("New data");
    }
    return (
        <div className="App">
            <h1>MobX Store</h1>
            <h1>{store.userInfo.name} - {store.userInfo.id}</h1>
            <button onClick={changeUser}>Update User</button>
        </div>
    );
}

export default observer(Home);