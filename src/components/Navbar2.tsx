import React from "react";
import Link from "next/link";

const Navbar2: React.FC = () => {
  return (
    <nav className="bg-blue-600 text-white py-4 px-6 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-bold">STEAM</Link>
        <div className="flex space-x-4">
          <Link href="/tickets" className="hover:underline">Raise Query
          </Link>
          <Link href="/tickets/view" className="hover:underline"> View Tickets
          </Link>
          <Link href="/tickets/resolved" className="hover:underline">Resolved Tickets
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar2;
