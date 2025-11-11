import Swal from "sweetalert2";
import { Button, Input, TextArea, Select, CheckboxInput } from "../../../Components";
import { useState } from "react";
import axios from "axios";

export default function ComoDenunciar({ optionsTipoSuspeita, optionsRelacaoSuspeitoVitima, optionsIdadeAproximadaVitima, divRef }) {
    const [valueLocal, setValueLocal] = useState('');
    const [valueDescricao, setValueDescricao] = useState('');
    const [valueIdadeExataVitima, setValueIdadeExataVitima] = useState('');
    const [valueIdadeAproximadaVitima, setValueIdadeAproximadaVitima] = useState(null);
    const [valueTipoSuspeita, setValueTipoSuspeita] = useState(null);
    const [valueRelacaoSuspeitoVitima, setValueRelacaoSuspeitoVitima] = useState(null);
    const [valueCheckboxAutorizaEnvio, setValueCheckboxAutorizaEnvio] = useState(false);

    const handleSubmit = async () => {
        const dadosForSubmit = {
            local: valueLocal,
            descricao: valueDescricao,
            idade_exata_vitima: valueIdadeExataVitima,
            idade_aproximada_vitima: valueIdadeAproximadaVitima,
            tipo_suspeita: valueTipoSuspeita,
            relacao_suspeito_vitima: valueRelacaoSuspeitoVitima
        }

        await axios.post('/denunciar', dadosForSubmit)
        .then((response) => {
            Swal.fire({
                icon: 'success',
                title: 'Sucesso!',
                text: "Denúncia registrada com sucesso"
            })
        }).catch((error) => {
            Swal.fire({
                icon: 'error',
                title: 'Ops...',
                text: "Ocorreu um erro ao registrar a denúncia! Tente novamente mais tarde."
            })
        });
    }

    const handleEmRiscoAgora = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Nos ligue em um de nossos meios de comunicação:',
            html: "<h2 className='text-2xl'><b>(00) 0000-1234 (Conselho Tutelar) <br> ou <br> (00) 1234-0000 (Prefeitura Municipal)</b></h2>"
        })
    }

    return (
        <div className="mt-20" ref={divRef}>
            <h2 className="text-3xl">Como denunciar</h2>

            <div className="p-6 mt-4 border rounded-md flex flex-col text-[30px] gap-4">
                <div className="flex justify-center">
                    <Button variant="alert" onClick={handleEmRiscoAgora}>
                        EM RISCO AGORA
                    </Button>
                </div>
                <Input
                    label='Local'
                    value={valueLocal}
                    onChange={(e) => setValueLocal(e?.target?.value)}
                />

                <TextArea
                    label='Descrição do que foi observado'
                    value={valueDescricao}
                    onChange={(e) => setValueDescricao(e?.target?.value)}
                />

                <div className="p-4 border rounded-md mb-5">
                    <Input
                        label="Idade exata da vítima"
                        value={valueIdadeExataVitima}
                        onChange={(e) => setValueIdadeExataVitima(e.target.value)}
                        disabled={!!valueIdadeAproximadaVitima}
                    />

                    <p className="flex justify-center">ou</p>

                    <Select
                        label="Idade aproximada"
                        options={optionsIdadeAproximadaVitima}
                        value={valueIdadeAproximadaVitima}
                        onChange={(e) => setValueIdadeAproximadaVitima(e)}
                        isDisabled={!!valueIdadeExataVitima}
                    />
                </div>

                <Select
                    label="Tipo de suspeita"
                    options={optionsTipoSuspeita}
                    value={valueTipoSuspeita}
                    onChange={(e) => setValueTipoSuspeita(e)}
                />

                <Select
                    label="Relacionamento do suspeito com a vítima"
                    options={optionsRelacaoSuspeitoVitima}
                    value={valueRelacaoSuspeitoVitima}
                    onChange={(e) => setValueRelacaoSuspeitoVitima(e)}
                />

                <CheckboxInput
                    label="Declaro que as informações são verdadeiras e autorizo o encaminhamento ao Conselho Tutelar."
                    checked={valueCheckboxAutorizaEnvio}
                    onChange={(e) => setValueCheckboxAutorizaEnvio(e.target.checked)}
                />

                <Button variant="warning" onClick={handleSubmit}>
                    Enviar
                </Button>
            </div>
        </div>
    )
}