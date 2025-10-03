"use client";
import React, { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import { TbCurrencyTaka } from "react-icons/tb";
import { FaMinus } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
// import freeDelivery from "@/image/free_delivery.svg";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoMdShare } from "react-icons/io";
import { HiOutlineCash } from "react-icons/hi";
import { TbTruckDelivery } from "react-icons/tb";
import { TbTruckReturn } from "react-icons/tb";
import { FaShield } from "react-icons/fa6";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
// import ProductContainer from "./ProductContainer";
// import ProductCard from "./ProductCard";
// import Review from "./Review";
// import ProductDetailHeadding from "./ProductDetailHeadding";
// import LoadingSpinner from "../LoadingSpinner";
// import { adminArray } from "@/constant/data";
// import p1 from "@/inm/p1.webp"
import p1 from "@/inm/p1.jpg";
import { FaSquareWhatsapp } from "react-icons/fa6";
import { FaFacebookMessenger } from "react-icons/fa6";
import Container from "./Container";
import FAQ from "./Faq";
function ProductDetails({ params }) {
  const [count, setCount] = useState(1);
  const [product, setProduct] = useState({});
  const [similarProduct, setSimilarProduct] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartLodder, setCartLodder] = useState(false);
  const [isClient, setIsClient] = useState(false);

  // access token

  const arr = [
    "🔥দাম মাত্র ৬৯৯ টাকা",
    "🚚ডেলিভারি চার্জ একদম ফ্রি",
    "💊৩০ পিস ট্যাবলেট (এক মাসের পূর্ণ কোর্স)",
    "🆓সাথে ১ কৌটা ক্যালসিয়াম ফ্রি",
  ];
  // minus count
  const minusCount = () => {
    if (count <= 1) return;
    setCount(count - 1);
  };
  // plus count
  const plusCounter = () => {
    setCount(count + 1);
  };

  // handle share
  const handelShare = () => {
    navigator.clipboard.writeText(location.href);
    toast.success("Coppy to clipboard");
  };
  // wp btn handel
  const WphandelBtn = () => {
    window.open("https://wa.me/8801886362484");
  };
  // messanger btn handel
  const messhandelBtn = () => {
    window.open("https://m.me/id=61579149196874");
  };

  // order component
  const Oeder = () => {
    return (
      <div>
        <div className="my-5 border border-gray-400 rounded-lg text-black">
          <p className="capitalize bg-gray-200 rounded-t-lg ps-2 py-2 text-xl font-[500] m">
            অর্ডার করতে নাম ঠিকানা লিখুন
          </p>
          <div className=" ">
            <form action="">
              <input
                type="text"
                className=" border border-gray-400 rounded-md w-full my-1 p-1 capitalize"
                placeholder="নাম "
              />
              <input
                type="text"
                className=" border border-gray-400 rounded-md w-full my-1 p-1"
                placeholder="মোবাইল "
              />
              <textarea
                name="address"
                id="address"
                className=" border border-gray-400 rounded-md w-full min-h-24 h-auto p-1 my-2"
                placeholder="জেলা,থানা এবং যেখান থেকে রিসিভ করবেন তা লিখুন"
              ></textarea>
              <div className=" bg-green-600 text-white text-center py-2">
                <p>মোট {699 * count} টাকা</p>
              </div>

              <div className="flex items-center justify-center gap-4 my-2">
                <button
                  onClick={minusCount}
                  className={`${
                    count > 1
                      ? "bg-gray-300 border-gray-500  text-black"
                      : "bg-gray-200 border-gray-300 text-gray-400 cursor-not-allowed disabled:"
                  } text-lg p-[5px] rounded-md border-2`}
                >
                  <FaMinus />
                </button>
                <span className="text-lg"> {count} প্যাকেজ </span>

                <button
                  onClick={plusCounter}
                  className={` bg-gray-300 border-gray-500  text-black
                text-lg p-[5px] rounded-md border-2`}
                >
                  <FaPlus />
                </button>
              </div>
            </form>
          </div>
          {/* button */}
          <div className="flex gap-1">
            {/* call to action button */}
            <button
              className={
                "bg-sky-500 hover:bg-sky-600 text-white capitalize h-10  flex-1 text-lg"
              }
            >
              অর্ডার করুন
            </button>
            {/* whatsapp btn */}
            <button
              onClick={WphandelBtn}
              className="bg-green-500 hover:bg-green-600 text-white capitalize h-10  w-1/5 text-xl flex items-center justify-center rounded"
            >
              <FaSquareWhatsapp />
            </button>
            {/* massenger btn */}
            <button
              onClick={messhandelBtn}
              className="bg-blue-500 hover:bg-green-600 text-white capitalize h-10  w-1/5 text-xl flex items-center justify-center rounded"
            >
              <FaFacebookMessenger />
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="">
      {/* product info */}
      <div className="max-w-[450px] md:max-w-[650px] lg:max-w-screen-lg mx-auto mb-10 xl:max-w-screen-xl px-2 xl:px-14">
        <div className="bg-red-600 text-white text-center py-2">
          <h3> যৌ*ন দুর্বলতা</h3>
        </div>
        {/*--------product image & price */}
        <div className="flex flex-col lg:flex-row items-center min-h-[390px] gap-x-5 gap-y-10 w-full  border-[4px] border-gray-400 rounded-md p-2 shadow-lg shadow-gray-600 ">
          {/*---------left side product image*/}
          <div className="w-full lg:w-[30%] relative flex justify-center items-center border rounded-md shadow-lg">
            <Link href={"lifer-bd.vercel.app"} target="_blank">
              <Image
                src={p1}
                height={1000}
                width={1000}
                alt="product image"
                className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
              />
            </Link>
          </div>
          <div className="">
            {arr.map((i, index) => (
              <p key={index}>{i}</p>
            ))}
          </div>
          {/*--------center product detaisl */}
          <div className="lg:flex-1 mx-0 ">
            {/* title */}
            <p className="text-[15px] capitalize my-2">
              দীর্ঘ সময় মিলনের একমাত্র আস্থা
            </p>
            <hr />
            {/* brnad */}
            <p className="capitalize text-md mt-3">
              কম্পানি : অরিয়েন্টাল ল্যাবরেটরি লিঃ
            </p>
            {/* like && share */}
            <div className=" flex gap-2">
              <span className="items-center flex"></span>
              <button onClick={handelShare} className="text-3xl cursor-pointer">
                <IoMdShare />
              </button>
            </div>
            {/* price and off */}
            <div className=" flex gap-2 mt-5">
              <div className="flex items-center justify-center">
                <span className="text-3xl ">
                  <TbCurrencyTaka />
                </span>
                <span className="text-xl">৬৯৯</span>
              </div>
              <del className="text-lg text-gray-600 mt-2">৮৭০</del>
              {/* off */}
              <div className="relative">
                <div className="font-semibold bg-yellow-400 absolute top-0 px-2 py-1 rounded-md">
                  <span className="me-2">২৪.৫%</span>
                  <span className="text-[12px]">ছার</span>
                </div>
              </div>
            </div>
            <hr />
            {/* oeder section*/}
            <Oeder />
          </div>
        </div>

        {/*--------product description */}
        <div className="border-[4px] border-gray-400 rounded-md p-2 shadow-lg shadow-gray-400 my-10">
          <div className="w-full lg:w-[25%] border border-gray-200 rounded-lg">
            <p className="capitalize bg-gray-200 rounded-t-lg ps-2 py-2 text-xl font-[500] mb-2">
              কিছু প্রশ্ন ও উত্তর :
            </p>
            {/* delivery details */}
            <div className="px-2">
              <div className="flex text-lg capitalize items-center gap-3 font-[500] mb-5">
                <FAQ />
              </div>
            </div>
          </div>
          <Carousel autoPlay={true} infiniteLoop={true} showThumbs={false}>
            {/* c1 */}
            <div>
              <Image
                src={p1}
                height={500}
                width={500}
                alt="product image"
                className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
              />
            </div>
            {/* c2 */}
            <div>
              <Image
                src={p1}
                height={500}
                width={500}
                alt="product image"
                className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
              />
            </div>
            {/* c3 */}
            <div>
              <Image
                src={p1}
                height={500}
                width={500}
                alt="product image"
                className="w-full lg:w-full md:w-[80%] mx-auto   rounded-md"
              />
            </div>
          </Carousel>
          <Oeder />
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}
export default ProductDetails;
