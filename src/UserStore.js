import { action, computed, makeObservable, observable, autorun, runInAction } from 'mobx';

class UserStore {
    userInfo = {
        id: 'C117',
        name: 'code',
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
        return this.userInfo.subject.length;
    }

    logUserDetails = () => {
        console.log(`Subject length: ${this.totalSubject()}`);
    }

    updateUser = (name) => {
        return 'NA';
    }

    addSubject = (data) => {
        return 'NA';
    }



    prefetchData = () => {
        console.log('printing prefetchData...');
    }
}
export default UserStore;