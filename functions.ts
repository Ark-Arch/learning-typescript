function addNumbers(x: number, y: number): number {
    return x + y
}

function getUpper(val: string): string {
    return val.toUpperCase()
}

type signDetails = {
    name: string,
    email: string,
    password?: number|string
}

function signUpUser(name: string, email: string, password?: number|string): signDetails {
    return {name, email, password}
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {

}

export {loginUser}