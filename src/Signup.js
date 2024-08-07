import { useState } from "react";
import { useHistory } from "react-router-dom";

const Signup = () => {
    const [name,setName] = useState('');
    const [pwd,setPwd] = useState('');
    const [username,setUsername] = useState('');
    const history = useHistory();

    const handleSubmit = async () =>{
        const details = {name,pwd,username};
        fetch('http://localhost:8001/users',{
            method: 'POST',
            headers: {"Content-Type":"application/json"},
            body:JSON.stringify(details)
        }).then(()=>{
            console.log("new user added");
            history.push('/')
        })
    };

    return ( 
        <div className="signup">
            <h2>SIGN UP</h2>
            <div className="sign-label">
                <div className="sign-grp">
                    <label htmlFor="name">NAME:</label>
                    <input type="text" id="name" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                <div className="sign-grp">
                    <label htmlFor="username">USERNAME:</label>
                    <input type="text" id="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
                </div>
                <div className="sign-grp">
                    <label htmlFor="pwd">PASSWORD:</label>
                    <input type="password" id="pwd" value={pwd} onChange={(e)=>setPwd(e.target.value)}/>
                </div>
                <button onClick={(handleSubmit)}>Save</button>
            </div>
            
        </div>
     );
}
 
export default Signup;