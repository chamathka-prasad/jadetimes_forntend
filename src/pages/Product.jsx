import { useState, useEffect } from "react";
import { BsChevronDown, BsChevronUp, BsDashLg, BsPlusLg } from "react-icons/bs";
import { useParams } from "react-router-dom";

import useKey from "../hooks/useKey";

import products from "../routes/products";

import NotFound from "./NotFound";

const productInformations = [
  {
    title: "PRODUCT INFO",
    info: "Whether you're an entrepreneur, investor, or simply passionate about the world of business, Rising Brands 2024 is your essential guide to staying ahead in the ever-evolving business landscape. Join us in celebrating innovation, excellence, and the future of global brands.",
  },
  {
    title: "RETURN & REFUND POLICY",
    info: "We strive to ensure your satisfaction with Rising Brands 2024. If for any reason you are not completely happy with your purchase, you have 30 days from the date of purchase to return your item, provided it is unused, in its original condition, and in the original packaging. To initiate a return, contact our customer service team at info@jadetimes.com with your order number and reason for return. Once your return is received and inspected, we will notify you of the approval or rejection of your refund, which will be processed and applied to your original method of payment. For exchanges of defective or damaged items, please contact us at info@jadetimes.com.",
  },
  {
    title: "SHIPPING INFO",
    info: "At Rising Brands 2024, we aim to provide prompt and reliable shipping services to ensure your magazine reaches you in perfect condition. All orders are processed within 1-2 business days, with domestic delivery within 5-7 business days for standard shipping and 2-3 business days for express shipping. International orders may take 10-14 business days for standard shipping and 5-7 business days for express shipping. Shipping costs are calculated at checkout, and tracking information will be provided once your order has shipped. Please ensure your shipping address is correct, as we are not responsible for packages delivered to incorrect addresses. For any issues with damaged or lost packages, contact our customer service team at info@jadetimes.com.",
  },
];

const Product = () => {
  const param = useParams();
  const [product, setProduct] = useState();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentQuantity, setCurrentQuantity] = useState(1);
  const [key, handleKey] = useKey(0);

  useEffect(() => {
    const productItem = products.find((product) => product.id === param.product);

    if (productItem) {
      setProduct(productItem);
    } else {
      setProduct();
    }
  }, [param]);

  function handleCurrentIndex(index) {
    setCurrentIndex(index);
  }

  function handleCurrentQuantity(value, event) {
    if (value === "increment") {
      setCurrentQuantity((prevQuantity) => (prevQuantity === 9999 ? 9999 : prevQuantity + 1));
    }
    if (value === "decrement") {
      setCurrentQuantity((prevQuantity) => (prevQuantity === 1 ? 1 : prevQuantity - 1));
    }
    if (event) {
      const inputValue = Number(event.target.value);
      if (inputValue >= 1 && inputValue <= 9999) {
        setCurrentQuantity(inputValue);
      }
    }
  }

  if (!product) {
    return <NotFound />;
  }

  return (
    <>
      <section className="max-w-[1000px] min-[1000px]:mx-auto m-4 md:grid md:grid-cols-2">
        <div className="md:pr-6 md:border-r md:border-r-[#17171724]">
          <img src={product.images?.[currentIndex]} alt="" className="aspect-[9_/_12]" />
          <div className="flex flex-row gap-4 items-center justify-center my-4 md:mb-0">
            {product.images?.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 flex items-center justify-center rounded-full text-xs border border-neutral-900 focus:rounded-full ${index === currentIndex && "bg-black"}`}
                onClick={() => handleCurrentIndex(index)}
              ></button>
            ))}
          </div>
        </div>
        <div className="md:pl-6">
          <h1 className="text-3xl mb-2">{product.name}</h1>
          <div className="lg:text-sm">SKU: {product.sku}</div>
          <div className="flex flex-row items-center justify-between my-6">
            <div className="text-2xl text-neutral-700">${product.price}</div>
            <div className="flex flex-row items-center gap-4 border-2 border-[#17171724] text-lg relative w-36" aria-label="quantity">
              <button className={`p-2 bg-neutral-300 text-black z-10 ${currentQuantity === 1 && "opacity-50"}`} onClick={() => handleCurrentQuantity("decrement")} disabled={currentQuantity === 1}>
                <BsDashLg size={20} />
              </button>
              <input
                type="text"
                className="block w-full h-full text-center absolute px-12 focus:outline-black"
                value={currentQuantity}
                onChange={() => handleCurrentQuantity(null, event)}
                min="1"
                max="9999"
              />
              <button className="p-2 bg-neutral-300 text-black absolute right-0 z-10" onClick={() => handleCurrentQuantity("increment")}>
                <BsPlusLg size={20} />
              </button>
            </div>
          </div>
          <p className="lg:text-sm">Will contact you once you made the payment.</p>
          <button className="text-lg mt-2 mb-8 bg-neutral-900 text-white p-3 w-full md:p-2 md:text-base md:mb-5">Order Now</button>
          {productInformations.map((productInformation, index) => (
            <div key={index} className="border-b border-b-[#17171724] last:border-b-0">
              <button className="flex flex-row justify-between items-center gap-8 w-full py-4" onClick={() => handleKey(index)}>
                <div className="text-black text-left lg:text-base">{productInformation.title}</div>
                <div className="text-black">{key === index ? <BsChevronUp /> : <BsChevronDown />}</div>
              </button>
              <div className={`duration-300 grid ${key === index ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <div className="overflow-y-hidden" aria-hidden={key !== index}>
                  <p className="lg:text-sm mb-4 text-neutral-900">{productInformation.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-[1000px] min-[1000px]:mx-auto m-4 text-neutral-900 mt-8 text-lg lg:text-base">
        <p>
          Discover the future of business with <span className="italic">Rising Brands 2024</span>, the premier magazine dedicated to spotlighting the best upcoming brands from around the world. Dive
          into a treasure trove of insights, featuring:
        </p>
        <ul className="mt-4 list-decimal pl-5 flex flex-col gap-2">
          <li>
            <span className="font-medium">Top CEOs in Emerging Brands:</span> Get inspired by the visionary leaders driving the next generation of successful businesses.
          </li>
          <li>
            <span className="font-medium">Innovative Business Ideas:</span> Learn about groundbreaking concepts and strategies that are set to revolutionize various industries.
          </li>
          <li>
            <span className="font-medium">Brand Spotlights:</span> Detailed profiles of the most promising brands, exploring their journey, unique selling points, and market impact.
          </li>
          <li>
            <span className="font-medium">Expert Tips and Advice:</span> Gain valuable advice from industry experts on how to grow, manage, and sustain a successful brand.
          </li>
          <li>
            <span className="font-medium">Comprehensive Analysis:</span> In-depth articles and case studies offering a thorough understanding of market trends and consumer behavior.
          </li>
        </ul>
      </section>
    </>
  );
};

export default Product;
