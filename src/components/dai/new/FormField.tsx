"use client";

import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

export default function FormField({
  title,
  description,
  placeholder,
  rows,
  ...props
}: {
  title: string;
  description: string[];
  placeholder: string;
  rows: number;
  id: string;
}) {
  const [inputType, setInputType] = useState("texto");

  const handleChange = (
    event: React.MouseEvent<HTMLElement>,
    newInputType: string
  ) => {
    setInputType(newInputType);
  };

  return (
    <section className="m-8 mb-16">
      <span className="font-medium text-2xl">{title}</span>

      <div className="flex flex-row items-center mb-4 justify-between">
        <div className="mt-2 text-base">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>

        <ToggleButtonGroup
          className="bg-white shadow-sm rounded-md "
          value={inputType}
          exclusive
          onChange={handleChange}
        >
          <ToggleButton value="texto">Texto</ToggleButton>
          <ToggleButton value="arquivo">Arquivo</ToggleButton>
        </ToggleButtonGroup>
      </div>

      {inputType === "arquivo" ? (
        <input
        style={{ backgroundColor: "#E3E2EA" }}
          className="block file:cursor-pointer rounded-md file:rounded-ss-md file:text-white file:bg-purple-800 file:border-none w-full text-base border cursor-pointer text-black focus:outline-none placeholder-gray-900"
          id={props.id}
          type="file"
          accept=".pdf"
        />
      ) : (
        <textarea
          id={props.id}
          rows={6}
          style={{ backgroundColor: "#E3E2EA" }}
          className={`${inter.className} block p-2.5 min-h-36 max-h-64 border-none outline-none w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeholder}
        ></textarea>
      )}
    </section>
  );
}
