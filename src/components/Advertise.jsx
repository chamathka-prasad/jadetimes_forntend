import React from "react";
import { Link } from "react-router-dom";

const Advertise = (props) => {
    return (
        <Link to={props.link} className={`${props.className}`} target="_blank">
            <img src={props.image} alt="" />
        </Link>
    )
}

export default Advertise;