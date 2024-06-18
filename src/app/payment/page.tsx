import Header from "@/components/header/Header";
import RedirectCard from "@/components/dashboard/RedirectCard";
import redditFont from "@/fonts/reddit-mono";
import ubuntu from "@/fonts/ubuntu";

export default function Payment() {
  return (
    <div className="min-h-full flex flex-col items-center background-img">
      <Header />

      <div className="w-9/12">
        <section>
          <div className="mt-14 ml-6">
            <span
              className={`text-2xl font-medium text-violet-600 ${ubuntu.className} font-medium`}
            >
              Pagamento
            </span>
          </div>
          <div className="mt-6 grid grid-rows-3 grid-cols-1 gap-y-12">
            <div className="row-span-1 col-span-1 py-2 px-6 bg-[#809AF833] bg-opacity-20 border-2 border-white shadow-md rounded-2xl text-purple-800 flex items-center">
              <span className={`${redditFont.className} font-medium text-base`}>
                Sua fatura está em dia, não há solicitações de pagamento no momento.
              </span>
            </div>

            <RedirectCard
              className="row-span-1 col-span-1"
              title="Pagar"
              icon="payment.svg"
              route="/payment"
            />

            <RedirectCard
              className="row-span-1 col-span-1"
              title="Recibos"
              icon="payment.svg"
              route="/payment"
            />
          </div>
        </section>
      </div>
    </div>
  );
}
