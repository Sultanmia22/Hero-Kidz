
"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import { FaStar, FaCheckCircle, FaMinus, FaPlus, FaShareAlt } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi2";
import { MdQuestionAnswer, MdOutlineInfo } from "react-icons/md";

const DetailsProducts = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  // ডিসকাউন্ট ক্যালকুলেশন
  const discountedPrice = Math.round(product.price - (product.price * product.discount) / 100);

  return (
    <section className="max-w-7xl mx-auto px-4 py-8 lg:py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 xl:gap-16">
        
        {/* --- বাম পাশ: ইমেজ সেকশন --- */}
        <div className="space-y-4">
          <div className="relative aspect-square w-full overflow-hidden rounded-[2rem] border-4 border-[var(--color-base-200)] bg-[var(--color-base-100)] shadow-sm">
            <Image
              src={product.image}
              alt={product.title}
              fill
              priority
              className="object-contain p-8 hover:scale-110 transition-transform duration-500"
            />
            {product.discount > 0 && (
              <div className="absolute top-6 left-6 bg-[var(--color-error)] text-white px-4 py-1.5 rounded-full font-bold text-sm shadow-lg animate-bounce">
                {product.discount}% ছাড়
              </div>
            )}
          </div>
        </div>

        {/* --- ডান পাশ: ইনফরমেশন সেকশন --- */}
        <div className="flex flex-col">
          {/* টাইটেল এবং রেটিং */}
          <div className="space-y-2">
            <h1 className="text-3xl lg:text-4xl font-black text-[var(--color-neutral)] leading-tight">
              {product.title}
            </h1>
            <p className="text-xl font-semibold text-gray-400 font-bengali">
              {product.bangla}
            </p>
            
            <div className="flex items-center gap-4 mt-4">
              <div className="flex items-center gap-1 text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full">
                <FaStar />
                <span className="font-bold text-[var(--color-neutral)]">{product.ratings}</span>
              </div>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-bold text-gray-500">{product.reviews} রিভিউ</span>
              <span className="text-gray-300">|</span>
              <span className="text-sm font-bold text-[var(--color-success)] bg-[var(--color-success)]/10 px-3 py-1 rounded-full">
                {product.sold} বিক্রি হয়েছে
              </span>
            </div>
          </div>

          <div className="my-8 h-[1px] bg-gradient-to-r from-[var(--color-base-300)] to-transparent" />

          {/* প্রাইস সেকশন */}
          <div className="flex items-center gap-4">
            <div className="flex flex-col">
              <span className="text-4xl font-black text-[var(--color-primary)]">
                ৳{discountedPrice}
              </span>
              {product.discount > 0 && (
                <span className="text-lg text-gray-400 line-through">৳{product.price}</span>
              )}
            </div>
            <div className="ml-auto">
                <button className="p-3 rounded-full bg-gray-100 hover:bg-[var(--color-primary)] hover:text-white transition-colors">
                    <FaShareAlt />
                </button>
            </div>
          </div>

          {/* কী হাইলাইটস (Info Array) */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {product.info.map((item, index) => (
              <div key={index} className="flex items-center gap-2 p-3 rounded-xl bg-[var(--color-base-200)] border border-[var(--color-base-300)]">
                <FaCheckCircle className="text-[var(--color-success)] shrink-0" />
                <span className="text-sm font-bold text-[var(--color-neutral)] leading-tight">{item}</span>
              </div>
            ))}
          </div>

          {/* কোয়ান্টিটি ও অ্যাড টু কার্ট */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <div className="flex items-center justify-between border-2 border-[var(--color-base-300)] rounded-2xl p-1 bg-[var(--color-base-100)] w-full sm:w-auto">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-4 hover:bg-[var(--color-base-200)] rounded-xl transition-all active:scale-90"><FaMinus className="text-xs" /></button>
              <span className="px-8 font-black text-xl">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-4 hover:bg-[var(--color-base-200)] rounded-xl transition-all active:scale-90"><FaPlus className="text-xs" /></button>
            </div>
            
            <button className="flex-1 flex items-center justify-center gap-3 bg-[var(--color-primary)] hover:bg-[var(--color-secondary)] text-white font-black py-5 rounded-2xl transition-all shadow-xl shadow-[var(--color-primary)]/30 active:scale-95 text-lg">
              <HiShoppingCart className="text-2xl" />
              কার্টে যোগ করুন
            </button>
          </div>
        </div>
      </div>

      {/* --- নিচের অংশ: বর্ণনা ও প্রশ্নোত্তর --- */}
      <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-12">
        
        {/* ডেসক্রিপশন বক্স */}
        <div className="lg:col-span-8 space-y-6">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-[var(--color-primary)]/10 rounded-lg">
                <MdOutlineInfo className="text-3xl text-[var(--color-primary)]" />
            </div>
            <h3 className="text-2xl font-black text-[var(--color-neutral)]">বিস্তারিত তথ্য</h3>
          </div>
          <div className="bg-white border border-[var(--color-base-300)] p-8 rounded-[2rem] shadow-sm leading-relaxed text-gray-600 whitespace-pre-line text-lg font-medium">
            {product.description}
          </div>
        </div>

        {/* প্রশ্নোত্তর বক্স */}
        <div className="lg:col-span-4 space-y-6">
          <div className="flex items-center gap-3">
             <div className="p-2 bg-[var(--color-accent)]/10 rounded-lg">
                <MdQuestionAnswer className="text-3xl text-[var(--color-accent)]" />
            </div>
            <h3 className="text-2xl font-black text-[var(--color-neutral)]">জিজ্ঞাসা</h3>
          </div>
          <div className="space-y-4">
            {product.qna.map((item, index) => (
              <div key={index} className="bg-[var(--color-base-200)] p-5 rounded-2xl border border-[var(--color-base-300)] space-y-2">
                <p className="font-black text-[var(--color-neutral)]">প্রশ্ন: {item.question}</p>
                <div className="h-[1px] bg-[var(--color-base-300)] w-full my-2"></div>
                <p className="text-gray-600 font-medium">উত্তর: {item.answer}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default DetailsProducts;