"use client";

import { login } from "@/server-actions/auth.action";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { arboriaFont } from "@/fonts/Arboria/arboria";
import { useState } from "react";
import ErrorNotification from "@/components/ErrorNotification";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState<{error: string} | null>(null);

  const getErrorsList = () => {
    const errorsList: string[] = [];
    if (errors.email) {
      errorsList.push(errors.email.message as string);
    }
    if (errors.password) {
      errorsList.push(errors.password.message as string);
    }
    if (loginError) {
      errorsList.push(loginError.error);
    }
    console.log(errorsList);
    return errorsList;
  }

  const loginCall = async (data: any) => {
    const errResp = await login(data);
    if (errResp) {
      setLoginError(errResp);
    } else {
      setLoginError(null);
    }
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#773392",
          backgroundImage: "linear-gradient(180deg, #271130 0%, #000000 94%)",
        }}
        className={`${arboriaFont.className} flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8`}
      >

        <ErrorNotification errors={getErrorsList()} onClose={() => {
          clearErrors();
          setLoginError(null);
        }}/>

        <div className="bg-black py-8 px-20 rounded-md max-w-fit self-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-14 w-auto"
              src="/creath.png"
              alt="Creath Digital"
            />
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              Entre na sua conta
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form
              className="space-y-6"
              onSubmit={handleSubmit(loginCall)}
              method="POST"
            >
              <div>
                <label
                  htmlFor="email"
                  className="block text-base font-medium leading-6 text-white"
                >
                  Endereço de e-mail
                </label>
                <div className="mt-2">
                  <input
                    {...register("email", {
                      required: "O e-mail é obrigatório",
                      maxLength: 80,
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "O e-mail é inválido",
                      },
                    })}
                    aria-invalid={errors.email ? "true" : "false"}
                    id="email"
                    name="email"
                    autoComplete="email"
                    className="block focus:outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-base font-medium leading-6 text-white"
                  >
                    Senha
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-purple-600 hover:text-purple-500"
                    >
                      Esqueceu a sua senha?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    {...register("password", {
                      required: "A senha é obrigatória",
                      minLength: {
                        value: 8,
                        message: "A senha deve ter no mínimo 8 caracteres",
                      },
                      maxLength: {
                        value: 20,
                        message: "A senha deve ter no máximo 20 caracteres",
                      },
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block focus:outline-none w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-900 px-3 py-1.5 text-base font-semibold duration-300 leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
                >
                  Entrar
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm text-gray-500">
              Não possui uma conta?{" "}
              <a
                href="#"
                className="font-semibold leading-6 text-purple-600 hover:text-purple-500"
              >
                Veja nossos planos
              </a>
            </p>
          </div>
        </div>

        <footer className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <p className="text-center text-sm text-gray-500">
            &copy; 2024 Creath Digital. Todos os direitos reservados.
          </p>
        </footer>
      </div>
    </>
  );
}
