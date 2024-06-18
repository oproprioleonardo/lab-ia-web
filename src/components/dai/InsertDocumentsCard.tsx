import redditFont from "@/fonts/reddit-mono";
import ubuntu from "@/fonts/ubuntu";
import { AttachFile, Close, PictureAsPdf } from "@mui/icons-material";
import { Grow } from "@mui/material";
import { ChangeEvent, useState } from "react";

export default function InsertDocumentsCard({
  title,
  description,
  handleFileChange,
  file,
  setFile,
  className = "",
  id,
}: {
  title: string;
  description: string;
  handleFileChange: (e: ChangeEvent<HTMLInputElement>) => void;
  file: File | null;
  setFile: (file: File | null) => void;
  className?: string;
  id: string;
}) {
  const [grow, setGrow] = useState(false);
  const handleFile = (e: ChangeEvent<HTMLInputElement>) => {
    handleFileChange(e);
    setTimeout(() => {
      setGrow(true);
    }, 100);
  };

  return (
    <div
      className={`py-8 px-12 text-violet-900 ${className} border-2 border-white rounded-2xl shadow-xl flex flex-col lg:w-9/12 xl:w-5/12 w-full xl:mb-0 mb-8`}
    >
      <div className="mb-3 text-center">
        <span className={`text-2xl ${redditFont.className} font-medium`}>
          {title}
        </span>
      </div>
      <div className={`mb-6 text-sm ${ubuntu.className} font-normal text-justify`}>
        {description}
      </div>

      <div className="flex items-center justify-center w-full">
        <label
          htmlFor={id}
          className="flex flex-col items-center justify-center w-full h-28 border-2 border-purple-800 border-dashed rounded-lg cursor-pointer bg-white bg-opacity-80 duration-300 hover:bg-opacity-100"
        >
          <div className="flex flex-row items-center w-full">
            <div className="bg-purple-700 p-1 rounded-lg shadow-sm mx-6">
              <AttachFile
                style={{
                  fontSize: "2.0rem",
                }}
                className="text-white"
              />
            </div>
            <div className={`text-sm mr-6 font-medium ${ubuntu.className}`}>
              <p>Arraste e solte ou</p>
              <p>Clique e faça upload do seu arquivo</p>
            </div>
          </div>
          <input
            id={id}
            name={id}
            type="file"
            className="hidden"
            accept=".pdf"
            onChange={handleFile}
          />
        </label>
      </div>

      {file && (
        <Grow in={grow} className="mt-4">
          <div>
            <span className={`${redditFont.className} font-medium`}>
              Arquivos anexados:
            </span>
            <div className="bg-white bg-opacity-80 mt-4 px-10 py-4 flex flex-row items-center justify-between rounded-md w-full">
              <div className="flex items-center overflow-hidden">
                <PictureAsPdf className="bg-white bg-opacity-80 mr-2" />
                <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                  {file.name}
                </span>
              </div>

              <Close
                onClick={() => {
                  setGrow(false);
                  setTimeout(() => {
                    setFile(null);
                  }, 250);
                }}
                className="cursor-pointer hover:text-purple-700"
              />
            </div>
          </div>
        </Grow>
      )}
    </div>
  );
}
