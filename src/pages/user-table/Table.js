import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import "./Table.css";

export default function UserTable() {
    const dispatch = useDispatch();
    const userData = useSelector(state => {
        return state.Users.users
    });

    const deleteUser =(userId)=>{
        // console.log(userId)
        const deleteUser = userData.filter(user => user.userId !== userId);

        console.log(deleteUser);
        dispatch({type: "DELETE_USER", payload: deleteUser})

    };

    // useEffect(()=>{
    //     console.log(userData)
    // },[userData]);

    return(
        <div className="Table w-100">
            <table className="table">
                <tbody>
                <tr>
                    <th scope="row">Name</th>
                    <th scope="row">lastName</th>
                    <th scope="row">Email</th>
                    <th scope="row">Age</th>
                </tr>
                {
                    userData.map(user=>{
                        // console.log(user)
                        return(
                            <tr key={user.userId === undefined ? 0 : user.userId}>
                                <td>{user.name}</td>
                                <td>{user.surName}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <img src={user.deleteUser} alt="" onClick={()=> deleteUser(user.userId)}/>
                            </tr>
                        )
                    })
                }
                </tbody>
            </table>
        </div>
    )
}