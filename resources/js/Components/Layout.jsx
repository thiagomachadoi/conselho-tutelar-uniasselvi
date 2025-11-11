import React, { useState } from 'react';
import img from "../../Images/logo.png"
import { Modal } from "./index";
import Swal from 'sweetalert2';
import ModalSobre from '../Pages/ModalSobre/ModalSobre';
import ModalServicos from '../Pages/ModalServicos/ModalServicos';

export default function Layout({ children }) {
    const [isModalServicosOpen, setIsModalServicosOpen] = useState(false);
    const [isModalSobreOpen, setIsModalSobreOpen] = useState(false);

    const handleEmRiscoAgora = () => {
        Swal.fire({
            icon: 'warning',
            title: 'Nos ligue em um de nossos meios de comunicação:',
            html: "<h2 className='text-2xl'><b>(00) 0000-1234 (Conselho Tutelar) <br> ou <br> (00) 1234-0000 (Prefeitura Municipal)</b></h2>"
        })
    }

    return (
        <>
            <Modal isOpen={isModalSobreOpen} onClose={() => setIsModalSobreOpen(false)}>
                <ModalSobre
                    setIsModalSobreOpen={setIsModalSobreOpen}
                />
            </Modal>
            <Modal isOpen={isModalServicosOpen} onClose={() => setIsModalServicosOpen(false)}>
                <ModalServicos
                    setIsModalServicosOpen={setIsModalServicosOpen}
                />
            </Modal>
            <div className="layout">
                <header className="bg-blue-600 text-white h-max-[80px] flex justify-between items-center">
                    <div className='layout-main'>
                        <img className="h-[80px] object-contain" src={img}/>
                        <div className='flex gap-4 text-2xl items-center p-2'>
                            <p
                                className='hover:cursor-pointer hover:underline'
                                onClick={() => setIsModalSobreOpen(true)}
                            >
                                Sobre
                            </p>
                            <p
                                className='hover:cursor-pointer hover:underline'
                                onClick={() => setIsModalServicosOpen(true)}
                            >
                                Serviços
                            </p>
                            <p
                                onClick={handleEmRiscoAgora}
                                className='hover:cursor-pointer hover:underline'
                            >
                                Contato
                            </p>
                        </div>
                    </div>
                </header>

                <div className="flex flex-1">
                    <main className="layout-main flex-1 py-6 px-40 sm:px-80">
                    {children}
                    </main>
                </div>
            </div>
        </>
    )
}
