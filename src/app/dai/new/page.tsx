import FormField from "@/components/dai/new/FormField";
import { arboriaFont } from "@/fonts/Arboria/arboria";
import { Inter } from "next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function NewDai() {
  return (
    <div
      style={{
        backgroundColor: "#E3E2EA",
      }}
      className={`min-h-full relative ${arboriaFont.className}`}
    >
      <header className="flex shadow-sm justify-center items-center bg-purple-900 text-white h-20">
        <h1 className="font-semibold text-3xl">DAI Assistente Inteligente</h1>
      </header>

      <section className="bg-white shadow-md sticky top-0 z-50 text-purple-900 w-full mt-10 pl-48 pt-4 pb-4 pr-20">
        <p className="font-bold text-2xl mb-4">Personalize sua DAI</p>
        <p>Envie arquivos .PDF contendo informações sobre cada etapa</p>
      </section>

      <div className="flex flex-row justify-center items-center mt-8 w-full">
        <form className="bg-white shadow-sm rounded-md w-8/12" autoComplete="off">
          <FormField
            id="negocio"
            title="Fale sobre o seu negócio:"
            description={[
              "Como uma nova funcionária, a DAI precisa saber um pouco sobre a empresa onde ela irá trabalhar.",
              "Ex.: Nome da empresa, estado onde está localizada, horario de atendimento, qual o produto, etc.",
            ]}
            rows={6}
            placeholder="Conte-nos sobre o seu negócio..."
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
          />

          <FormField
            id="observacoes"
            title="Observações:"
            description={[
              "Alguma informação importante pra você não foi contemplada nas perguntas anteriores? Escreva aqui",
            ]}
            rows={6}
            placeholder="Não se acanhe, faça pontuações importantes..."
          />

          <button
            type="submit"
            className="flex w-full justify-center rounded-b-md bg-purple-900 px-3 py-3.5 text-lg font-semibold duration-300 leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
          >Concluído</button>

        </form>
      </div>

      <footer className="mt-12 text-center text-sm text-gray-500 pb-4">
        <span>&copy; 2024 Creath Digital. Todos os direitos reservados.</span>
      </footer>
    </div>
  );
}
