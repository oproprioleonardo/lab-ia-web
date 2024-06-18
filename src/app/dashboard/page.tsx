import Header from "@/components/header/Header";
import { Card, CardBody, Switch } from "@nextui-org/react";
import Image from "next/image";
import RedirectCard from "@/components/dashboard/RedirectCard";
import Welcome from "@/components/dashboard/Welcome";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard",
};

export default function Dashboard() {
  return (
    <div className="min-h-full flex flex-col items-center background-img">
      <Header />

      <div className="w-9/12">
        <Welcome />

        <section className="mt-12 grid grid-cols-4 grid-rows-4 gap-14 pb-4">
          <Card className="row-span-2 bg-opacity-20 col-span-4 lg:col-span-2 bg-[#809AF833] border-2 border-white flex items-center justify-center shadow-md rounded-3xl">
            <CardBody className="w-11/12 py-10 flex flex-col">
              <div className="px-2 mb-8 text-violet-700">
                <p className={`px-2 font-primary font-bold text-2xl`}>
                  Sua DAI está ONLINE!
                </p>

                <p className={`px-2 mt-4 text-sm font-medium font-secondary`}>
                  Sua assistente está disponível para uso, desative no botão a
                  baixo.
                </p>
              </div>

              <div className="bg-white bg-opacity-40 w-full p-2 border-2 rounded-[36px] border-blue-300 flex flex-row justify-between items-center">
                <span
                  className={`text-colorful text-base font-semibold px-4 font-mono`}
                >
                  ONLINE
                </span>
                <Switch defaultSelected size="lg" />
              </div>
            </CardBody>
          </Card>

          <RedirectCard
            className="row-span-1 col-span-4 lg:col-span-2"
            title="Personalizar DAI"
            description="Requisitar mudança de Comportamentos ou Conhecimentos da DAI"
            icon="robo.svg"
            route="/dai"
          />
          <RedirectCard
            className="row-span-1 col-span-4 lg:col-span-2"
            title="Pagamento"
            description="Informações de pagamento"
            icon="payment.svg"
            route="/payment"
          />

          <Card className="row-span-2 col-span-4 bg-white bg-opacity-60 border-2 shadow-md border-white rounded-3xl flex items-center">
            <CardBody className="my-6 w-11/12 text-violet-700">
              <div className="mb-6 p-2">
                <span
                  className={`px-2 font-secondary text-2xl font-medium text-colorful`}
                >
                  Chave de acesso
                </span>

                <p className={`px-2 mt-4 text-sm font-medium font-secondary`}>
                  Sua chave permite que você faça várias coisas como abrir e
                  fechar portas.
                </p>
              </div>

              <div className="flex flex-row justify-between">
                <div className="flex-grow p-4 flex items-center bg-white bg-opacity-70 border-blue-300 border-2 rounded-2xl cursor-pointer hover:bg-opacity-100 hover:bg-gray-100 duration-300">
                  <span className={`text-sm font-secondary font-normal`}>
                    Gerar Chave
                  </span>
                </div>

                <div className="ml-6 p-4 bg-white bg-opacity-70 flex flex-row items-center border-blue-300 border-2 rounded-2xl cursor-pointer hover:bg-opacity-100 hover:bg-gray-100 duration-300">
                  <Image src={"copy.svg"} alt="Copiar" width={16} height={16} />
                  <span className={`ml-2 text-sm font-secondary font-medium`}>
                    Copiar
                  </span>
                </div>
              </div>
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
}
