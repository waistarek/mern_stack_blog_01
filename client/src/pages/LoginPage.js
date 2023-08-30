export default function LoginPage(){

   async function login(ev){
        ev.preventDefault();
        await fetch("http://localhost:4000/login",{
            method: "post",
            body: JSON.stringify({username,password}),
            headers: {"Content-Type" : "application/json"}

        });

    }
    return(
        <form className="login" onSubmit={login}>
            <h1>Login</h1>
            <input type="text" 
            placeholder="username" 
            value={username}
            onChange={ev => setUsername(ev.target.value)}/>
            <input type="text" 
            placeholder="password"
            value={password}
            onChange={ev => setPassword(ev.target.value)}/>
            <button>Login</button>
        </form>
    );
}