import React from "react";

const H1 = (props) => {
    return (
        <h1 className={`${props.className}`}><span className="text-lg font-semibold pr-2">{props.heading}</span><span className="pl-2">{props.subheading}</span></h1>
    )
}

export default H1;