type User = {
    readonly _id: string
    name: string;
    email: string;
    isActive: boolean,
    credcardDetails?: string
}

function createUser(user: User): User {
    return user
}

interface Human {
    name: string;
    age: number;
}

interface Child extends Human {
    height: string
}


let myUser:User = {
    _id: "1234",
    name: 'h',
    email: 'h@h.com',
    isActive: false
}

myUser.email = 'h@gmail.com'
// myUser._id = "asa"

interface cardNumber {
    cardnumber: string
}

interface cardDate {
    cardDate: string
}

interface cardDetails extends cardNumber, cardDate {
    cardType: string
}

export {}