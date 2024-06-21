import App from "../../App";
import {x} from "../Alert"


interface Props {
  children: string,
  text:string,
}

const Button = ({ children,text }: Props) => {
  return (
    <>
      {x()}
      <button type="button" className={text} onClick={()=>console.log('Clicked')}>
        {text}
      </button>
    </>
  );
};
export default Button;
