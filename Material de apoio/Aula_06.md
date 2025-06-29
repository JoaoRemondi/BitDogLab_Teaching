## Aula 06: Uso de sensores

Sensores são dispositivos eletrônicos capazes de converter grandezas físicas (como temperatura, luz, umidade ou movimento) em sinais elétricos que podem ser lidos e interpretados pelo microcontrolador. Essa aula servirá para exemplificar o uso de sensores e apresentar novos conceitos nesse campo.

Os sinais elétricos dos sensores são digitais (apenas dois estados como um botão ou um sensor de presença PIR) ou analógicos (variam continuamente, como o valor de tensão lido por um sensor de luz ou um sensor de temperatura interno). O tratamento do sinal varia de acordo com o tipo de sensor, sinais do tipo digital podem necessitar de protocolos de comunicação ou leitura de padrões, enquanto sinais analógicos vão normalmente depender do ADC (Conversor Analógico-Digital) do microcontrolador.

Sinais digitais que demandam protocolos de comunicações serão vistos em aulas futuras, nessa aula o foco será em entender o funcionamento básico de sensores que usam um sinal analógico.
