"use client";

import CustomizedSteppers from "@/components/CustomizedSteppers";
import FormField from "@/components/dai/new/FormField";
import { arboriaFont } from "@/fonts/Arboria/arboria";
import { kallistoFont } from "@/fonts/Kallisto/kallisto";
import { useState } from "react";

const steps = [
  "Seu negócio",
  "Perguntas",
  "Respostas",
  "Comportamento",
  "Observações",
];

export default function NewDai() {
  const [fields, setFields] = useState<{
    negocio: any;
    perguntas: any;
    respostas: any;
    comportamento: any;
    observacoes: any;
  }>({
    negocio: null,
    perguntas: null,
    respostas: null,
    comportamento: null,
    observacoes: null,
  });

  const getActiveStep = () => {
    if (fields.negocio === null) return 0;
    if (!(fields.negocio instanceof File) && fields.negocio.length < 200)
      return 0;
    if (fields.negocio instanceof File && !fields.negocio) return 0;
    if (fields.perguntas === null) return 1;
    if (!(fields.perguntas instanceof File) && fields.perguntas.length < 200)
      return 1;
    if (fields.perguntas instanceof File && !fields.perguntas) return 1;
    if (fields.respostas === null) return 2;
    if (!(fields.respostas instanceof File) && fields.respostas.length < 200)
      return 2;
    if (fields.respostas instanceof File && !fields.respostas) return 2;
    if (fields.comportamento === null) return 3;
    if (
      !(fields.comportamento instanceof File) &&
      fields.comportamento.length < 20
    )
      return 3;
    if (fields.comportamento instanceof File && !fields.comportamento) return 3;
    if (fields.observacoes === null) return 4;
    if (
      !(fields.observacoes instanceof File) &&
      fields.observacoes.length < 200
    )
      return 4;
    if (fields.observacoes instanceof File && !fields.observacoes) return 4;
    return 5;
  };

  return (
    <div
      style={{
        backgroundColor: "#E3E2EA",
      }}
      className={`min-h-full relative ${arboriaFont.className}`}
    >
      <header
        className={`flex shadow-sm justify-center header-background items-center text-white h-20 ${kallistoFont.className}`}
      >
        <h1 className="font-semibold text-3xl">DAI Assistente Inteligente</h1>
      </header>

      <section className="bg-white flex justify-between items-center shadow-md sticky top-0 z-50 text-purple-900 w-full mt-10 xl:px-48 pt-4 pb-4">
        <div className="w-full text-center xl:w-4/12 xl:text-start">
          <p className="font-bold text-2xl mb-4">Personalize sua DAI</p>
          <p>Envie arquivos .PDF contendo informações sobre cada etapa</p>
        </div>
        <div className="hidden xl:block w-7/12">
          <CustomizedSteppers steps={steps} activeStep={getActiveStep()} />
        </div>
      </section>

      <div className="flex flex-row justify-evenly items-start mt-8 w-full">
        <form
          className="bg-white shadow-sm rounded-md w-8/12"
          autoComplete="off"
        >
          <FormField
            id="negocio"
            title="Fale sobre o seu negócio:"
            description={[
              "Como uma nova funcionária, a DAI precisa saber um pouco sobre a empresa onde ela irá trabalhar.",
              "Ex.: Nome da empresa, estado onde está localizada, horario de atendimento, qual o produto, etc.",
            ]}
            rows={6}
            placeholder="Conte-nos sobre o seu negócio..."
            onChange={(res) => {
              setFields({ ...fields, negocio: res.value });
            }}
            onToggleButton={(res) => {
              if (res.type === "texto") {
                setFields({ ...fields, negocio: res.value });
                return;
              }
              setFields({ ...fields, negocio: null });
            }}
          />

          <FormField
            id="perguntas"
            title="Perguntas:"
            description={[
              "Quais as perguntas que você espera que a DAI responda durante o seu atendimento?",
              "Ex.: Qual horario de atendimento? Onde consigo comprar seu produto? Posso fazer um agendamento?",
            ]}
            rows={6}
            placeholder="O seu cliente pode ter dúvidas sobre..."
            onChange={(res) => {
              setFields({ ...fields, perguntas: res.value });
            }}
            onToggleButton={(res) => {
              if (res.type === "texto") {
                setFields({ ...fields, perguntas: res.value });
                return;
              }
              setFields({ ...fields, perguntas: null });
            }}
          />

          <FormField
            id="respostas"
            title="Respostas:"
            description={[
              "O que você informaria para um funcionário novo encarregado de responder essas perguntas?",
              "Ex.: Quando perguntarem a localização informe apenas a cidade, O valor do produto requer um orçamento, etc.",
            ]}
            rows={6}
            placeholder="A DAI deve responder..."
            onChange={(res) => {
              setFields({ ...fields, respostas: res.value });
            }}
            onToggleButton={(res) => {
              if (res.type === "texto") {
                setFields({ ...fields, respostas: res.value });
                return;
              }
              setFields({ ...fields, respostas: null });
            }}
          />

          <FormField
            id="comportamento"
            title="Comportamento:"
            description={[
              "Como você espera que a DAI se comporte? Seja sucinto e objetivo.",
            ]}
            rows={3}
            placeholder="Amigável, Formal..."
            onChange={(res) => {
              setFields({ ...fields, comportamento: res.value });
            }}
            onToggleButton={(res) => {
              if (res.type === "texto") {
                setFields({ ...fields, comportamento: res.value });
                return;
              }
              setFields({ ...fields, comportamento: null });
            }}
          />

          <FormField
            id="observacoes"
            title="Observações:"
            description={[
              "Alguma informação importante pra você não foi contemplada nas perguntas anteriores? Escreva aqui",
            ]}
            rows={6}
            placeholder="Não se acanhe, faça pontuações importantes..."
            onChange={(res) => {
              setFields({ ...fields, observacoes: res.value });
            }}
            onToggleButton={(res) => {
              if (res.type === "texto") {
                setFields({ ...fields, observacoes: res.value });
                return;
              }
              setFields({ ...fields, observacoes: null });
            }}
          />

          <button
            type="submit"
            className="flex w-full justify-center rounded-b-md bg-purple-900 px-3 py-3.5 text-lg font-semibold duration-300 leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
          >
            Concluído
          </button>
        </form>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500 pb-4">
        <span>&copy; 2024 Creath Digital. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
