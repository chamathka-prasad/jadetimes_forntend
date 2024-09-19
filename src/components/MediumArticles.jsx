import React from "react";
import { Link } from "react-router-dom";

const MediumArticle = (props) => {
    return (
        <Link className="border border-neutral-300 block">
            <article className="flex flex-col justify-between">
                <picture className={props.pictureClassName}>
                    <img src="https://placehold.co/228x128.png" alt="" />
                </picture>
                <div className="flex flex-col justify-between gap-3 max-w-sm p-4">
                    <h3 className="line-clamp-2">The U.S. conflict with China is a conflict with the entire world</h3>
                    <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">16 hours ago</p>
                </div>
            </article>
        </Link>
    )
}

export default MediumArticle;