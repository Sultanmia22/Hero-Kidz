import Image from 'next/image';
import Link from 'next/link';
import { FaStar } from "react-icons/fa6";
import { HiShoppingCart } from "react-icons/hi2";

const ProductCard = ({ product }) => {
  // ডিসকাউন্ট ক্যালকুলেশন
  const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);

  return (
    <div className="group flex flex-col w-full  rounded-3xl border border-[var(--color-base-300)] bg-[var(--color-base-100)] p-3 shadow-sm transition-all duration-300 hover:shadow-2xl hover:border-[var(--color-primary)]">
        
      {/* ইমেজ সেকশন */}
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-[var(--color-base-200)]">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover w-60 h-60 transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* ডিসকাউন্ট ব্যাজ */}
        {product.discount > 0 && (
          <span className="absolute top-3 left-3 rounded-full bg-[var(--color-error)] px-3 py-1 text-xs font-bold text-white shadow-lg">
            {product.discount}% OFF
          </span>
        )}
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="mt-4 flex flex-col px-1">
        
        {/* টাইটেল */}
        <h3 className="mb-1 line-clamp-2 min-h-[48px] text-lg font-bold text-[var(--color-neutral)] leading-tight group-hover:text-[var(--color-primary)] transition-colors">
          {product.title}
        </h3>

        {/* রেটিং ও সোল্ড স্ট্যাটাস */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-1 text-[var(--color-accent)]">
            <FaStar className="text-sm" />
            <span className="text-sm font-bold text-[var(--color-neutral)]">{product.ratings}</span>
          </div>
          <span className="h-1 w-1 rounded-full bg-gray-300"></span>
          <span className="text-xs font-medium text-gray-500 uppercase tracking-wider">
            {product.sold} Sold
          </span>
        </div>

        {/* প্রাইস সেকশন */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex flex-col">
            <span className="text-2xl font-black text-[var(--color-primary)]">
              ৳{discountedPrice}
            </span>
            {product.discount > 0 && (
              <span className="text-sm font-medium text-gray-400 line-through">
                ৳{product.price}
              </span>
            )}
          </div>
        </div>

        {/* অ্যাড টু কার্ট বাটন */}
       <div className='flex flex-col gap-3'>
         <button className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl bg-secondary py-3 font-bold text-white transition-all hover:bg-[var(--color-secondary)] active:scale-95 shadow-md shadow-primary/20">
          <HiShoppingCart className="text-xl transition-transform group-hover/btn:-translate-y-1" />
          Add to Cart
        </button>

        <Link href={`/products/${product._id}`} className="group/btn flex w-full items-center justify-center gap-2 rounded-2xl border border-secondary text-secondary py-3 font-bold  hover:text-white transition-all hover:bg-secondary active:scale-95 shadow-md shadow-primary/20">
          
          View Details
        </Link>
       </div>
      </div>
    </div>
  );
};

export default ProductCard;