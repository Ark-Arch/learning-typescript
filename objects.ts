const User = {
    name: 'david',
    email: 'david@lco.dev',
    isActive: true
}

type userType = {
    name: string,
    isPaid: string
}

function createUser({name: string, isPaid: boolean}) {

}

// function createUser(user: userType) {
//     return {user}
// }

function createCourse():{name:string, price:number}{
    return {name:"reactjs", price:399}
}

let newUser = {name: "hitesh", isPaid: false, email: "hitesh@h.com"}

createUser(newUser) // this is prone to errors! since createUser makes only two type definitions.


export {}