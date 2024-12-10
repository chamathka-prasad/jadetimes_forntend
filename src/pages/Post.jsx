import React from "react";
import { useParams, Link } from "react-router-dom";

const Post = () => {
  const { post } = useParams();
  return (
    <article className="col-span-2 lg:col-start-2">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3 text-xs">
          <div className="w-9 h-9 rounded-full overflow-hidden bg-neutral-300"></div>
          <div className="flex flex-col gap-1">
            <div>Author name</div>
            <div>Posted time</div>
          </div>
        </div>
        <button className="text-xs">Share</button>
      </div>
      <h1 className="text-2xl font-medium mb-4 lg:text-3xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perspiciatis!</h1>
      <div>
        <div className="text-sm mb-1">
          Jadetimes Staff - <span className="font-medium">Author name</span>
        </div>
        <div className="text-xs mb-4">Author name is a Jadetimes news reporter covering Political News.</div>
      </div>
      <div className="border-y border-y-neutral-300 py-4 mb-4">
        <div className="w-full aspect-video bg-neutral-300 object-cover object-center"></div>
        <div className="text-center mt-3 mb-4 text-sm">Image source: source</div>
        <div className="flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed maiores distinctio! Optio, aperiam? Quam illum sapiente, ipsum temporibus impedit sit voluptatem laudantium
            exercitationem saepe deleniti quos ex tempora. Libero? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium laboriosam ab aut impedit eaque aliquam quos deleniti libero
            nostrum ipsa, fuga autem suscipit, possimus dolorum placeat esse repudiandae numquam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia sed maiores distinctio! Optio, aperiam? Quam illum sapiente, ipsum temporibus impedit sit voluptatem laudantium
            exercitationem saepe deleniti quos ex tempora. Libero? Lorem ipsum dolor sit amet consectetur.
          </p>
        </div>
      </div>
      <div className="text-sm flex items-center justify-between">
        <button>Share</button>
        <Link>Category</Link>
      </div>
    </article>
  );
};

export default Post;
