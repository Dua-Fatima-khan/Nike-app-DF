import { Button } from "@/components/ui/button";

import Image from "next/image";
import Link from "next/link";
export default function Joinn() {
  return (
    <main>
      <section className="my-20">
        <div className="flex flex-col justify-center items-center max-w-lg mx-auto">
          <Image
            src={"/logo/logo2.png"}
            alt="Nike Logo"
            width={65}
            height={35}
          />
          <div className=" items-center justify-center  flex flex-col">
            <h1 className="font-bold text-xl ">BECOME A NIKE MEMBER</h1>
          </div>
          <div className="mt-10 mb-5 max-w-[280px] mx-auto">
            <p className="text-[#BCBCBC] text-[12px] ">
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration and community
            </p>
          </div>
          <div className="flex flex-col justify-center items-center gap-4 mt-3">
            <input
              type="Email"
              placeholder="Email"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="password"
              placeholder="password"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="name"
              placeholder="First Name"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="name"
              placeholder="Last Name"
              className="w-80 border shadow rounded-md p-2"
            />
            <input
              type="dob"
              placeholder="Date of Birth"
              className="w-80 border shadow rounded-md p-2"
            />
            <p className="text-[#BCBCBC] text-[12px]">
              Get a Nike Member Reward every year on your Birthday.
            </p>
            <input
              type="drop"
              placeholder="Pakistan"
              className="w-80 border shadow rounded-md p-2"
            />
            <div className="flex justify-between w-full gap-4">
              <div className="w-[50%] text-center bg-white rounded-lg shadow px-7 py-3">
                Male
              </div>
              <div className="w-[50%] text-center bg-white rounded-lg shadow px-7 py-3">
                Female
              </div>
            </div>
          </div>

          <div className="flex justify-between max-w-[280px] mt-6">
          <input type="checkbox" className="p-2 m-2 w-6 h-6" />
            <h1 className="text-[#BCBCBC] text-[12px] flex gap-1 items-center">
              Sign up for emails to get updates from Nike on products, offers
              and your Member benefits
            </h1>
          </div>
          <div className="flex flex-col justify-center items-center mt-4">
            <p className="text-[#BCBCBC] text-[12px]">
              By creating an account, you agree to Nike&apos;s{" "}
              <u>Privacy Policy</u>
            </p>
            <p className="text-[#BCBCBC] text-[12px]">
              and <u>Terms of Use</u>
            </p>
          </div>
          <Link href={"/joinus"}>
            <Button className="w-80 ronded-sm my-6">JOIN US</Button>
          </Link>
          <p className="text-[#BCBCBC] text-[12px]">
            Already a Member{" "}
            <Link href={"/login"}>
              <u className="text-black">Sign In?</u>
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
