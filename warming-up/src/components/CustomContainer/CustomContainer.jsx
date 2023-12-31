export default function CustomContainer({children, ...props}){
    return <h1 className=" text-xl text-red-700 font-bold" {...props}>{children}</h1>
}