import Image from "next/image";
import React from "react";
import { FaRegComment, FaRegHeart, FaRetweet } from "react-icons/fa6";
import { FiUpload } from "react-icons/fi";

const FeedCard = () => {
  return (
    <div className="grid grid-cols-12 gap-4 px-5 py-3 border-t border-slate-800 hover:bg-slate-900">
      <div className="col-span-1">
        <Image
          className="rounded-full"
          src="https://yt3.ggpht.com/yti/ANjgQV8ZcRzQcwosDogwK9rPpKl_StQLgHdk35GDAdS6P5Ho7P8=s88-c-k-c0x00ffffff-no-rj"
          width={50}
          height={50}
          alt="image"
        ></Image>
      </div>
      <div className="text-left col-span-11">
        <h2 className="  font-medium">Dipongkor Roy</h2>
        <p className="text-sm mt-2">
          🌐 5 Free Learning Sites! 🚀 Last 40 days of 2023 – make them count!
          🌐 Go online 📚 Study anything Write online 💸 Make money 😃 Live
          happily. Whats your goal for the final stretch? Share below!
          👇#FinishStrong #LearnOnline #MakeItCount #CareerGrowth #Goals2023
          #FreeLearning
        </p>
        {/* icons */}
        <div className="mt-3 mb-1 flex justify-between items-center pr-12">
          {/* one */}
          <div className=" cursor-pointer">
          <FaRegComment />
          </div>
          {/* two */}
          <div className=" cursor-pointer">
          <FaRetweet />
          </div>
          {/* three */}
          <div className=" cursor-pointer">
          <FaRegHeart />
          </div>
          {/* four */}
          <div className=" cursor-pointer">
          <FiUpload />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeedCard;
