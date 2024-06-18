"use client";
import { FaBell, FaMessage, FaUser, FaXTwitter } from "react-icons/fa6";
import { FaHome, FaSearch } from "react-icons/fa";
import FeedCard from "@/components/FeedCard";
import { CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { useCallback } from "react";
import toast from "react-hot-toast";
import { graphqlClient } from "@/clients/api";
import { verifyUserGoogleTokenQuery } from "@/graphql/query/user";
interface SidebarMenuBtn {
  tittle: string;
  icon: React.ReactNode;
}
export default function Home() {
  const sideBarMenu: SidebarMenuBtn[] = [
    {
      tittle: "Home",
      icon: <FaHome />,
    },
    {
      tittle: "Explore",
      icon: <FaSearch />,
    },
    {
      tittle: "Notifications",
      icon: <FaBell />,
    },
    {
      tittle: "Messages",
      icon: <FaMessage />,
    },
    {
      tittle: "Profile",
      icon: <FaUser />,
    },
  ];
  const handleLoginWithGoogle = useCallback(
    async (cred: CredentialResponse) => {
      const googleToken = cred.credential;
      if (!googleToken) return toast.error(`Google Token Not Found`);

      const { verifyGoogleToken } = await graphqlClient.request(
        verifyUserGoogleTokenQuery,
        { token: googleToken }
      );

      toast.success("verified Success");
      console.log(verifyGoogleToken);
    },
    []
  );
  return (
    <main className="text-center">
      <div className="h-screen w-screen grid grid-cols-12 gap-4 px-12 ">
        <div className="col-span-3 pl-10">
          {/* logo */}
          <div className="mt-3 px-4 py-2 rounded-full h-fit w-fit hover:bg-slate-700 cursor-pointer">
            <FaXTwitter className="text-2xl" />
          </div>
          {/* menu */}
          <div className="mt-3 ">
            <ul className="">
              {sideBarMenu.map((item) => (
                <li
                  className="flex items-center my-1 hover:bg-slate-800 h-fit w-fit p-3 rounded-full  cursor-pointer"
                  key={item.tittle}
                >
                  <span className="text-1xl">{item.icon}</span>
                  <span className="ml-3 text-xl hidden md:block">
                    {item.tittle}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          {/* btn post */}
          <div className="mt-5 btn py-2 px-4 bg-[#1C8CD8] rounded-full cursor-pointer">
            <button className="font-semibold">Post</button>
          </div>
        </div>
        <div className=" col-span-6 border-r-[0.7px]  border-l-[0.7px] border-slate-800 overflow-scroll">
          <div>
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
        </div>
        <div className="col-span-3 p-5">
          <div className="p-5 bg-slate-800 rounded-lg">
            <h3 className="text-sm mb-2">New To Twitter?</h3>
            <GoogleLogin onSuccess={handleLoginWithGoogle} />
          </div>
        </div>
      </div>
    </main>
  );
}
