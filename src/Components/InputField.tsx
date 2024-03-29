import { useRef } from 'react';
import './styles.css'
interface Props{
    todo:string;
    setTodo:React.Dispatch<React.SetStateAction<string>>
    handleAdd: (e:React.FormEvent) => void;
}
const InputField:React.FC<Props> = ({todo, setTodo, handleAdd}) => {
    const inputRef = useRef<HTMLInputElement>(null)
    return ( 
        <form className="input" onSubmit={(e) => {
            handleAdd(e)
            inputRef.current?.blur();
            }}>
            <input type="input" 
            ref ={inputRef}
             placeholder="Enter a new task"
              className="input__Box" 
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              />
            <button className="input__btn">Go</button>
        </form>
     );
}
 
export default InputField;