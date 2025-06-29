## Aula 04: Configuração e uso de botões

Nessa aula será apresentado a configuração de botões, os tipos de leitura de botões e a filtragem de botões.

# Configurando um botão

Para configurar um botão será necessário o uso da função PIN, logo, é necessário importá-la. O exemplo abaixo deixa claro a configuração necessária para um botão simples.

Exemplo de botão simples:

```python
from machine import Pin
botao = Pin(5, Pin.IN, Pin.PULL_UP) #Configuração do botão
```
Nessa configuração temos 3 elementos principais que estão atrelados a configuração da função PIN. A função PIN possui os seguintes elementos: Porta (que define qual GPIO que será utilizada), I/O (define se a porta será saída ou entrada) e Uso do resistor de Pull Up.

Para entender como cada um desses elementos influenciam no uso do botão é necessário entender suas relações com a ligação fisica do botão. Quando configuramos o botão com Pin.IN e Pin.PULL_UP, estamos dizendo ao microcontrolador que aquele pino será usado como entrada, e que ele deve utilizar um resistor de pull-up interno. Isso significa que, quando o botão estiver solto (aberto), o pino será mantido em nível lógico alto (1), graças ao resistor. Já quando o botão for pressionado, ele conectará o pino ao GND (terra), e o nível lógico lido será baixo (0).

Esta configuração é muito utilizada por ser simples e segura: não requer resistores externos nem prevenir leituras erradas devido às flutuações de tensão no pino (estado denominado de "flutuante").

# Tipo de leitura de botão

Existem 2 tipos de leitura de botões, o tipo de espera ativa (polling) e o tipo de leitura por interrupções.

A leitura de um botão por espera ativa ocorre quando o microcontrolador verifica constantemente o estado do botão. De modo que de tempos em tempos o processador dirige seu tempo de execução para verificar o estado do botão, e isso se repete em um ciclo.

Exemplo:

```python
from machine import Pin
import time

botao = Pin(5, Pin.IN, Pin.PULL_UP)

while True:
    if botao.value() == 0:  # 0 = pressionado
        print("Botão pressionado")
        time.sleep(0.2)  # Espera para evitar múltiplas leituras (debounce)
```

Nesse código temos um loop que se repete onde usamos a condicional "if". Essa estrutura condicional "if" é utilizada para verificar se uma condição é verdadeira. Se a condição for verdadeira, então o conteúdo do dentro da condicional será executado. Nesse caso, nosso código verifica constantemente o valor atual da variável "botao".
Caso a condição de verificação do botão não seja atendida, ou seja, o botão não esteja pressionado, o loop continuará a verificar o valor do botão.

O segundo tipo de leitura é por interrupção programada. Esse tipo de leitura não será vista nesta aula, mas para resumi-la ela é usada em projetos maiores ou mais eficientes, é melhor usar interrupções, que fazem o microcontrolador reagir apenas quando o botão é pressionado, sem precisar ficar perguntando a todo momento. Utiliza-se interrupções programadas para melhorar o desempenho e para se obter respostas mais instantâneas e que dependem do estado atual de outras possíveis variáveis.

# Filtragem de botões

Tomando ainda o exemplo do código anterior, vale ressaltar o uso do atraso de 0.2 segundos ao final da leitura, isso ocorre pois o botão é um elemento elétrico e, portanto, sujeito a flutuações quando faz contato com o condutor (fio). Essas flutuações podem levar a um erro do processador, que pode interpretar que o botão tenha sido acionado mais de uma vez.

# Desafio

O desafio dessa aula será utilizar os conhecimentos aprendidos para realizar a leitura de um botão e acender um led ao se pressionar o botão.


