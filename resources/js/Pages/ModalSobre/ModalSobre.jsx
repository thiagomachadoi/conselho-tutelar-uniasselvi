import { Button } from "../../Components";

export default function ModalSobre(props) {
    return (
        <>
            <h1 className="my-3 text-xl font-bold">Sobre o Projeto / Sobre Nós</h1>

            <p className="text-justify leading-relaxed">
                Este site foi criado com o objetivo de facilitar o acesso à denúncia de casos de abuso, maus-tratos ou negligência contra crianças e adolescentes.
                A plataforma tem como missão oferecer um canal <strong>rápido, anônimo e seguro</strong>, conectando as informações diretamente aos órgãos responsáveis, como o Conselho Tutelar e serviços de proteção à infância.
                Nosso compromisso é <strong>proteger quem não pode se defender</strong> e garantir que cada denúncia receba a atenção necessária.
            </p>

            <p className="mt-2 text-justify leading-relaxed">
                Todos os dados enviados são tratados conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong> e mantidos em sigilo.
            </p>

            <h2 className="mt-5 mb-3 text-lg font-semibold">Como funciona a denúncia</h2>

            <ol className="list-decimal list-inside space-y-3 mb-3">
                <li>
                    <strong>Acesse o formulário de denúncia.</strong><br />
                    <span className="text-gray-700">
                        Você pode relatar qualquer suspeita de violência, negligência, abuso ou exploração infantil.
                    </span>
                </li>
                <li>
                    <strong>Preencha as informações que souber.</strong><br />
                    <span className="text-gray-700">
                        Informe o que aconteceu, onde, quando e, se possível, quem estava envolvido.
                        Não é obrigatório saber todos os detalhes — o mais importante é não ficar em silêncio.
                    </span>
                </li>
                <li>
                    <strong>Envie sua denúncia.</strong><br />
                    <span className="text-gray-700">
                        Os dados são enviados de forma segura e anônima para o Conselho Tutelar ou órgãos competentes da sua região.
                    </span>
                </li>
                <li>
                    <strong>Análise e encaminhamento.</strong><br />
                    <span className="text-gray-700">
                        A equipe responsável analisa o caso e toma as medidas cabíveis, podendo acionar escolas, serviços sociais ou autoridades policiais, conforme a gravidade da situação.
                    </span>
                </li>
                <li>
                    <strong>Proteção garantida.</strong><br />
                    <span className="text-gray-700">
                        Nenhuma informação pessoal do denunciante é divulgada.
                        O sistema segue as diretrizes da Lei Geral de Proteção de Dados (LGPD) e prioriza o sigilo absoluto.
                    </span>
                </li>
            </ol>

            <Button
                className="w-full"
                onClick={() => props.setIsModalSobreOpen(false)}
            >
                Fechar
            </Button>
        </>
    );
}
