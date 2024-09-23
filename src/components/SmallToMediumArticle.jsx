import React from "react";
import { Link } from "react-router-dom";
import MediumImage from "../assets/2.webp"

const SmallToMediumArticle = (props) => {
    return (
        <Link className={`border border-neutral-300 ${props.className}`}>
            <article className={props.articleClassName}>
                <picture className={props.pictureClassName}>
                <img src={MediumImage} alt="" className="h-full object-cover object-center" />
                </picture>
                <div className={`${props.divClassName} flex flex-col justify-between gap-3 max-w-sm`}>
                    <h3 className="line-clamp-2 xl:line-clamp-3">Sri Lanka holds its first election since the ousting of its president by mass protests</h3>
                    <p className="uppercase text-xs text-neutral-600 whitespace-nowrap">16 hours ago</p>
                </div>
            </article>
        </Link>
    )
}

export default SmallToMediumArticle;