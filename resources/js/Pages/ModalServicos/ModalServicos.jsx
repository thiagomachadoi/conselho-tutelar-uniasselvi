import { Button } from "../../Components";

export default function ModalServicos(props) {
    return (
        <>
            <div class="p-6 md:p-8 text-gray-800 leading-relaxed">
                <h2 class="text-2xl font-bold text-gray-900 mb-4">Nossos Serviços</h2>

                <p class="mb-4">
                    O site do <strong>Conselho Tutelar</strong> foi desenvolvido para oferecer à população 
                    um canal seguro, acessível e eficiente de comunicação com as equipes de proteção à infância 
                    e à adolescência. Nosso objetivo é agilizar o atendimento e o encaminhamento de denúncias, 
                    garantindo o bem-estar das crianças e adolescentes.
                </p>

                <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-2">📩 Denúncia Online</h3>
                <p class="mb-4">
                    Disponibilizamos um formulário digital intuitivo para o registro de denúncias de <strong>violência, negligência, abuso ou maus-tratos</strong>. 
                    As informações são enviadas diretamente ao <strong>Conselho Tutelar</strong> responsável, 
                    que avaliará o caso e tomará as medidas necessárias.
                </p>

                <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-2">🔒 Sigilo e Segurança</h3>
                <p class="mb-4">
                    Todas as denúncias são tratadas com total <strong>sigilo e confidencialidade</strong>. 
                    Os dados pessoais do denunciante são protegidos e utilizados apenas conforme a <strong>Lei Geral de Proteção de Dados (LGPD)</strong>.
                </p>

                <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-2">🤝 Acolhimento e Encaminhamento</h3>
                <p class="mb-4">
                    Após o recebimento da denúncia, a equipe do Conselho Tutelar realiza a verificação das 
                    informações e providencia o <strong>encaminhamento aos órgãos competentes</strong>, 
                    como o Ministério Público, Delegacia ou serviços de assistência social.
                </p>

                <h3 class="text-xl font-semibold text-gray-900 mt-6 mb-2">📞 Atendimento à Comunidade</h3>
                <p>
                    Além do recebimento de denúncias, o Conselho Tutelar presta atendimento presencial 
                    e remoto à população, oferecendo <strong>orientações sobre direitos, deveres e proteção</strong> de crianças e adolescentes, fortalecendo o papel da comunidade na rede de proteção.
                </p>
            </div>

            <Button
                className="w-full"
                onClick={() => props.setIsModalServicosOpen(false)}
            >
                Fechar
            </Button>
        </>
    );
}
