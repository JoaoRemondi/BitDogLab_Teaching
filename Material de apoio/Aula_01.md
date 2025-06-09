## Aula 01: Introdução à BitDogLab e ao MicroPython

Para dar início a esta aula, é fundamental a leitura do material [Entendendo a BitDogLab](https://github.com/JoaoRemondi/BitDogLab_Teaching/blob/main/Material%20de%20apoio/Entendendo%20a%20BitdogLab.md), pois ele fornece os conhecimentos básicos necessários para a compreensão da placa BitDogLab e seus componentes. Também será de vital importância a leitura do material de instalação do Thonny IDE, que será a IDE que será utilizada nos exemplos e na realização das atividades.

# Primeiro código

Para começar, devemos entender que, ao escrever um código para um microcontrolador como a Raspberry Pi Pico, o primeiro passo é deixar claro quais ferramentas e recursos o programa vai utilizar. Isso é feito por meio das importações de bibliotecas, que são como caixas de ferramentas com funções prontas para usar.

Por exemplo, se quisermos controlar os pinos da placa — como acender um LED, ler um botão ou enviar sinais — precisamos importar uma função específica da biblioteca padrão do MicroPython chamada machine.

Sempre que importarmos uma função da biblioteca é como se estivessemos dizendo "quero usar essa ou aquela ferramenta no meu código".

Veja este caso específico:

```python
from machine import Pin
```


Nesse caso estamos importando a função Pin que pertence a biblioteca machine. Essa função permitirá com possamos configurar os pinos da Raspberry como saídas ou entradas.

