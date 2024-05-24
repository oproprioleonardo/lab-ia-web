"use client";

import { login } from "@/server-actions/auth.action";
import { useForm } from "react-hook-form";

import { arboriaFont } from "@/fonts/Arboria/arboria";
import { useState } from "react";
import ErrorNotification from "@/components/ErrorNotification";
import { LoadingButton } from "@mui/lab";
import { kallistoFont } from "@/fonts/Kallisto/kallisto";
import { TextField } from "@mui/material";

export default function SignIn() {
  const {
    register,
    handleSubmit,
    clearErrors,
    formState: { errors },
  } = useForm();
  const [loginError, setLoginError] = useState<{ error: string } | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getErrorsList = () => {
    const errorsList: string[] = [];
    if (loginError) errorsList.push(loginError.error);
    return errorsList;
  };

  const loginCall = async (data: any) => {
    setIsLoading(true);
    const errResp = await login(data);
    if (errResp) setLoginError(errResp);
    else setLoginError(null);
    setIsLoading(false);
  };

  return (
    <>
      <div
        className={`${arboriaFont.className} flex min-h-full flex-1 flex-col items-center`}
      >
        <header
          className={`flex mt-8 shadow-sm w-full justify-start items-center header-background text-white h-20 ${kallistoFont.className}`}
        >
          <h1 className={`ml-24 font-semibold text-2xl`}>
            DAI Assistente Inteligente
          </h1>
        </header>

        <ErrorNotification
          errors={getErrorsList()}
          onClose={() => {
            clearErrors();
            setLoginError(null);
          }}
        />

        <div className="flex-grow flex items-center justify-center">
          <div className="bg-gray-50 py-8 px-20 rounded-xl max-w-fit self-center text-purple-800">
            <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <h2
                className={`mt-6 text-center text-3xl font-bold leading-9 tracking-tight ${arboriaFont.className}`}
              >
                Log-in
              </h2>
            </div>

            <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
              <form
                className="space-y-6"
                onSubmit={handleSubmit(loginCall)}
                method="POST"
              >
                
                  <div className="mt-2">
                    <TextField
                    label="E-mail"
                    variant="outlined"
                      {...register("email", {
                        required: "O e-mail é obrigatório",
                        maxLength: 80,
                        pattern: {
                          value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                          message: "O e-mail é inválido",
                        },
                      })}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message as string : ""}
                      id="email"
                      name="email"
                      autoComplete="email"
                      style={{ width: "100%" }}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          fontWeight: "bold",
                          backgroundColor: "#e1e2e6",
                          borderWidth: "0px",
                          border: "none",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "&.Mui-focused": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "&:hover:not(.Mui-focused)": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "& .MuiInputLabel-outlined": {
                          color: "#553c9a",
                          fontWeight: "bold",
                          border: "none",
                          borderWidth: "0px",
                          "&.Mui-focused": {
                            border: "none",
                            borderWidth: "0px",
                            color: "#553c9a",
                            fontWeight: "bold",
                          },
                        },
                      }}
                    />
                  </div>
                

                
                  <div className="mt-4">
                    <TextField
                      label="Senha"
                      variant="outlined"
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
                      error={!!errors.password}
                      helperText={errors.password ? errors.password.message as string : ""}
                      id="password"
                      name="password"
                      type="password"
                      autoComplete="current-password"
                      style={{ width: "100%"}}
                      sx={{
                        "& .MuiOutlinedInput-root": {
                          fontWeight: "bold",
                          backgroundColor: "#e1e2e6",
                          borderWidth: "0px",
                          border: "none",
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "&.Mui-focused": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "&:hover:not(.Mui-focused)": {
                          "& .MuiOutlinedInput-notchedOutline": {
                            border: "none",
                            borderWidth: "0px",
                          },
                        },
                        "& .MuiInputLabel-outlined": {
                          color: "#553c9a",
                          fontWeight: "bold",
                          border: "none",
                          borderWidth: "0px",
                          "&.Mui-focused": {
                            border: "none",
                            borderWidth: "0px",
                            color: "#553c9a",
                            fontWeight: "bold",
                          },
                        },
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
                    className="w-full h-10 rounded-md text-black bg-cyan-500 px-3 py-3 text-base font-semibold duration-300 shadow-sm hover:bg-cyan-400"
                    loading={isLoading}
                    type="submit"
                    variant="contained"
                  >
                    {!isLoading && "Entrar"}
                  </LoadingButton>
                </div>
              </form>

              <p className="mt-10 text-center text-sm">
                Não possui uma conta?{" "}
                <a
                  href="#"
                  className="font-semibold leading-6 hover:text-purple-600"
                >
                  Veja nossos planos
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
