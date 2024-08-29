"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SignIn, SignOut, UseSession, getProviders } from "next-auth/react";

const Nav = () => {
  const isUserLoggedIn = true;

  return (
    <nav className="flex-between w-full mb-6 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="assets/images/logo.svg"
          className="object-contain"
          width={30}
          height={30}
          alt="Promptopia logo"
        />
        <p className="logo_text">Promptopia</p>
      </Link>
      {/* Desktop */}
      <div className="sm:flex hidden">
        {/* wc button to show whether user logged in or not */}
        {isUserLoggedIn ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>
            <button type="button" onClick={SignOut} className="outline_btn">
              Sign Out
            </button>
          </div>
        ) : (
          <></>
        )}
      </div>
    </nav>
  );
};

export default Nav;
