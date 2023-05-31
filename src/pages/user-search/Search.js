import React, {useEffect, useState} from "react";
import { useParams } from 'react-router-dom';

import "./Search.css";
import {useSelector} from "react-redux";

export default function Search() {
    const userData = useSelector((state => state.Users.users));
    const params = useParams();
    const [user, setUser] = useState("");

    const data = userData.filter(data=> data.userId === params.id);
    console.log(data);


    return(
        <div className="search">
            <div className="header_search">
                {
                    userData.map(data=>(
                        <div className="user-data" key={data.userId}>
                            <p>Name: {data.name}</p>
                            <p>surName: {data.surName}</p>
                            <p>Email: {data.email}</p>
                            <p>Age: {data.age}</p>
                        </div>
                    ))


                }
            </div>
        </div>
    )
}