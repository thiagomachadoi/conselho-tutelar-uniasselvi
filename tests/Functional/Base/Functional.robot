*** Settings ***
Documentation  Configurações padrão
Library  Browser

*** Variables ***
${NAVEGADOR}        chromium
${LINK}             http://localhost:8000/controle-gastos
${LARGURA_JANELA}   1700
${ALTURA_JANELA}    800

*** Keywords ***
Iniciar navegador
    New Browser    chromium    headless=false
    New Context
    New Page    ${LINK}
    Set Viewport Size    ${LARGURA_JANELA}    ${ALTURA_JANELA}

Finalizar teste
    Take Screenshot    fullPage=true