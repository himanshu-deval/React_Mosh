interface Props {
  children: string,
  text:string,
}

const Button = ({ children,text }: Props) => {
  return (
    <>
      <button type="button" className={text} onClick={()=>}>
        {children}
      </button>
    </>
  );
};
export default Button;
