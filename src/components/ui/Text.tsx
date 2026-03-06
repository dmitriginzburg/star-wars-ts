interface Props {
    text: string;

}
const Text = ({text}:Props) => {
    const style=
        "text-3xl text-justify tracking-widest leading-normal"
    return (
       <p className={style}>
           {text}
       </p>
    )
}

export default Text;