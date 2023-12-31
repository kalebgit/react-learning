

export default function Button({text, blue, ...props}){
    return <button type="button" className={`${blue ? "bg-blue-700 text-white" : "" } py-1 px-2 rounded-2xl`} {...props}>{text}</button>
}