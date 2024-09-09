"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import AppStoreButton from "../AppStoreButton";
import PlayStoreButton from "../PlayStoreButton";

export default function Hamburger() {
  const [isOpen, setOpen] = useState(false);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const calcHeight = () => {
      const header = document.getElementById("header");
      if (header) setTop(header.clientHeight);
    };

    calcHeight();
    window.addEventListener("resize", calcHeight);

    return () => {
      window.removeEventListener("resize", calcHeight);
    };
  }, []);

  return (
    <>
      <div
        className="md:hidden p-3 flex flex-col gap-1 cursor-pointer"
        onClick={() => setOpen((state) => !state)}
      >
        <span className="h-1 w-6 rounded-full bg-[#F7413D] shadow-2xl" />
        <span className="h-1 w-full rounded-full bg-[#F7413D] shadow-2xl" />
        <span className="h-1 w-full rounded-full bg-[#F7413D] shadow-2xl" />
      </div>
      <motion.div
        className="absolute right-0 md:hidden z-[1] flex flex-col gap-3 mx-5 p-5 rounded-2xl w-fit bg-gray-50 bg-clip-padding backdrop-filter backdrop-blur-3xl bg-opacity-50"
        style={{ top }}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <AppStoreButton scheme="dark" />
        <PlayStoreButton scheme="dark" />
      </motion.div>
    </>
  );
}
