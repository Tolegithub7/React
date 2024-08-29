"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { SignIn, SignOut, UseSession, getProviders } from "next-auth/react";

const Nav = () => {
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
        <p className="logo_text">Promtopia</p>
      </Link>
    </nav>
  );
};

export default Nav;
