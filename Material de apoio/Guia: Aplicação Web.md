## Guia de uso de aplicação Web

Este guia apresenta o passo a passo para instalar, configurar simulações do Wokwi para uso em aplicações Web.

## **Requisitos**

Antes de começar, certifique-se de ter instalado:

- Visual Studio Code (versão mais recente)

- Conta gratuita no Wokwi (https://wokwi.com)

- Extensão “Wokwi Simulator” para VS Code

- Navegador atualizado (Chrome, Edge ou Firefox)

- Extensão Live Server

## **Instalação da extensão do Wokwi**

1. Abra o VS Code.

2. Acesse o menu lateral Extensions (ícone de quadradinho ou Ctrl + Shift + X).

3. Pesquise por “Wokwi”.

4. Selecione a extensão “Wokwi Simulator” e clique em Install.

Dica: Após a instalação, você verá um novo ícone do Wokwi na barra lateral do VS Code.

## **Configuração de chave Wokwi**

Essa etapa costuma ser simples, pois logo ao abrir a extensão ou algum documento que faz uso da extensão do Wokwi uma janela de configuração de chave aparece, então basta clicar nela que você será direcionado diretamente para o site da plataforma Wokwi. Mas caso essea janela não apareça, essas são as etapas a serem seguidas: 

1. Acesse sua conta no Wokwi (https://wokwi.com
) e faça login.

2. Vá para Settings / Account / API Keys (ou seção similar — pode aparecer como Developer ou Integrations).

3. Crie uma nova API key ou client id. Copie o valor gerado (ex.: wokwi_client_abcd1234...) e então o cole nas configurações da extensão.

## **Instalação da extensão Live Server**

1. Abra o VS Code.

2. Acesse o menu lateral Extensions (ícone de quadradinho ou Ctrl + Shift + X).

3. Pesquise por “Live Server”.

4. Faça a instalação clicando em instalar.

## Aplicação Web (Web-Application)

A aplicação Web utiliza um arquivo index.html que embute o simulador do Wokwi através de um iframe, permitindo a visualização e interação direta com a simulação dentro de uma página Web. Esse modelo é útil para integrar a BitDogLab virtual em sites educacionais, repositórios ou materiais didáticos.


