"use client";

import { useState } from "react";
import InfoSection from "./InfoSection";

export default function Qna({
  list,
}: {
  list: {
    title: string;
    body: string;
  }[];
}) {
  const [open, setOpen] = useState<number>(0);

  return (
    <>
      {list.map((obj, index) => {
        return (
          <InfoSection
            key={index}
            title={obj.title}
            body={obj.body}
            open={open === index}
            index={index}
            setOpen={setOpen}
          />
        );
      })}
    </>
  );
}
