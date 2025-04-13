import { useEffect, useState } from "react";

export default function Card(){

const [username,setUsername] = useState("");
const [userData,setUserData] = useState(null);
const [Loading,setLoading] = useState(false);
const [error,setError] = useState("");

const handleSearch= async () =>{
    if(!username) return;
        setLoading(true);
        setError("");
        setUserData(null);
        try{
            const response =await fetch(`https://jsonplaceholder.typicode.com/users/?username=${username}`);
            if(!response.ok) throw new Error("User not found");
            
            const data = await response.json();
            setUserData(data);
        }catch(erro){
            setError(erro.message);
        }finally{
            setLoading(false);
        }
        
        
    };
    

    
    return(
        <>
      
<div className="search">
    <div className="search-button">

        <input type="search" placeholder="Search..." value={username} onChange={(e)=> setUsername(e.target.value)} name="search" id="search"/>
    </div>
        <button onClick={handleSearch}>Search</button>
</div>
        
<div className="main-card">
{
    Loading && <p>Loading...</p>
}
{
    error && <p>{error}</p>
}
<div className="main-card">
{
        userData && (
            JSON.stringify(userData)
        )
}
</div>
</div>

</>

    );
}
