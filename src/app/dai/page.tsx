"use client";

import Header from "@/components/Header";
import arboriaFont from "@/fonts/arboria";
import ubuntu from "@/fonts/ubuntu";
import { createDAI } from "@/server-actions/dai.action";
import { toastConfig } from "@/utils";
import { LoadingButton } from "@mui/lab";
import { Card, Collapse, Grow } from "@mui/material";
import Link from "next/link";
import React, { ChangeEvent, FormEvent, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "@/app/dai/style.css";

import "react-toastify/dist/ReactToastify.min.css";
import redditFont from "@/fonts/reddit-mono";
import InsertDocumentsCard from "@/components/dai/InsertDocumentsCard";
import Image from "next/image";

export default function PersonalizeDai() {
  const [knowledgeFile, setKnowledgeFile] = useState<File | null>(null);
  const [behaviorFile, setBehaviorFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [apiKey, setApiKey] = useState<string | null>(null);

  const hasAnyFile = knowledgeFile || behaviorFile;
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
    e.target.value = "";
  };

  const handleBehaviorFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setApiKey(null);
    setBehaviorFile(file);
    e.target.value = "";
  };

  return (
    <>
      <div
        className={`overflow-hidden background-img min-h-full relative text-purple-700 ${arboriaFont.className}`}
      >
        <Header />

        <section
          className={`mt-12 w-full py-6 ${ubuntu.className} bg-white bg-opacity-80 font-medium`}
        >
          <p className="text-2xl text-center">Personalize sua DAI</p>

          <p className="text-center text-base pt-2">
            Envie arquivos em formato PDF para Conhecimentos e Comportamentos,
            ou preencha nosso formulário.
          </p>
        </section>

        <div className="w-full">
          <div className="w-full pt-4 pb-8">
            <form
              onSubmit={onSubmit}
              className="flex flex-col items-center justify-between"
            >
              <div className="mt-8 flex xl:flex-row xl:items-stretch xl:justify-between flex-col items-center w-full md:w-2/3 h-fit">
                <InsertDocumentsCard
                  title="Conhecimento"
                  description="Informações essenciais sobre a empresa e dados necessários para a resposta de perguntas relacionadas ao seu negócio."
                  className="card-background-1"
                  handleFileChange={handleKnowledgeFileChange}
                  file={knowledgeFile}
                  setFile={setKnowledgeFile}
                  id="knowledge_file"
                />

                <InsertDocumentsCard
                  title="Comportamento"
                  description="Descrição da DAI, expectativas de como ela deverá se portar e interagir com o cliente."
                  className="card-background-2"
                  handleFileChange={handleBehaviorFileChange}
                  file={behaviorFile}
                  setFile={setBehaviorFile}
                  id="behavior_file"
                />
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
                <Grow in={!!knowledgeFile && !!behaviorFile}>
                  <LoadingButton
                    className={`mt-16 btn-background text-white ${arboriaFont.className} font-medium w-52 h-14 rounded-2xl shadow-md text-lg duration-150`}
                    loading={isLoading}
                    type="submit"
                    loadingPosition="center"
                    variant="contained"
                  >
                    {!isLoading && "Enviar"}
                  </LoadingButton>
                </Grow>
              )}
            </form>
          </div>

          <Collapse in={!knowledgeFile && !behaviorFile}>
            {!(knowledgeFile || behaviorFile) && (
              <div>
                <div className="w-full flex flex-col items-center justify-center pt-6 pb-4">
                  <div className="mb-4">
                    <span
                      className={`${redditFont.className} font-medium text-base text-purple-900`}
                    >
                      Ainda não possui Arquivos ? Preencha nosso formulário:
                    </span>
                  </div>

                  <Link href="/dai/form">
                    <button className="text-xl flex flex-row items-center px-24 py-6 rounded-xl sm:rounded-2xl shadow-xl border-2 border-white bg-white bg-opacity-60 duration-250 hover:bg-opacity-100">
                      <Image
                        className="mr-4"
                        src="question.svg"
                        alt="icone"
                        width={20}
                        height={20}
                      />
                      <span
                        className={`${redditFont.className} font-medium text-purple-900`}
                      >
                        Formulário de personalização
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </Collapse>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
