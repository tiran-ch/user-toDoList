import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import UserTable from "../user-table/Table";


export default function UserForm() {
    const dispatch = useDispatch();
    const [userId, setUserId] = useState(1);

    const userForm = (e) => {
        e.preventDefault();
        setUserId(userId + 1);

       let data = {
            name: e.target[0].value,
            surName: e.target[1].value,
            email: e.target[2].value,
            age: e.target[3].value,
            userId: userId,
            deleteUser: "https://t4.ftcdn.net/jpg/03/46/38/39/360_F_346383913_JQecl2DhpHy2YakDz1t3h0Tk3Ov8hikq.jpg"
       };
        dispatch({type: "ADD_USER", payload: data});

        e.target[0].value = "";
        e.target[1].value = "";
        e.target[2].value = "";
        e.target[3].value = "";

    };

    return (
        <div className="to_do_list">
            <form className="w-50 m-auto mt-4" onSubmit={(e) => userForm(e)}>
                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example1" className="form-control" required/>
                            <label className="form-label" htmlFor="form3Example1">First name</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="text" id="form3Example2" className="form-control" required/>
                            <label className="form-label" htmlFor="form3Example2">Last name</label>
                        </div>
                    </div>
                </div>

                <div className="row mb-4">
                    <div className="col">
                        <div className="form-outline">
                            <input type="email" id="form3Example3" className="form-control" required/>
                            <label className="form-label" htmlFor="form3Example3">Email</label>
                        </div>
                    </div>
                    <div className="col">
                        <div className="form-outline">
                            <input type="number" id="form3Example4" className="form-control" required/>
                            <label className="form-label" htmlFor="form3Example4">Age</label>
                        </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary btn-block mb-4">add data</button>

                <UserTable/>
            </form>
        </div>
    )
}