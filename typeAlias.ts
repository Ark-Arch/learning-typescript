type User = {
    name: string;
    email: string;
    isActive: boolean
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