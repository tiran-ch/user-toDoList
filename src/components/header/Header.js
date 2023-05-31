import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router";

export default function Header() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const userData = useSelector((state => state.Users.users));

    const fullName =(e)=>{
        e.preventDefault();

        dispatch({type: "SEARCH_USER", payload: `${e.target[0].value}`});

        if (userData.length !== 0){
            let objName = userData.find(data => data.name.includes(e.target[0].value));
            let objSurName = userData.find(data => data.surName.includes(e.target[0].value));

            if(objName !== undefined){
                navigate(`/search/${objName.userId}`)
                // window.open(`/search/${objName.userId}`, '_blank');
            }else {
                navigate(`/search/${objSurName.userId}`)
                // window.open(`/search/${objSurName.userId}`, '_blank');

            }
        }
    };


    return(
            <nav className="navbar navbar-expand-lg  navbar-light text-bg-info p-2 w-75 m-auto">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse"
                        data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                               data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown
                            </a>
                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                <a className="dropdown-item" href="#">Action</a>
                                <a className="dropdown-item" href="#">Another action</a>
                                <div className="dropdown-divider"></div>
                                <a className="dropdown-item" href="#">Something else here</a>
                            </div>
                        </li>
                        <li className="nav-itemt">
                            <a className="nav-link disabled" href="#">Disabled</a>
                        </li>
                    </ul>
                    <form className="form-inline my-2 my-lg-0" onSubmit={(e)=> fullName(e)}>
                        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
    )
}