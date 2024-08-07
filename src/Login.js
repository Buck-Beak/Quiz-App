import { useState } from "react";
import UseFetch from "./UseFetch";
import { useHistory } from "react-router-dom";

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');
    const {data:details} = UseFetch("http://localhost:8001/users");
    const history = useHistory();
    const handleSubmit = () =>{
        if(details){
            const user = details.find(user => user.username === username && user.pwd === password);
            if(user){
                console.log("login successfull");
                history.push('/home');
            }
            else{
                console.log("login unsuccessfull");
            }
        }
    }
    return ( 
        <div className="login">
            <h1>Welcome to Trivia Nation!</h1>
            <div className="input-label">
                <div className="input-grp">
                    <label htmlFor="username">USERNAME</label>
                    <input type="text" id="username" name="user-name" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="input-grp">
                    <label htmlFor="password">PASSWORD</label>
                    <input type="password" id="password" name="pass-word" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </div>
                <button onClick={(handleSubmit)}>Login</button>
                <h2>Don't have an account?</h2>
                <a href="/signup">Signup</a>
            </div>
            
        </div>
     );
}
 
export default Login;