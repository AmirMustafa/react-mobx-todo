import { observer } from "mobx-react-lite";
function About({ store }) {
    return (
        <div className="App">
            <h1>About - {store.userInfo.name}</h1>
        </div>
    );
}
export default observer(About);