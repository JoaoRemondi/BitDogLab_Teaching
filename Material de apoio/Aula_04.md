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
