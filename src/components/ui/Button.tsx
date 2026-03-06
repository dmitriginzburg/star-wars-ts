interface Props  {
    text: string,
    onClick?: () => void,
    variant: "nav" | "footer"
}
const Button = ({text, onClick,variant}:Props) => {
    const baseStyle=
        "bg-danger rounded-md px-3 border cursor-pointer hover:bg-red-500 hover:text-white"
    const footerStyle="text-center col-start-3"

    return (
        <div onClick={onClick}
        className={`${baseStyle} ${variant === "footer" ? footerStyle:""}`}>
            {text}
        </div>
    )
}

export default Button;