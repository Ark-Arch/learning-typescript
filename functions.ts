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


function getValue(myVal: number): boolean|string{
    if (myVal > 5) {
        return true
    } else {
        return "200 OK"
    }
}

const heros = ["thor", "spiderman", "ironman"]
heros.map((e):string => {
    return e.toUpperCase()
})

function consoleError(errmsg: string): void{
    console.log(errmsg)
}

function handleError(errmsg: string): never{
    throw new Error(errmsg) // this would throw an errow, but would not read the value
}




export {loginUser}