import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

class UserStore {
    userInfo = {
        id: '113',
        name: 'Happy Learnings',
        subject: ['English', 'CS', 'Maths']
    }

    constructor() {
        makeObservable(this, {
            userInfo: observable,
            totalSubject: computed,
            updateUser: action,
            addSubject: action
        });
        autorun(this.logUserDetails);
        runInAction(this.prefetchData);
    }

    get totalSubject() {
        console.log(`getter`);
        return this.userInfo.subject.length;
    }

    logUserDetails = () => {
        console.log(`Subject length: ${this.totalSubject}, Name: ${this.userInfo.name}`);
    }

    updateUser = (name) => {
        this.userInfo.name = name;
    }

    addSubject = (data) => {
        this.userInfo.subject.push(data);
    }

    prefetchData = () => {
        console.log('run in action...');
    }
}
export default UserStore;