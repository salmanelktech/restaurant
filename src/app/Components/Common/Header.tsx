import React from "react";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <header className="fixed top-0 w-full md:ps-[250px] bg-[#F9FAFB] z-10">
        <div className="flex justify-between items-center py-3 px-5">
          <Link href="/" className="md:hidden">
            <Image width={160} height={30} src="/logo.svg" alt="logo" />
          </Link>
          <h4 className="font-bold text-[24px] hidden md:block">
            HR Recruitment Module
          </h4>
          <div className="flex items-center pe-8 md:pe-0">
            <span className="bg-[#EDEEF3] rounded-xl p-2 md:px-3">
              <Image
                width={24}
                height={24}
                src="/icon/notification.svg"
                alt="Notifi"
              />
            </span>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
