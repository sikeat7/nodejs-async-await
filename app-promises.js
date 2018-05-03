const users = [{
    id: 1,
    name: 'Sikeat',
    schoolId: 101
},{
    id: 2,
    name: 'Jessica',
    schoolId: 999
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
},{
    id: 2,
    schoolId: 999,
    grade: 100
},{
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);

        if (user){
            resolve(user);
        }else {
            reject(`Unable to find the user with id ${id}.`);
        }
    });
};

const getGrades = () => {

};

getUser(1).then((user) => {
    console.log(user);
}).catch((err) => {
    console.log(err);
})