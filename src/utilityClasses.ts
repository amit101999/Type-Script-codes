// partical <type>

type User = {
    name: string,
    age: number
}

type MyUser = Partial<User>
//  it will make User properties optional so now we dont have to use ? operator

// will make all field required
type ReUser = Required<User>


//  Pick <type , key>
interface OrderInfo {
    readonly id: string
    user: string
    city: string
    state: string
}

// now  this will have only city and user 
type Myuser = Pick<OrderInfo, "city" | "user">
// Omit<type , key> is opposite if Pick

type MyPer = Exclude<string | number | boolean, number>
//  MyPer will exclude number type
// Exract opposite of  Exclude

const myFun = (a: number, b: string) => {
    return 1
}
// will give the parameter of myFun
type Random = Parameters<typeof myFun>