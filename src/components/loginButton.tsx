import Link from "next/link";

export default function UserButton() {
  return (
    <Link
      href="https://api.steams.social/letmein"
      className="bg-[rgba(63,117,150,1)] hover:bg-orange-500 px-4 py-2 rounded-lg"
    >
      Get Started
    </Link>
  );
}
