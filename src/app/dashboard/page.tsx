"use client";

import Header from "@/components/Header";
import { useEffect, useState } from "react";
import { SessionData } from "@/models";
import { getSession } from "@/server-actions/auth.action";
import ubuntu from "@/fonts/ubuntu";
import { Card, CardBody, Skeleton, Switch } from "@nextui-org/react";
import arboriaFont from "@/fonts/arboria";
import redditFont from "@/fonts/reddit-mono";
import Image from "next/image";

export default function Dashboard() {
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isLoaded, setLoaded] = useState(false);

  useEffect(() => {
    getSession().then((session) => {
      if (!session) return;
      setSessionData(session);
      setLoaded(true);
    });
  }, [setSessionData, setLoaded]);

  return (
    <div className="min-h-full flex flex-col items-center background-img">
      <Header />

      <div className="w-10/12">
        <section className="mt-12 ml-6">
          <Skeleton isLoaded={isLoaded}>
            <span
              className={`text-2xl font-medium ${ubuntu.className} text-violet-600`}
            >
              Bem-vindo, {sessionData?.user.name}!
            </span>
          </Skeleton>
        </section>

        <section className="mt-12 grid grid-cols-4 grid-rows-4 gap-14">
          <Card className="row-span-2 bg-opacity-20 col-span-2 bg-[#809AF833] border-2 border-white flex items-center justify-center shadow-md">
            <CardBody className="w-11/12 my-8">
              <div className="mb-6 p-2 text-violet-700">
                <p className={`px-2 ${ubuntu.className} font-bold text-2xl`}>
                  Sua DAI está ONLINE!
                </p>

                <p
                  className={`px-2 mt-4 text-sm font-medium ${arboriaFont.className}`}
                >
                  Sua assistente está disponível para uso, desative no botão a
                  baixo.
                </p>
              </div>

              <div className="bg-white bg-opacity-40 w-full p-2 border-2 rounded-[36px] border-blue-300 flex flex-row justify-between items-center">
                <span
                  className={`text-colorful text-base font-semibold px-4 ${redditFont.className}`}
                >
                  ONLINE
                </span>
                <Switch defaultSelected size="lg" />
              </div>
            </CardBody>
          </Card>

          <Card className="row-span-1 col-span-2 bg-white bg-opacity-60 cursor-pointer hover:bg-opacity-100">
            <CardBody className="mx-6 my-2 text-purple-800 flex flex-col justify-between">
              <div className="flex flex-row items-center">
                <Image
                  src={"robo.svg"}
                  alt="Robo"
                  width={24}
                  height={24}
                ></Image>
                <span
                  className={`ml-3 ${redditFont.className} font-medium text-base`}
                >
                  Personalizar sua DAI
                </span>
              </div>
              <div>
                <span className={`${arboriaFont.className} font-normal text-sm`}>Requisitar mudança de Comportamentos ou Conhecimentos da DAI</span>
              </div>
            </CardBody>
          </Card>

          <Card className="row-span-1 col-span-2 bg-white bg-opacity-60 cursor-pointer hover:bg-opacity-100">
          <CardBody className="mx-6 my-2 text-purple-800 flex flex-col justify-between">
              <div className="flex flex-row items-center">
                <Image
                  src={"payment.svg"}
                  alt="Cartão"
                  width={24}
                  height={24}
                ></Image>
                <span
                  className={`ml-3 ${redditFont.className} font-medium text-base`}
                >
                  Pagamento
                </span>
              </div>
              <div>
                <span className={`${arboriaFont.className} font-normal text-sm`}>Informações de pagamento</span>
              </div>
            </CardBody>
          </Card>

          <Card className="row-span-2 col-span-4 bg-white bg-opacity-60">
            <CardBody>
              <p>Teste</p>
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
}
