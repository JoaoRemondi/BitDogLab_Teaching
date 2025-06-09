## Aula 01: Introdução à BitDogLab e ao MicroPython

Para dar início a esta aula, é fundamental a leitura do material [Entendendo a BitDogLab](https://github.com/JoaoRemondi/BitDogLab_Teaching/blob/main/Material%20de%20apoio/Entendendo%20a%20BitdogLab.md), pois ele fornece os conhecimentos básicos necessários para a compreensão da placa BitDogLab e seus componentes. Também será de vital importância a leitura do material de instalação do Thonny IDE, que será a IDE que será utilizada nos exemplos e na realização das atividades.

# Primeiro código

Para começar, devemos entender que, ao escrever um código para um microcontrolador como a Raspberry Pi Pico, o primeiro passo é deixar claro quais ferramentas e recursos o programa vai utilizar. Isso é feito por meio das importações de bibliotecas, que são como caixas de ferramentas com funções prontas para usar.

Por exemplo, se quisermos controlar os pinos da placa — como acender um LED, ler um botão ou enviar sinais — precisamos importar uma função específica da biblioteca padrão do MicroPython chamada machine.

Sempre que importarmos uma função da biblioteca é como se estivessemos dizendo "quero usar essa ou aquela ferramenta no meu código".

Veja este caso específico:

```python
from machine import Pin

led = Pin()
```

Neste caso, estamos importando a função Pin que pertence a biblioteca machine. Essa função permitirá com possamos configurar os pinos da Raspberry como saídas ou entradas.

Há outras formas de se usar uma função sem necessária mente declará-la no início. Como nesse caso:
```python
from machine

led = machine.Pin()
```

Agora, nós também podemos utilizar a função Pin, porém toda vez que formos utiliza-la é necessário declarar "machine.Pin".

Com isto esclarecido, vamos escrever um simples código para acender um led e mantê-lo acesso:

```python
from machine import Pin  # Importa a função Pin para controlar os pinos da placa

led = Pin(Pin(11), Pin.OUT)  # Configura o pino 11 da raspberry como saída (led rgb)

led.value(1) #Define o valor da saída
```

Quando colocamos led.value estamos definindo o que teremos na saída dessa porta. Na saída comum de uma GPIO podemos ter o valor alto ou baixo, alto se refere ao valor da tensão de saída da raspberry. Alto = 3.3V e baixo = 0V. 

Com a tensão fornecida com o valor alto podemos acender o led.

Teste o código acima e veja o resultado.

# Aprimorando o código

Agora aprenderemos a estrutura de controle mais básica e que utilizaremos para fazer repetições no código, mais conhecidos como loops.

Para fazer loops de repetição simples utilizaremos a estrutura while. Essa estrutura depende de uma condição booleana e tem a propriedade de repetir tudo que estiver dentro dela sempre que a condição dentro de seu colchete for verdadeira.


Também adicionaremos a biblioteca time que é uma biblioteca exclusiva para funções relacionadas a contagem de tempo.

```python
from machine import Pin  # Importa a função Pin para controlar os pinos da placa

led = Pin(Pin(11), Pin.OUT)  # Configura o pino 11 da raspberry como saída (led rgb)
while (1):
  led.value(1) #Led acesso
  time.sleep(1) # espera 1 segundo
  led.value(0) #Led apagado
  time.sleep(1) # espera 1 segundo
```

- Por que o uso de "while(1)"?

A estrutura while é uma estrutura que depende de lógica booleana em sua condição. Na lógica booleana só é possível obtermos 2 resposta, sendo elas verdadeiro (1) ou falso (0). Dessa forma, sempre que algo verdadeiro estiver dentro do while ele executará o loop. Um exemplo engraçado é colocar uma verdade matemática no while, exemplo:

```python
from machine import Pin  # Importa a função Pin para controlar os pinos da placa

led = Pin(Pin(11), Pin.OUT)  # Configura o pino 11 da raspberry como saída (led rgb)
while (5>2):
  led.value(1) #Led acesso
  time.sleep(1) # espera 1 segundo
  led.value(0) #Led apagado
  time.sleep(1) # espera 1 segundo
```

Nesse caso, teriamos o mesmo efeito do antigo código.
