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
            }
        }))
        .views((self) => ({
            get totalMarks() {
                return self.hindi + self.math;
            }
        }))

// Default initial value
const users = UserModel.create({
    userId: '007',
    userName: 'Happy Learnings',
    math: 100,
    hindi: 50
});

export default users;