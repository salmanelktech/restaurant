"use client";
import React, { useState } from "react";
import Link from "next/link";
// import logo from "../../../public/icons/logo.png";
import Image from "next/image";
import { MenuOutlined } from "@ant-design/icons";

const Sidebar = () => {
  const [isToggled, setIsToggled] = useState(false);

  const handleToggle = (): void => {
    setIsToggled(!isToggled);
  };

  return (
    <>
      <button
        className="fixed right-0 top-0.5 text-[20px] md:hidden z-20 p-4"
        onClick={handleToggle}
      >
        <MenuOutlined />
      </button>
      <div
        className={`fixed top-0 md:block start-0 bg-[#EEF2F7] w-[250px] min-h-[100%] z-20 py-5 px-6 ${
          isToggled ? "toggled transition-all" : "hidden"
        }`}
      >
        <Link href="/">
          <Image width={190} height={30} src="/logo.svg" alt="logo" />
        </Link>
        <ul className="mt-10">
          <li className="py-3.5">
            <Link href="/dashboard" className="flex font-medium text-primary">
              <Image
                className="me-3"
                width={24}
                height={24}
                src="/icon/dashboard.svg"
                alt="dashboard"
              />{" "}
              <span> Dashboard </span>
            </Link>
          </li>
          <li className="py-3.5">
            <Link
              href="/active-job"
              className="flex font-medium text-[#4F4F4F] hover:text-primary"
            >
              <Image
                className="me-3"
                width={24}
                height={24}
                src="/icon/job.svg"
                alt="job"
              />{" "}
              <span>Active Jobs </span>
            </Link>
          </li>
          <li className="py-3.5">
            <Link
              href="/all-applicants"
              className="flex font-medium text-[#4F4F4F] hover:text-primary"
            >
              <Image
                className="me-3"
                width={24}
                height={24}
                src="/icon/people.svg"
                alt="people"
              />{" "}
              <span> All Applicants </span>
            </Link>
          </li>
        </ul>

        <ul className="absolute bottom-8">
          <li className="bg-white flex w-fill rounded-xl py-3 px-5">
            <Link href="/" className="flex font-medium hover:text-primary">
              <Image
                className="object-contain"
                width={40}
                height={40}
                src="/avatar.png"
                alt="avatar"
              />{" "}
              <div className="ms-3">
                <p className="font-medium"> Julius Ceasar </p>
                <span className="font-normal text-[14px]">Good Morning!</span>
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
