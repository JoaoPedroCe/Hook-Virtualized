import ForYou from "../card";

export default function Carousel() {
  return (
    <div className="flex flex-row example  p-4 gap-4 overflow-y-scroll">
      <ForYou
        title="Rede Credenciada"
        image="images/image2.png"
        description="Veja onde usar o seu cartão"
      />
      <ForYou
        title="Rede Credenciada"
        image="images/image2.png"
        description="Veja onde usar o seu cartão"
      />
      <ForYou
        title="Rede Credenciada"
        image="images/image2.png"
        description="Veja onde usar o seu cartão"
      />
    </div>
  );
}
