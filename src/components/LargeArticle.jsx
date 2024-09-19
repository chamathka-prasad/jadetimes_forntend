import React from "react";
import { Link } from "react-router-dom";

const LargeArticle = () => {
    return (
        <Link className="block border-b border-b-neutral-300 sm:border sm:border-neutral-300 sm:col-span-2 lg:col-span-7 lg:row-start-1 lg:row-end-4 xl:col-start-1 xl:col-end-8 xl:row-start-2 xl:row-end-5">
            <article className="sm:grid sm:grid-cols-2 lg:h-full">
                <picture>
                    <img src="https://placehold.co/486x372" alt="" className="h-full" />
                </picture>
                <p className="text-white uppercase text-sm font-medium text-center absolute left-0 right-0 -translate-y-4 sm:hidden" aria-hidden="true"><span className="bg-neutral-950 inline-block px-2 py-1 border border-neutral-300">Latest Updates</span></p>
                <div className="py-6 px-4 flex flex-col justify-between gap-2 lg:p-6 sm:justify-center">
                    <h3 className="text-2xl">What is the outcome of U.S. National Security Advisor Jacob Sullivan's visit to China?</h3>
                    <p className="uppercase text-xs text-neutral-600">16 hours ago</p>
                </div>
            </article>
        </Link>
    )
}

export default LargeArticle;