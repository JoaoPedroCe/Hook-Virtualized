export default function ForYou() {
  return (
    <div className="flex flex-col items-center justify-center w-full px-6 h-full">
      <div className="flex flex-row space-x-4 w-full">
        <div className="flex flex-col bg-white shadow-base rounded-xl mb-4">
          <div>
            <img
              src="images/image.png"
              alt="promoções hiper saldão"
              className="h-[165px] w-[169px] rounded-t-xl"
            />
          </div>

          <div className="my-2">
            <div className="flex flex-row items-center justify-evenly">
              <p className="text-xs">Ofertas Exclusivas!</p>
              <button className="text-[0.6rem] px-2 h-[1rem] rounded-full">
                Ver mais
              </button>
            </div>
            <p className="text-[0.6rem] text-center opacity-60 pb-2">
              Confira aqui suas ofertas exclusivas
            </p>
          </div>
        </div>

        <div className="flex flex-col bg-white shadow-base rounded-xl mb-4">
          <div>
            <img
              src="images/image2.png"
              alt="promoções hiper saldão"
              className="h-[165px] w-[169px] rounded-t-xl"
            />
          </div>

          <div className="my-2">
            <div className="flex flex-row items-center justify-evenly">
              <p className="text-xs">Rede Credenciada</p>
              <button className="text-[0.6rem] px-2 h-[1rem] rounded-full">
                Ver mais
              </button>
            </div>
            <p className="text-[0.6rem] text-center opacity-60 pr-10 pb-2">
              Veja onde usar o seu cartão
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
