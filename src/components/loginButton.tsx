"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useState, useEffect } from "react";

// function useAvatarLink() {
//   const { data } = useLogin();
//   if (data.loginStatus) {
//     const { data } = useQuery({
//       queryKey: ["userPfp"],
//       queryFn: () =>
//         fetch("https://api.steams.social/self").then((res) => res.json()),
//     });
//
//     return data.picture;
//   }
//
//   return null;
// }

export default function UserButton() {
  // const linkStr = useAvatarLink();
  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetch("https://api.steams.social/checkSession")
      .then((res) => res.json())
      .then((data) => {
        setData(data.loginStatus);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;

  return data ? (
    <Avatar>
      <AvatarImage src={"https://github.com/shadcn.png"} />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ) : (
    <Link
      href="https://api.steams.social/letmein"
      className="bg-[rgba(63,117,150,1)] hover:bg-orange-500 px-4 py-2 rounded-lg"
    >
      Get Started
    </Link>
  );
}
