## Aula 03: Buzzer

Para utilizar o Buzzer não é necessário a nenhuma função externa, apenas a função da própria bitdoglab, a função PWM (Pulse Width Modulation – Modulação por Largura de Pulso. A função PWM ). Em vez de enviar um sinal analógico contínuo (o que a Raspberry Pi Pico não faz nativamente), o PWM liga e desliga rapidamente um pino digital em uma frequência fixa. 
Essa função pode ser utilizada da seguinte forma:

```python
buzzer = PWM(Pin(21))
```

Nesse caso foi definido a saída 21 da Raspberry Pico Pi como uma saída PWM e além disso define-se a variável "buzzer" como sendo como a representação de um objeto PWM que contralo o pino 21. Para utilizar essa variável é necessário definir a frequência da saída PWM, essa frequência será a exata frequência com que o buzzer irá funcionar.

Assim como no exemplo:

```python
buzzer.freq(311)
buzzer.duty_u16(40000)
```
Na primeira linha define-se a frequência do sinal PWM enviado ao buzzer, ou seja, o tom que ele vai emitir. Na segunda linha define-se o volume em que se escuta o som do buzzer. Sendo 0 sem som algum e 65535 o volume máximo.

Com essas ferramentas já é possivel escrever um código de beep. que emitirá um beep a cada 1 segundo de diferença. Mas para isso é necessário utilizar novamente a condicional "while".

```python
import time #importa a função time para contar o tempo

while True:
  buzzer = PWM(Pin(21))  # Buzzer A conectado ao GPIO21
  buzzer.freq(311) #Frequência do buzzer
  buzzer.duty_u16(40000) #Define o volume
  time.sleep(1) #tempo de 1 segundo
  buzzer.duty_u16(0)
  time.sleep(1) #tempo de 1 segundo
```

O desafio dessa atividade é usar os conhecimentos obtidos para escrever um código que varra as frequências de 300 á 800 com um intervalo de 50 entre cada frequência. O tempo entre cada frequência será de 2 segundo. 

É também possivel se obter algumas notas musicais alterando as frequências do buzzer. Na tabela abaixo existe alguns exemplos:

| Nota         | Representação | Frequência (Hz) |
|--------------|----------------|------------------|
| Sol (G)      | G4             | 392.00           |
| Lá (A)       | A4             | 440.00           |
| Si (B)       | B4             | 493.88           |
| Dó (C)       | C5             | 523.25           |
| Ré (D)       | D5             | 587.33           |
| Mi (E)       | E5             | 659.26           |
| Fá (F)       | F5             | 698.46           |
| Sol (G)      | G5             | 783.99           |
