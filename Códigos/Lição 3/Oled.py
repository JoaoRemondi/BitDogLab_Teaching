from machine import Pin, SoftI2C, PWM, ADC
from ssd1306 import SSD1306_I2C
import time

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)


# Configurar o sensor de temperatura interno
sensor_temperatura = ADC(4)
conversao = 3.3 / 65535

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

    # Espera um pouco
    time.sleep(2)
