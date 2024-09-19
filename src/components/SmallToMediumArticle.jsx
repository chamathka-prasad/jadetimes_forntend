import React from "react";
import { Link } from "react-router-dom";

const SmallToMediumArticle = (props) => {
    return (
        <Link className={`border border-neutral-300 ${props.className}`}>
            <article className={props.articleClassName}>
                <picture className={props.pictureClassName}>
                    <source media="(max-width:1023px)" srcSet="https://placehold.co/68x68" />
                    <img src="https://placehold.co/228x128.png" alt="" />
                </picture>
                <div className={`${props.divClassName} flex flex-col justify-between gap-3 max-w-sm`}>
                    <h3 className="line-clamp-2 xl:line-clamp-3">The U.S. conflict with China is a conflict with the entire world</h3>
                    <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">16 hours ago</p>
                </div>
            </article>
        </Link>
    )
}

export default SmallToMediumArticle;