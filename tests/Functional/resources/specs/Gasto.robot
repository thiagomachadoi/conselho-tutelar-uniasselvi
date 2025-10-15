*** Settings ***
Documentation    Suíte de testes para gasto
Resource    ../../Base/Functional.robot
Library    ../fixtures/test.py

Test Setup       Iniciar navegador
Test Teardown    Finalizar teste

*** Test Cases ***
Deve cadastrar gasto
    Click    id=novo-gasto
    Type Text    id=name         Pizza do Jotop
    ${TESTE}=    test.teste
    Type Text    id=value        ${TESTE}
    Click        id=necessary
    Click        text=Sim
    Type Text    id=notes        Hamburgão
    Click        id=register-button
    Wait For Elements State    text=Novo gasto salvo com sucesso!