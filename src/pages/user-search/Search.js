import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";

export default function Search() {
    const [user, setUser] = useState([]);

    const userData = useSelector((state => state.Users.users));
    const searchData = useSelector((state) => state.Search.search);


    useEffect(()=>{
        for(let i = 0; i < userData.length; i++){
            let fullName = [userData[i].name.toLowerCase() + " " + userData[i].surName.toLowerCase()];
            if(userData[i].name.toLowerCase() === searchData ||
                userData[i].surName.toLowerCase() === searchData ||
                fullName[0] === searchData){
                setUser(userData[i])
            }

        }
    },[userData, searchData]);



    return(
        <div className="Search">

        </div>
    )
}