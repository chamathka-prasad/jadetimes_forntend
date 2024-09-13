import React from "react";
import { Link } from "react-router-dom";

const SmallArticle = (props) => {
    return (
        <Link className={`border border-neutral-300 block ${props.className}`}>
            <article className="flex flex-row p-4 gap-4 justify-between">
                <div className="flex flex-col justify-between gap-3 max-w-sm">
                    <h3 className="line-clamp-2 xl:line-clamp-3">The U.S. conflict with China is a conflict with the entire world</h3>
                    <p className="uppercase text-xs text-neutral-600">16 hours ago</p>
                </div>
                <picture className="min-w-20 max-w-20">
                    <img src="https://placehold.co/68x68.png" alt="" className="h-full" />
                </picture>
            </article>
        </Link>
    )
}

export default SmallArticle;