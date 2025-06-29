## Aula 05: Construindo um semáforo

O objetivo dessa aula é através dos conceitos das aulas anteriores, fazer a montagem de um semáforo hipotético. Para isso, é necessário aprender mais um conceito importante e que é muito útil na programação.

Na última aula foi apresentado e usado a condicional "if".
O material desta aula será o aprendizado da estrutura de repetição "for", que é utilizada quando queremos repetir uma ação um número conhecido de vezes.

A estrutura "for" permite percorrer uma sequência de valores (como uma lista, uma string ou uma faixa de números) e executar um bloco de código para cada valor dessa sequência.

Exemplo de uso simples do "for":

```python
for i in range(5):
    print(i)
```

O for ao contrário do while repete apenas o numero de vezes determinado pelo range, como há um range  de 5 o código irá se repetir 5 vezes com o valor da variável i indo de 0 a 4, criando uma sequência de 0,1,2,3,4.

Outro exemplo de uso:

```python
from machine import Pin  # Importa a função Pin para controlar os pinos da placa

led = Pin(Pin(11), Pin.OUT)  # Configura o pino 11 da raspberry como saída (led rgb)
for i in range(5)
  led.value(1) #Led acesso
  time.sleep(1) # espera 1 segundo
  led.value(0) #Led apagado
  time.sleep(1) # espera 1 segundo
```

Nesse código o led acende e apaga 5 vezes com intervalos de 1 segundo.

O Desafio dessa aula é criar um semáforo/sinaleiro simples com as seguintes especificações:

Funcionamento do semáforo:
- Quando não há nenhum pedestre querendo atravessar o led do semáforo permanece verde
- Ao ser pressionado o botão o Led deve mudar sua cor para amarelo e permanecer nessa cor por 8, emitindo beeps de 1 em 1 segundo. 
- Após isso, o led deve permanecer vermelho por 12 segundos, sinalizando parada total dos veículos
- Nos últimos 6 segundos o led vermelho deve piscar e emitir sons de 1 em 1 segundo

