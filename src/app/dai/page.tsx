"use client";

import ErrorNotification from "@/components/ErrorNotification";
import { arboriaFont } from "@/fonts/Arboria/arboria";
import { kallistoFont } from "@/fonts/Kallisto/kallisto";
import { createDAI } from "@/server-actions/dai.action";
import { AttachFile, PictureAsPdf, Close, Save } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Card } from "@mui/material";
import Link from "next/link";
import { ChangeEvent, FormEvent, useState } from "react";

export default function PersonalizeDai() {
  const [knowledgeFile, setKnowledgeFile] = useState<File | null>(null);
  const [behaviorFile, setBehaviorFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<{ error: string } | null>(null);
  const [apiKey, setApiKey] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const resp = await createDAI(formData);
      if ("error" in resp) {
        setError({ error: resp.error as string });
      } else {
        setApiKey(resp.apiKey);
      }
    } catch (error) {
      setError({ error: "Não foi possível criar a DAI" });
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
    setKnowledgeFile(file);
  };

  const handleBehaviorFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setBehaviorFile(file);
  };

  return (
    <div
      style={{
        backgroundColor: "#E1DEED",
      }}
      className={`overflow-hidden min-h-full relative ${arboriaFont.className}`}
    >
      <ErrorNotification
        errors={error == null ? [] : [error.error]}
        onClose={() => {
          setError(null);
        }}
      />

      <header
        className={`mt-8 flex shadow-sm justify-start items-center bg-purple-900 text-white h-20 ${kallistoFont.className}`}
      >
        <h1 className={`ml-24 font-semibold text-2xl`}>
          DAI Assistente Inteligente
        </h1>
      </header>

      <section className="text-black w-full mt-6 pt-4 pb-4">
        <p className="font-normal text-3xl text-center">Personalize sua DAI</p>
      </section>

      <div className="w-full bg-gray-100">
        <div className="w-full flex flex-row items-center justify-center pt-6 pb-6">
          <Link href="/dai/form">
            <button className="text-xl p-6 rounded-2xl shadow-xl bg-cyan-500 text-black duration-150 hover:bg-cyan-300">
              Clique aqui para preencher o Formulário de Informações
            </button>
          </Link>
        </div>

        <div className="flex flex-row justify-around items-center">
          <span className="text-xl">OU</span>
        </div>

        <div className="w-full pt-6 pb-8">
          <form
            onSubmit={onSubmit}
            className="flex flex-col items-center justify-between"
          >
            <div>
              <span className="text-xl">
                Anexe os arquivos necessários para o funcionamento da DAI:
              </span>
            </div>

            <div className="mt-4 flex flex-row items-stretch justify-between w-2/3 h-fit">
              <div className="py-8 px-12 bg-white rounded-md shadow-md flex flex-col">
                <div className="mb-3">
                  <span className="text-xl">Conhecimento</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm">
                    Informações essenciais sobre a empresa e dados necessários
                  </p>
                  <p className="text-sm">
                    para a resposta de perguntas relacionadas ao seu negócio.
                  </p>
                </div>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="knowledge_file"
                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-purple-800 border-dashed rounded-lg cursor-pointer bg-gray-200 duration-300 hover:bg-gray-100"
                  >
                    <div className="flex flex-row items-center w-full">
                      <div className="bg-purple-700 p-1 rounded-lg shadow-sm mx-6">
                        <AttachFile
                          style={{ fontSize: "2.0rem" }}
                          className="text-white"
                        />
                      </div>
                      <div className="text-sm text-black">
                        <p>
                          <span className="font-semibold">Arraste e solte</span>{" "}
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
                  <div className="mt-4">
                    <span>Arquivos anexados:</span>

                    <div className="bg-gray-300 mt-4 px-10 py-4 flex flex-row items-center justify-between rounded-md w-full">
                      <div className="overflow-hidden">
                        <PictureAsPdf className="text-gray-700 mr-2" />
                        <span>{knowledgeFile.name}</span>
                      </div>

                      <Close
                        onClick={() => {
                          setKnowledgeFile(null);
                        }}
                        className="text-gray-700 cursor-pointer hover:text-gray-500"
                      />
                    </div>
                  </div>
                )}
              </div>

              <div className="py-8 px-12 bg-white rounded-md shadow-md flex flex-col">
                <div className="mb-3">
                  <span className="text-xl">Comportamento</span>
                </div>
                <div className="mb-6">
                  <p className="text-sm">
                    Descrição da DAI, expectativas de como ela deverá se portar
                    e
                  </p>
                  <p className="text-sm">interagir com o cliente.</p>
                </div>

                <div className="flex items-center justify-center w-full">
                  <label
                    htmlFor="behavior_file"
                    className="flex flex-col items-center justify-center w-full h-24 border-2 border-purple-800 border-dashed rounded-lg cursor-pointer bg-gray-200 duration-300 hover:bg-gray-100"
                  >
                    <div className="flex flex-row items-center w-full">
                      <div className="bg-purple-700 p-1 rounded-lg shadow-sm mx-6">
                        <AttachFile
                          style={{ fontSize: "2.0rem" }}
                          className="text-white "
                        />
                      </div>
                      <div className="text-sm text-black">
                        <p>
                          <span className="font-semibold">Arraste e solte</span>{" "}
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
                  <div className="mt-4">
                    <span>Arquivos anexados:</span>

                    <div className="bg-gray-300 mt-4 px-10 py-4 flex flex-row items-center justify-between rounded-md w-full">
                      <div className="overflow-hidden">
                        <PictureAsPdf className="text-gray-700 mr-2" />
                        <span>{behaviorFile.name}</span>
                      </div>

                      <Close
                        onClick={() => {
                          setBehaviorFile(null);
                        }}
                        className="text-gray-700 cursor-pointer hover:text-gray-500"
                      />
                    </div>
                  </div>
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
                className="mt-12 bg-cyan-500 text-black px-6 py-3 rounded-md shadow-md text-lg duration-150 hover:bg-cyan-300"
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

      <footer className="pt-12 text-center bg-gray-100 text-sm text-gray-500 pb-4">
        <span>&copy; 2024 Creath Digital. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
