"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

import { useEffect, useState } from "react";
import useUserState from "@/store/user";

import { useRouter } from "next/navigation";

const CollectUserDetails = () => {
  const { setUserState, user } = useUserState();

  useEffect(() => {
    console.log(`user data changed to ${JSON.stringify(user, null, 2)}`);
  }, [user]);

  const [userInfo, setUserInfo] = useState(user);

  const router = useRouter();

  return (
    <section className="w-full h-full flex justify-center items-center bg-[#245195] text-white font-semibold">
      <div className="border text-xl h-full w-1/2 flex flex-col gap-y-5 justify-center items-center">
        <div className="w-1/2">
          <Label htmlFor="username">Enter Your Username</Label>
          <Input
            id="username"
            className={`mt-2 placeholder:text-slate-300 focus:ring-none`}
            placeholder="What should we call you"
            value={userInfo.userName}
            onChange={(e) =>
              setUserInfo({ ...userInfo, userName: e.target.value })
            }
          />
        </div>
        <div className="flex flex-col gap-y-5">
          <Button
            type="button"
            onClick={() => {
              setUserState({ ...userInfo, roomType: "public", inRoom: true });
              // router.push("/draw/");
            }}
          >
            Find a Public Room
          </Button>
          <Button
            type="button"
            onClick={() => {
              setUserState({ ...userInfo, roomType: "private" });
              // router.push("/draw/");
            }}
          >
            Create a Private
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CollectUserDetails;
