from machine import Pin, SoftI2C
from ssd1306 import SSD1306_I2C
import time
import math #essa biblioteca permite trabalharmos com funções mais complexas

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

# Define a função que você quer desenhar
#def funcao(x):
    #return x 

#def funcao(x):
    #return (x/10)**2

def funcao(x):
    return math.sin(x)

# Limpa a tela
oled.fill(0)

# Plota a função
for x in range(128):

    y = funcao(x)  # calcula y = f(x)
    y = 63 - int(y)  # inverte o eixo Y (topo da tela é 0)
    if 0 <= y <= 63:
        oled.pixel(x, y, 1)

oled.show()
