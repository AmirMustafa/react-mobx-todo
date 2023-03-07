import React from 'react';
import { observer } from "mobx-react-lite"

function Home({ store }) {
    const changeUser = () => {
        store.updateUser("New data");
    }

    const addSubject = () => {
        store.addSubject('Aeronotics');
    }
    return (
        <div className="App">
            <h1>MobX Store</h1>
            <h1>{store.userInfo.name} - {store.userInfo.id}</h1>
            <button onClick={changeUser}>Update User</button>
            <button onClick={addSubject}>Add Subject</button>
            {
                store.userInfo.subject.map((key, index) => <p key={index}>{key}</p>)
            }
        </div>
    );
}

export default observer(Home);