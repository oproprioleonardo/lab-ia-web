"use client";

import { arboriaFont } from "@/fonts/Arboria/arboria";
import { kallistoFont } from "@/fonts/Kallisto/kallisto";
import { createDAI } from "@/server-actions/dai.action";
import { AttachFile, PictureAsPdf, Close, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card, Collapse, Grow } from "@mui/material";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { Bounce, ToastContainer, ToastOptions, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.min.css";

export default function PersonalizeDai() {
  const [knowledgeFile, setKnowledgeFile] = useState<File | null>(null);
  const [behaviorFile, setBehaviorFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);
  const [growBehavior, setGrowBehavior] = useState<boolean>(false);
  const [growKnowledge, setGrowKnowledge] = useState<boolean>(false);

  const toastConfig: ToastOptions = {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  };

  function notifySuccess(message: string) {
    toast.success(message, toastConfig);
  }

  function notifyError(message: string) {
    toast.error(message, toastConfig);
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    if (!knowledgeFile || !behaviorFile) {
      notifyError("Anexe os arquivos necessários para a DAI");
      setIsLoading(false);
      return;
    }

    try {
      const formData = new FormData(event.currentTarget);
      const resp = await createDAI(formData);
      if ("error" in resp) {
        notifyError(resp.error as string);
      } else {
        setApiKey(resp.apiKey);
        notifySuccess("DAI criada com sucesso!");
      }
    } catch (e) {
      notifyError("Não foi possível criar a DAI");
    } finally {
      setIsLoading(false);
    }
  }

  const onClickCopy = () => {
    if (!apiKey) return;
    navigator.clipboard.writeText(apiKey);
  };

  const handleKnowledgeFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setApiKey(null);
    setKnowledgeFile(file);
    setTimeout(() => {
      setGrowKnowledge(true);
    }, 100);
    e.target.value = "";
  };

  const handleBehaviorFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setApiKey(null);
    setBehaviorFile(file);
    setTimeout(() => {
      setGrowBehavior(true);
    }, 100);
    e.target.value = "";
  };

  return (
    <>
      <div
        className={`overflow-hidden bg-gray-100 min-h-full relative ${arboriaFont.className}`}
      >
        <div
          className="h-8 w-full"
          style={{ backgroundColor: "#E1DEED" }}
        ></div>
        <header
          className={`flex shadow-sm justify-start items-center header-background text-white h-20 ${kallistoFont.className}`}
        >
          <h1 className={`ml-24 font-semibold text-2xl`}>
            DAI Assistente Inteligente
          </h1>
        </header>
        <div
          className="h-6 w-full"
          style={{ backgroundColor: "#E1DEED" }}
        ></div>
        <section
          className="text-black w-full pt-4 pb-4"
          style={{ backgroundColor: "#E1DEED" }}
        >
          <p className="font-normal text-3xl text-center">
            Personalize sua DAI
          </p>
        </section>

        <div className="w-full">
          <Collapse in={!knowledgeFile && !behaviorFile}>
            <div>
              <div className="w-full flex flex-row items-center justify-center pt-6 pb-4">
                <Link href="/dai/form">
                  <button className="text-xl px-6 py-4 rounded-2xl shadow-xl bg-cyan-500 text-black duration-150 hover:bg-cyan-300">
                    Clique aqui para preencher o Formulário de Informações
                  </button>
                </Link>
              </div>

              <div className="flex flex-row justify-around items-center">
                <span className="text-xl">OU</span>
              </div>
            </div>
          </Collapse>

          <div className="w-full pt-4 pb-8">
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-center justify-between"
            >
              <div>
                <span className="text-xl">
                  Anexe os arquivos necessários para o funcionamento da DAI:
                </span>
              </div>

              <div className="mt-8 flex xl:flex-row xl:items-stretch xl:justify-between flex-col items-center w-2/3 h-fit">
                <div className="py-8 px-12 bg-white rounded-md shadow-md flex flex-col xl:w-5/12 w-full xl:mb-0 mb-8">
                  <div className="mb-3">
                    <span className="text-xl">Conhecimento</span>
                  </div>
                  <div className="mb-6 text-sm">
                    Informações essenciais sobre a empresa e dados necessários
                    para a resposta de perguntas relacionadas ao seu negócio.
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="knowledge_file"
                      className="flex flex-col items-center justify-center w-full h-24 border-2 border-purple-800 border-dashed rounded-lg cursor-pointer bg-gray-200 duration-300 hover:bg-gray-100"
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
                        <div className="text-sm text-black mr-6">
                          <p>
                            <span className="font-semibold">
                              Arraste e solte
                            </span>{" "}
                            ou
                          </p>
                          <p>
                            <span className="font-semibold">Clique</span> e faça
                            upload do seu arquivo
                          </p>
                        </div>
                      </div>
                      <input
                        id="knowledge_file"
                        name="knowledge_file"
                        type="file"
                        className="hidden"
                        accept=".pdf"
                        onChange={handleKnowledgeFileChange}
                      />
                    </label>
                  </div>

                  {knowledgeFile && (
                    <Grow in={growKnowledge} className="mt-4">
                      <div>
                        <span>Arquivos anexados:</span>
                        <div className="bg-gray-300 mt-4 px-10 py-4 flex flex-row items-center justify-between rounded-md w-full">
                          <div className="flex items-center overflow-hidden">
                            <PictureAsPdf className="text-gray-700 mr-2" />
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                              {knowledgeFile.name}
                            </span>
                          </div>

                          <Close
                            onClick={() => {
                              setGrowKnowledge(false);
                              setTimeout(() => {
                                setKnowledgeFile(null);
                              }, 250);
                            }}
                            className="text-gray-700 cursor-pointer hover:text-gray-500"
                          />
                        </div>
                      </div>
                    </Grow>
                  )}
                </div>

                <div className="py-8 px-12 bg-white rounded-md shadow-md flex flex-col xl:w-5/12 w-full">
                  <div className="mb-3">
                    <span className="text-xl">Comportamento</span>
                  </div>
                  <div className="mb-6 text-sm">
                    Descrição da DAI, expectativas de como ela deverá se portar
                    e interagir com o cliente.
                  </div>

                  <div className="flex items-center justify-center w-full">
                    <label
                      htmlFor="behavior_file"
                      className="flex flex-col items-center justify-center w-full h-24 border-2 border-purple-800 border-dashed rounded-lg cursor-pointer bg-gray-200 duration-300 hover:bg-gray-100"
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
                        <div className="text-sm text-black mr-6">
                          <p>
                            <span className="font-semibold">
                              Arraste e solte
                            </span>{" "}
                            ou
                          </p>
                          <p>
                            <span className="font-semibold">Clique</span> e faça
                            upload do seu arquivo
                          </p>
                        </div>
                      </div>
                      <input
                        id="behavior_file"
                        name="behavior_file"
                        type="file"
                        accept=".pdf"
                        className="hidden"
                        onChange={handleBehaviorFileChange}
                      />
                    </label>
                  </div>

                  {behaviorFile && (
                    <Grow in={growBehavior} className="mt-4">
                      <div>
                        <span>Arquivos anexados:</span>
                        <div className="bg-gray-300 mt-4 px-10 py-4 flex flex-row items-center justify-between rounded-md w-full">
                          <div className="flex items-center overflow-hidden">
                            <PictureAsPdf className="text-gray-700 mr-2" />
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis">
                              {behaviorFile.name}
                            </span>
                          </div>

                          <Close
                            onClick={() => {
                              setGrowBehavior(false);
                              setTimeout(() => {
                                setBehaviorFile(null);
                              }, 250);
                            }}
                            className="text-gray-700 cursor-pointer hover:text-gray-500"
                          />
                        </div>
                      </div>
                    </Grow>
                  )}
                </div>
              </div>

              {apiKey ? (
                <div className="w-full flex justify-center items-center">
                  <div
                    onClick={onClickCopy}
                    className="mt-8 w-fit h-fit bg-blue-200 hover:bg-blue-100 duration-150 border-blue-600 border-solid border"
                  >
                    <Card className="w-fit cursor-pointer px-6 py-3 mx-auto bg-transparent">
                      API-Key: {apiKey}
                    </Card>
                  </div>
                </div>
              ) : (
                <LoadingButton
                  className="mt-16 bg-cyan-500 text-black px-6 py-3 rounded-md shadow-md text-lg duration-150 hover:bg-cyan-300"
                  loading={isLoading}
                  type="submit"
                  loadingPosition="start"
                  startIcon={<Save />}
                  variant="contained"
                >
                  <span>Confirmar</span>
                </LoadingButton>
              )}
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
