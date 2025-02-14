import { useEffect, useState } from "react";

const UseFetch = (url) => {
    const [data,setData] = useState(null);

    useEffect(()=>{
        fetch(url)
        .then(
            res=>{
                return res.json();
            }
        )
        .then((data)=>{
            setData(data);
        })
    })
    return {data};
}
 
export default UseFetch;