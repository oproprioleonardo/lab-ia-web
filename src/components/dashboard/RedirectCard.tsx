"use client";

import { Card, CardBody } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function RedirectCard({
  title,
  description,
  icon,
  route,
  className = "",
}: {
  title: string;
  description?: string;
  icon: string;
  route: string;
  className?: string;
}) {
  const router = useRouter();

  return (
    <div onClick={() => router.push(route)} className={className}>
      <Card className="py-2 px-6 bg-white bg-opacity-60 border-2 border-white h-full w-full shadow-md cursor-pointer hover:bg-opacity-100 rounded-2xl">
        <CardBody className="text-purple-800 flex flex-col">
          <div className="flex flex-row items-center">
            <Image src={icon} alt="icone" width={24} height={24} />
            <span
              className={`ml-3 font-mono font-medium text-base`}
            >
              {title}
            </span>
          </div>
          {description && (
            <div className="mt-2">
              <span className={`font-secondary font-normal text-sm`}>
                {description}
              </span>
            </div>
          )}
        </CardBody>
      </Card>
    </div>
  );
}
