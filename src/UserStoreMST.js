import { types,onSnapshot, flow, applySnapshot, getSnapshot } from 'mobx-state-tree';

const UserModel = types
        .model('User' , {
            userId: types.string,
            userName: types.string,
            math: types.number,
            hindi: types.number
        })
        .actions((self) => ({
            setMath(val) {
                self.math = +val;
            },
            setHindi(val) {
                self.hindi = +val;
            },
            afterCreate() {
                onSnapshot(self, (snapshot) => console.log('onSnapshot called ===> ', snapshot));
            }
        }))
        .views((self) => ({
            get totalMarks() {
                return self.hindi + self.math;
            },
            get percentage() {
                return `${((self.hindi + self.math)/200) * 100}%`
            }
        }))

// Default initial value
const users = UserModel.create({
    userId: '007',
    userName: 'Happy Learnings',
    math: 90,
    hindi: 80
});

export default users;