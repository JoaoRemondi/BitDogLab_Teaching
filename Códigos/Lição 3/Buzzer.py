from machine import Pin, SoftI2C, PWM, ADC
from ssd1306 import SSD1306_I2C
import time

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

# Configurações de temperatura
limite_temperatura = 33.0

# Configurar o sensor de temperatura interno
sensor_temperatura = ADC(4)
conversao = 3.3 / 65535

# Configurar o buzzer
buzzer = PWM(Pin(21))  # Ajuste o pino se necessário
buzzer.duty_u16(0)  # Começa desligado

def beep():
    buzzer.freq(311)  # Frequência do beep
    buzzer.duty_u16(40000)  # Volume do beep (de 0 a 65535)
    time.sleep(0.5)  # Duração do beep
    buzzer.duty_u16(0)  # Desliga

while True:
    leitura = sensor_temperatura.read_u16() * conversao
    temperatura_celsius = 27 - (leitura - 0.706) / 0.001721

    # Limpa a tela
    oled.fill(0)

    # Escreve o valor da temperatura
    oled.text("Temperatura:", 0, 10)
    oled.text("{:.2f} C".format(temperatura_celsius), 0, 30)

    # Atualiza a tela
    oled.show()
    
     # Verifica se passou do limite
    if temperatura_celsius >= limite_temperatura:
        print("Temperatura alta! ({:.2f} C)".format(temperatura_celsius))
        beep()  # Toca o buzzer
        
    # Espera um pouco
    time.sleep(2)

