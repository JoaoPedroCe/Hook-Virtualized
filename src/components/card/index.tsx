type ForYouProps = {
  title: string;
  description: string;
  image: string;
};

export default function ForYou({ title, description, image }: ForYouProps) {
  return (
    <div className="flex flex-row min-w-fit w-full">
      <div className="flex flex-col bg-white shadow-base rounded-xl mb-4">
        <div>
          <img
            src={image}
            alt="promoções hiper saldão"
            className="h-[165px] w-[169px] rounded-t-xl"
          />
        </div>

        <div className="my-2">
          <div className="flex flex-row items-center justify-evenly">
            <p className="text-xs">{title}</p>
            <button className="text-[0.6rem] px-2 h-[1rem] rounded-full">
              Ver mais
            </button>
          </div>
          <p className="text-[0.6rem] text-center opacity-60 pb-2">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
