from machine import Pin, SoftI2C
from ssd1306 import SSD1306_I2C
import time

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

botao = Pin(5, Pin.IN, Pin.PULL_UP)

# Limpa a tela
oled.fill(0)
oled.show()

# Tempo inicial
hora = 0
minuto = 0
segundo = 0

# Data
dia = 7
mes = 2
ano = 2025

while True:
    # Atualiza tempo
    segundo += 1
    if segundo >= 60:
        segundo = 0
        minuto += 1
        if minuto >= 60:
            minuto = 0
            hora += 1
            if hora >= 24:
                hora = 0

    # Verifica se o botão está pressionado
    if botao.value() == 0:
        # Exibe a data
        oled.fill(0)
        oled.text("Data Atual:", 10, 20)
        #formata a data para 2 digitos em dia e 2 digitos em mês
        oled.text("{:02d}/{:02d}/{}".format(dia, mes, ano), 10, 40)
        oled.show()


    else:
        # Exibe o relógio normalmente
        oled.fill(0)
        oled.text("Relogio Digital", 10, 10)
        oled.text("{:02d}:{:02d}:{:02d}".format(hora, minuto, segundo), 30, 30)
        oled.show()

    time.sleep(1)