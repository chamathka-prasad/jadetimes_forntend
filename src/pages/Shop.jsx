import { Link } from "react-router-dom";

import product1image1 from "../assets/shop/cover1.webp";

const products = [
  {
    id: 0,
    name: "Rising Brands 2024 by Jadetimes",
    price: "45.00",
    link: "/product/rising-brands-2024-by-jadetimes",
    image: product1image1,
    new: true,
  },
];

const Shop = () => {
  return (
    <section className="text-neutral-900 p-4">
      <h1 className="text-2xl text-center md:text-3xl lg:text-4xl">Shop</h1>
      <ul className="flex flex-col gap-5 mt-4 mb-2 items-center justify-center md:mt-5 lg:mt-6 md:grid md:grid-cols-3 max-w-[1000px] mx-auto lg:grid-cols-4">
        {products.map((product) => (
          <li key={product.id} className="relative max-w-80">
            {product.new && <div className="bg-[#FF322E] text-white w-fit px-2 uppercase text-lg font-semibold absolute top-0 left-0 z-10">New</div>}
            <Link to={product.link} className="block group">
              <div className="relative">
                <img src={product.image} alt={product.name} />
                <div className="text-sm bg-white/80 backdrop-blur-sm p-3 absolute bottom-0 w-full text-center translate-y-full -z-[1] lg:duration-300 lg:group-hover:translate-y-0 lg:group-hover:z-0 lg:group-focus-visible:translate-y-0 lg:group-focus-visible:z-0">
                  Quick View
                </div>
              </div>
              <div className="text-lg flex flex-col gap-2 pt-4 bg-white">
                <h2>{product.name}</h2>
                <div className="text-neutral-700">${product.price}</div>
              </div>
            </Link>
            <button className="bg-neutral-900 text-white p-3 w-full mt-3">Pre-Order</button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Shop;
