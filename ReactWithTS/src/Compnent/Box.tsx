// if it was a normal functiom then use
// we can use heading :string
// but here we are destructing so we use this way 
// const Box = ({ heading }: { heading: string }) => {
//     return (
//         <div>
//             <h1>{heading}</h1>
//         </div>
//     )
// }

// 2nd way

type PropsType = {
    heading: string,
    count?: number;
    fun: (n: string) => void;
    children: React.ReactNode
}

// const Box = (props: PropsType) => {
//     return (
//         <div>
//             <h1>{props.heading}</h1>
//         </div>
//     )
// }

// or

const Box = ({ heading, count, fun, children }: PropsType) => {

    fun("hello")
    return (
        <div>
            <h1>{heading}</h1>
            <h1>{count}</h1>
            {children}
        </div>
    )
}


export default Box