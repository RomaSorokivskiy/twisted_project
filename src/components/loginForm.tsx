import {useState} from "react";

interface loginInterface {
    email:string,
    password:string
}
const LoginForm = () => {
    const [data,setData] = useState<loginInterface|undefined>(undefined);
    const [email,setEmail] = useState<string>("")
    const [password,setPassword] = useState<string>("")

    const handleSubmit = (e:any) => {
        e.preventDefault();
        setData({email: email, password: password})

    }
    return(
        <form>
            <input type="email" placeholder="Пошта: example@gmail.com" value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input type="password" placeholder="Пароль: ******" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <button onClick={(e) => handleSubmit(e)}>Зайти</button>
        </form>
    )
}
export default LoginForm;
