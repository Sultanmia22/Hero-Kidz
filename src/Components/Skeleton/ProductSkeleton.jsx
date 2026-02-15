const ProductSkeleton = () => {
  return (
    <div className="w-full max-w-[320px] rounded-3xl border border-gray-100 bg-white p-3 shadow-sm animate-pulse">
      
      {/* ইমেজ সেকশন (বড় বক্স) */}
      <div className="aspect-square w-full rounded-2xl bg-gray-200"></div>

      {/* কন্টেন্ট সেকশন */}
      <div className="mt-4 flex flex-col px-1">
        
        {/* টাইটেল (দুইটা লাইন) */}
        <div className="mb-2 h-5 w-3/4 rounded-lg bg-gray-200"></div>
        <div className="mb-3 h-4 w-1/2 rounded-lg bg-gray-200"></div>

        {/* রেটিং ও সোল্ড স্ট্যাটাস (ছোট ছোট বক্স) */}
        <div className="mb-4 flex items-center gap-2">
          <div className="h-4 w-10 rounded bg-gray-200"></div>
          <div className="h-1 w-1 rounded-full bg-gray-300"></div>
          <div className="h-4 w-14 rounded bg-gray-200"></div>
        </div>

        {/* প্রাইস সেকশন */}
        <div className="mb-5 flex items-baseline gap-2">
          <div className="h-7 w-20 rounded-lg bg-gray-200"></div>
          <div className="h-4 w-12 rounded-md bg-gray-100"></div>
        </div>

        {/* বাটন (ফুল উইডথ) */}
        <div className="h-12 w-full rounded-2xl bg-gray-200"></div>
      </div>
    </div>
  );
};

export default ProductSkeleton;