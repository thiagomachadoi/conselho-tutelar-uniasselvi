import { Button, Layout } from "../../Components";
import campanhaImg from "../../../Images/campanha.png"
import ComoDenunciar from "./Components/ComoDenunciar";
import { useRef } from "react";

export default function HomeUsuario(props) {
    const divRef = useRef(null);

    const handleScroll = () => {
        divRef.current.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <>
            <Layout>
                <title>Home</title>
                <div className="w-full">
                    <div className="w-full mt-20 flex justify-between items-center">
                        <div className="w-[50%]">
                            <h1 className="text-4xl font-bold pb-6">Denúncia de abuso ou maus-tratos</h1>
                            <h2 className="text-3xl">Utilize nosso formulário para denunciar casos de abuso ou maus-tratos contra crianças e adolescentes.</h2>
                            <Button
                                className='text-4xl mt-5 !p-5'
                                variant='warning'
                                onClick={handleScroll}
                            >
                                Denunciar
                            </Button>
                        </div>
                        <div className="w-[50%] flex justify-center">
                            <img src={campanhaImg} className="object-contain" alt="Imagem campanha" />
                        </div>
                    </div>
                    <ComoDenunciar
                        optionsTipoSuspeita={props.optionsTipoSuspeita}
                        optionsRelacaoSuspeitoVitima={props.optionsRelacaoSuspeitoVitima}
                        optionsIdadeAproximadaVitima={props.optionsIdadeAproximadaVitima}
                        divRef={divRef}
                    />
                </div>
            </Layout>
        </>
    )
}