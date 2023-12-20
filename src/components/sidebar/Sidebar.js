import React from 'react';
import "./Sidebar.css";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

const Sidebar = () => {
    const {list} = useSelector(({categories}) => categories);

    return (
        <div className="sidebar">
            <div className="title">Categories</div>
            <nav>
                <ul className="menu">
                    {list.map(({id,name})=>(
                        <li key = {id}>
                            <NavLink to={`/categories/${id}`}>{name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;