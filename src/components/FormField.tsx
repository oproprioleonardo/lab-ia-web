"use client";

import { Button, ButtonGroup } from "@nextui-org/react";
import { Inter } from "next/font/google";
import { useState } from "react";
const inter = Inter({ subsets: ["latin"] });

interface InputValues {
  texto: string;
  arquivo: File | null;
}

export default function FormField({
  title,
  description,
  placeholder,
  rows,
  onChange = () => {},
  onToggleButton = () => {},
  ...props
}: {
  title: string;
  description: string[];
  placeholder: string;
  rows: number;
  onChange?: (res: { type: string; value: any }) => void;
  onToggleButton?: (res: { type: string; value: any }) => void;
  id: string;
}) {
  const [inputType, setInputType] = useState("texto");
  const [inputValues, setInputValues] = useState<InputValues>({
    arquivo: null,
    texto: "",
  });

  return (
    <section className="m-8 mb-16">
      <div className="w-full text-center xl:text-start">
        <span className="font-medium text-2xl">{title}</span>
      </div>

      <div className="flex flex-col xl:flex-row items-center mb-4 xl:justify-between">
        <div className="mt-2 mb-4 xl:mb-0 text-base text-justify">
          {description.map((desc, index) => (
            <p key={index}>{desc}</p>
          ))}
        </div>

        <ButtonGroup className="ml-6">
          <Button
            value={"texto"}
            disabled={inputType == "texto"}
            className="disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed bg-gray-200 text-gray-500"
            onClick={() => {
              setInputType("texto");
              onToggleButton({
                type: "texto",
                value: inputValues.texto,
              });
            }}
          >
            Texto
          </Button>
          <Button
            value={"arquivo"}
            disabled={inputType == "arquivo"}
            className="disabled:bg-gray-300 disabled:text-gray-900 disabled:cursor-not-allowed bg-gray-200 text-gray-500"
            onClick={() => {
              setInputType("arquivo");
              onToggleButton({
                type: "arquivo",
                value: null,
              });
            }}
          >
            Arquivo
          </Button>
        </ButtonGroup>
      </div>

      {inputType === "arquivo" ? (
        <input
          style={{ backgroundColor: "#E3E2EA" }}
          className="block file:p-2 file:cursor-pointer rounded-md file:rounded-ss-md file:text-white file:bg-purple-800 file:border-none w-full text-base border cursor-pointer text-black focus:outline-none placeholder-gray-900"
          id={props.id}
          type="file"
          accept=".pdf"
          onChange={(e) => {
            setInputValues({
              ...inputValues,
              arquivo: e.target.files?.[0] || null,
            });
            onChange({
              type: "arquivo",
              value: e.target.files?.[0] || null,
            });
          }}
        />
      ) : (
        <textarea
          id={props.id}
          rows={rows}
          style={{ backgroundColor: "#E3E2EA" }}
          className={`${inter.className} block p-2.5 min-h-20 max-h-64 border-none outline-none w-full text-sm text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500`}
          placeholder={placeholder}
          onChange={(e) => {
            setInputValues({ ...inputValues, texto: e.target.value });
            onChange({
              type: "texto",
              value: e.target.value,
            });
          }}
          value={inputValues.texto}
        ></textarea>
      )}
    </section>
  );
}
