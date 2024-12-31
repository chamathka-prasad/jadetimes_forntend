import { useParams, Link } from "react-router-dom";

import CopyLinkButton from "../components/CopyLinkButton";

const Post = () => {
  const { post } = useParams();
  return (
    <article className="p-4 max-w-[900px] mx-auto">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-full overflow-hidden bg-neutral-300 lg:w-10 lg:h-10"></div>
          <div className="flex flex-col gap-1 lg:text-sm">
            <div>Author name</div>
            <div>Posted time</div>
          </div>
        </div>
        <CopyLinkButton position="left" />
      </div>
      <h1 className="text-3xl font-medium mb-4 lg:text-4xl font-serif text-neutral-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, perspiciatis!</h1>
      <div>
        <div className="mb-1 lg:text-sm">
          Jadetimes Staff - <span className="font-medium">Author name</span>
        </div>
        <div className="text-sm mb-4 lg:text-xs">Author name is a Jadetimes news reporter covering Political News.</div>
      </div>
      <div className="border-y border-y-neutral-300 py-4 mb-4">
        <div className="w-full aspect-video bg-neutral-300 object-cover object-center"></div>
        <div className="text-center mt-3 mb-4 lg:text-sm">Image source: source</div>
        <div className="flex flex-col gap-4 text-lg lg:text-base">
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
      <div className="flex items-center justify-between">
        <Link className="lg:text-sm">Category</Link>
      </div>
    </article>
  );
};

export default Post;
