"use client";
import Link from "next/link";

export default function NavBar() {
  return (
    <nav className>
      <div className>
        <Link href="/" className="hover:underline">
          Home
        </Link>
        <Link href="/mtg" className="hover:underline">
          Magic: The Gathering
        </Link>
        <Link href="/yugioh" className="hover:underline">
          Yu-Gi-Oh
        </Link>
        <Link href="/ourmission" className="hover:underline">
          Our Mission
        </Link>
      </div>
    </nav>
  );
}