## Aula 06: Uso de sensores

Sensores são dispositivos eletrônicos capazes de converter grandezas físicas (como temperatura, luz, umidade ou movimento) em sinais elétricos que podem ser lidos e interpretados pelo microcontrolador. Essa aula servirá para exemplificar o uso de sensores e apresentar novos conceitos nesse campo.

Os sinais elétricos dos sensores são digitais (apenas dois estados como um botão ou um sensor de presença PIR) ou analógicos (variam continuamente, como o valor de tensão lido por um sensor de luz ou um sensor de temperatura interno). O tratamento do sinal varia de acordo com o tipo de sensor, sinais do tipo digital podem necessitar de protocolos de comunicação ou leitura de padrões, enquanto sinais analógicos vão normalmente depender do ADC (Conversor Analógico-Digital) do microcontrolador.

Sinais digitais que demandam protocolos de comunicações serão vistos em aulas futuras, nessa aula o foco será em entender o funcionamento básico de sensores que usam um sinal analógico.

# Leitura de um sensor

A raspberry Pico Pi possui 3 entradas analógicas GPIO 26,27 e 28. Essas entradas são as que usaremos para medir sensores analógicos.

Normalmente o uso de sensores simples não irão necessitar de um tratamento especial como colocar divior de resistências ou filtros de tratamento, mas é importante sempre verificar as especificações de cada sensor e procurar seguir seu uso padrão.

Para entender os códigos envolvidos em uma leitura de sensor será utilizado o sensor de temperatura interno da raspberry. Não há necessidade de fazer nenhuma conexão, o sensor interno já está conectado a GPIO 4, logo, para ler-se os valores desse sensor é necessário fazer a leitura dessa saída. Abaixo está um exemplo de código simples de configuração de leitura

```python
import machine
import time

sensor_temperatura = machine.ADC(4)  # sensor interno, GPIO 4
conversao = 3.3 / (65535)  # Conversão para tensão. Tensão total 3.3. Valor máximo do ADC: 65535

while True:
    leitura = sensor_temperatura.read_u16() * conversao
    temperatura_celsius = 27 - (leitura - 0.706) / 0.001721
    print("Temperatura interna: {:.2f} °C".format(temperatura_celsius))
    time.sleep(2)
```

No começo desse código, linha 4, indica que será usado o ADC (Conversor Analógico-Digital) para se ler a saída da porta 4, a qual tem o sensor de temperatura interno atrelado. A variável "sensor_temperatura" simplesmente retorna um valor digital, essa leitura é chamada de "valor bruto", pois não possuí  nenhuma unidade, ela apenas representa o nível de tensão medida pelo adc e convertida em um numero puro.

Para descobrir o valor aproximado de tensão do sensor é necessário fazer uma conversão. Esse valor de conversão é feito na linha 5, onde tem-se 3.3 V (tensão máxima do sensor de temperatura) dividido por 65535 que é o número limite de valores do ADC (O ADC nesse caso possuí 16 bits. Vale lembrar que ele faz a conversão do valor análógico de tensão para um valor bruto digital, ou seja, se esse valor é digital ele deve ser representado no formato binário. 2 elevado a 16 é 65536 só que como é excluído a posição 0 o tamanho máximo de representações de valor bruto se torna 65535).

Já dentro do laço while é feita a conversão da leitura, onde é usado o método read_u16. O método read_u16 retorna o valor interno do ADC convertendo de binário para um número inteiro, o chamado "valor bruto", anteriormente citado, que será multiplicado pela variável conversão. Esse processo resultará em um valor de tensão, muito próximo do valor de tensão lido pelo ADC, que estará atrelado a variável "leitura".

Por último, utiliza-se os parâmetros de conversão do próprio sensor para converter tensão em temperatura. Isso é feito na linha 8, onde o valor da temperatura é armazenado na variável temperatura_celsius. Essa fórmula para o cálculo de temperatura é fornecida na documentação da raspberry pi e pode ser alterada dependendo o tipo de sensor de temperatura usado, por isso, é necessário conhecer a documentação do sensor usado.

(Imagem da documentação e fórmula do sensor)

Na parte final do código utilizamos o "print", uma função que nos ajuda verificar valores de variáveis nos consoles do Thonny. O "print" é muito útil em análise de códigos complexos. Nesse caso ele exibirá a seguinte mensagem "Temperatura interna: X °C", com X sendo o valor da temperatura medida. Isso será exibido a cada 2 segundos.

(Imagem do console com as mensagens)

Um sensor de temperatura muito simples de se usar é o Lm35. Seu uso será completamente igual ao sensor de temperatura interno, porém ele deve ser conectado a umas das 3 GPIO's analógicas (26, 27, 28).

(Imagem do sensor lm35)

# Desafio

Faça a montagem do sensor lm35 e meça temperaturas temperaturas.
