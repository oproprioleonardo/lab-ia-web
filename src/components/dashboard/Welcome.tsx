"use client";

import { SessionData } from "@/models";
import { getSession } from "@/server-actions/auth.action";
import { Skeleton } from "@nextui-org/react";
import { useEffect, useState } from "react";

export default function Welcome() {
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
    <section className="mt-14 ml-6">
      <Skeleton isLoaded={isLoaded}>
        <span className={`text-2xl font-medium font-primary text-violet-600`}>
          Bem-vindo, {sessionData?.user.name}!
        </span>
      </Skeleton>
    </section>
  );
}
