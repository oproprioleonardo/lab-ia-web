"use client";

import { login } from "@/server-actions/auth.action";
import { useForm } from "react-hook-form";
import Alert from "@mui/material/Alert";
import { AlertTitle, Collapse, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors, isSubmitSuccessful },
  } = useForm();

  const [open, setOpen] = useState(false);

  const loginCall = async (data: any) => {
    await login(data);
  };

  return (
    <>
      <div
        style={{
          backgroundColor: "#773392",
          backgroundImage: "linear-gradient(180deg, #401d4e 0%, #000000 94%)",
        }}
        className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8"
      >
        <Collapse
          className="absolute w-80 top-7 right-7"
          in={!!errors.email?.message || !!errors.password?.message}
        >
          <Alert
            severity="error"
            className="bg-black text-red-300"
            action={
              <IconButton
                aria-label="close"
                color="inherit"
                size="small"
                onClick={() => {
                  clearErrors();
                }}
              >
                <CloseIcon fontSize="inherit" />
              </IconButton>
            }
            sx={{ mb: 2, fontSize: "1rem" }}
          >
            {(errors.email?.message as string) ||
              (errors.password?.message as string)}
          </Alert>
        </Collapse>

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
                  className="block text-sm font-medium leading-6 text-white"
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
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium leading-6 text-white"
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
                      minLength: 8,
                      maxLength: 30,
                    })}
                    aria-invalid={errors.password ? "true" : "false"}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    className="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-purple-900 px-3 py-1.5 text-sm font-semibold duration-300 leading-6 text-white shadow-sm hover:bg-purple-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-700"
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
