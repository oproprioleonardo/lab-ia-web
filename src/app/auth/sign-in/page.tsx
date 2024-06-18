"use client";

import { login } from "@/server-actions/auth.action";
import { useForm } from "react-hook-form";

import { useState } from "react";
import { LoadingButton } from "@mui/lab";

import "react-toastify/dist/ReactToastify.min.css";
import { ToastContainer, toast } from "react-toastify";
import { toastConfig } from "@/utils";
import { Input } from "@nextui-org/react";
import { EyeSlashFilledIcon } from "@/icons/EyeSlashFilledIcon";
import { EyeFilledIcon } from "@/icons/EyeFilledIcon";

export default function SignIn() {
  const [isVisible, setIsVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginCall = async (data: any) => {
    setIsLoading(true);
    const errResp = await login(data);
    if (errResp) toast.error(errResp.error, toastConfig);
    setIsLoading(false);
  };

  return (
    <div className="min-h-full relative flex flex-col justify-center items-center background-img">
      <ToastContainer />
      <div className={`font-secondary z-10 h-fit`}>
        <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-300 to-purple-300 p-1">
          <div className="bg-gray-50 py-8 px-20 max-w-fit self-center rounded-lg text-purple-800">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div
                className={`mt-6 text-center text-colorful text-3xl font-bold leading-9 tracking-tight font-secondary`}
              >
                Log-in
              </div>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                onSubmit={handleSubmit(loginCall)}
                method="POST"
              >
                <div className="mt-2">
                  <Input
                    label="E-mail"
                    {...register("email", {
                      required: "O e-mail é obrigatório",
                      maxLength: 80,
                      pattern: {
                        value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                        message: "O e-mail é inválido",
                      },
                    })}
                    isInvalid={!!errors.email}
                    errorMessage={
                      errors.email ? (errors.email.message as string) : ""
                    }
                    id="email"
                    name="email"
                    autoComplete="email"
                    classNames={{
                      base: "w-full",
                      inputWrapper:
                        "bg-white border-2 border-blue-300 rounded-md data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus-visible=true]:ring-0",
                      label:
                        "text-purple-800 font-medium group-data-[filled-within=true]:text-purple-800",
                    }}
                  />
                </div>

                <div className="mt-4">
                  <Input
                    label="Senha"
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
                    isInvalid={!!errors.password}
                    errorMessage={
                      errors.password ? (errors.password.message as string) : ""
                    }
                    id="password"
                    name="password"
                    autoComplete="current-password"
                    endContent={
                      <button
                        className="focus:outline-none"
                        type="button"
                        onClick={toggleVisibility}
                      >
                        {isVisible ? (
                          <EyeSlashFilledIcon className="text-2xl text-purple-800 pointer-events-none" />
                        ) : (
                          <EyeFilledIcon className="text-2xl text-purple-800 pointer-events-none" />
                        )}
                      </button>
                    }
                    type={isVisible ? "text" : "password"}
                    classNames={{
                      base: "w-full",
                      inputWrapper:
                        "bg-white border-2 border-blue-300 rounded-md data-[hover=true]:bg-white group-data-[focus=true]:bg-white group-data-[focus-visible=true]:ring-0",
                      label:
                        "text-purple-800 font-medium group-data-[filled-within=true]:text-purple-800",
                    }}
                  />
                </div>

                <div className="text-base w-full text-center underline">
                  <a href="#" className="font-semibold hover:text-purple-600">
                    Esqueceu a sua senha?
                  </a>
                </div>

                <div>
                  <LoadingButton
                    className="w-full h-10 rounded-md text-white normal-case hover:text-gray-50 btn-background px-3 py-3 text-base font-medium shadow-sm"
                    loading={isLoading}
                    type="submit"
                    variant="contained"
                    sx={{
                      ".MuiLoadingButton-loadingIndicator": {
                        color: "white",
                      },
                    }}
                  >
                    {!isLoading && "Entrar"}
                  </LoadingButton>
                </div>
              </form>

              <p className="mt-12 mb-8 text-center text-sm">
                Não possui uma conta?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 hover:text-purple-600 underline"
                >
                  Veja nossos planos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
