"use client";

import { sidebarLinks } from "@/constants/constants";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

const LeftSidebar = () => {
  const pathname = usePathname();
  const auth = useAuth();

  const handleLogout = async () => {
    try {
      await auth.signOut();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky left-0 top-0 flex h-screen flex-col justify-between overflow-y-auto border-r p-6 pt-36 shadow-light-300 dark:shadow-none max-sm:hidden lg:w-[266px]">
      <div className="flex flex-1 flex-col gap-6">
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;

          return (
            <Link
              href={item.route}
              className={`${isActive ? "primary-gradient rounded-lg text-light-900" : "text-dark300_light900"} flex items-center justify-start gap-4 bg-transparent p-4`}
              key={item.route}
            >
              <Image
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p
                className={`${isActive ? "base-bold" : "base-medium"} max-lg:hidden`}
              >
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>

      <div className="flex w-full flex-col items-start justify-start">
        {/* <SignOutConfirmation /> */}
        <SignedIn>
          <Button
            className="text-dark300_light900 small-medium max-lg:btn-secondary flex min-h-[41px] w-full items-center justify-start gap-4 rounded-lg bg-transparent p-4 shadow-none transition-colors"
            onClick={handleLogout}
          >
            <Image
              src="/assets/icons/logout.svg"
              alt="Log Out"
              width={20}
              height={20}
              className="invert-colors"
            />
            <p className="base-medium max-lg:hidden">Logout</p>
          </Button>
        </SignedIn>

        <SignedOut>
          <div className="mx-auto flex w-full flex-col gap-3">
            <Link href="/sign-in">
              <Button className="btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/account.svg"
                  alt="Sign In"
                  width={20}
                  height={20}
                  className="invert-colors hidden max-lg:block"
                />
                <span className="primary-text-gradient max-lg:hidden">
                  Log In
                </span>
              </Button>
            </Link>
            <Link href="/sign-up">
              <Button className="small-medium light-border btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
                <Image
                  src="/assets/icons/sign-up.svg"
                  alt="Sign Up"
                  width={20}
                  height={20}
                  className="invert-colors hidden max-lg:block"
                />
                <p className="max-lg:hidden">Sign Up</p>
              </Button>
            </Link>
          </div>
        </SignedOut>
      </div>
    </section>
  );
};

export default LeftSidebar;
