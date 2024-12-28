"use client";
import { useQuery } from "@tanstack/react-query";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";

function useAvatarLink() {
  const { data } = useQuery({
    queryKey: ["userPfp"],
    queryFn: () =>
      fetch("https://api.steams.social/self").then((res) => res.json()),
  });

  return data.picture;
}

export default function UserButton() {
  const { isPending, data } = useQuery({
    queryKey: ["authStatus"],
    queryFn: () =>
      fetch("https://api.steams.social/checkSession").then((res) => res.json()),
    staleTime: 0,
  });

  const linkStr = useAvatarLink();

  if (isPending) return <div>Loading...</div>;

  console.log(data.loginStatus);

  return data.loginStatus ? (
    <Avatar>
      <AvatarImage src={linkStr} />
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
