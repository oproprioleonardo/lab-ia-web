import { AuthService } from "@/services/auth.service";
import { redirect } from "next/navigation";

export default function Home() {
  const token = new AuthService().getToken();
  if (!token) {
    return redirect("/sign-in");
  }


  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="bg-black py-8 px-20 rounded-md max-w-fit self-center">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
           
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
              
            </h2>
          </div>

        </div>
      </div>
    </>
  );
}