"use client";

import Link from "next/link";
// import Image from "next/image";
import { Button } from "~/components/ui/button";

export default function Home() {
  return (
    <main className="flex h-screen w-screen">
      {/* LEFT */}
      <div className="md:flex flex-1/2 bg-custom-primary text-white flex-col items-center hidden justify-center">
        <h1 className="font-semibold text-4xl ">DebtEase</h1>
        <p className="text-lg">A platform for managing and reducing debt</p>
      </div>
      <div className="flex flex-col justify-center px-4 items-center flex-1/2 bg-custom-background gap-2">
        <div className="flex flex-col items-center justify-center gap-2 mb-2">
          <h1 className="md:hidden font-semibold text-4xl ">DebtEase</h1>
          <p className="text-lg text-center">
            Stay organized and keep track of your financial obligations
          </p>
        </div>
        <Button
          variant="link"
          className="bg-custom-primary text-white hover:no-underline hover:bg-custom-hover w-full md:w-1/2"
        >
          <Link href="/sign-in" className="hover:no-underline">
            Login
          </Link>
        </Button>
        <Button
          variant="link"
          className="bg-custom-primary text-white hover:no-underline hover:bg-custom-hover w-full md:w-1/2"
        >
          <Link href="/sign-up" className="hover:no-underline">
            Register
          </Link>
        </Button>
      </div>
    </main>
  );
}
