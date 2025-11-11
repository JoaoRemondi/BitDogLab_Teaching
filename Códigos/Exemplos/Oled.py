from machine import Pin, SoftI2C, PWM, ADC
from ssd1306 import SSD1306_I2C
import time

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)


while True:
    # Limpa a tela
    oled.fill(0)

    oled.text("Hello world!",0,10)

    # Atualiza a tela
    oled.show()

    # Espera um pouco
    time.sleep(2)
