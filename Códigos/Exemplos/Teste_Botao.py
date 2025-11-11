from machine import Pin, SoftI2C, ADC, PWM
from ssd1306 import SSD1306_I2C
import time

time.sleep(0.1)

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

# Configuração dos botões
button_a = Pin(5, Pin.IN, Pin.PULL_UP)
button_b = Pin(6, Pin.IN, Pin.PULL_UP)
button_c = Pin(10, Pin.IN, Pin.PULL_UP)

# Configuração do LED RGB
red_led = Pin(13, Pin.OUT)
green_led = Pin(12, Pin.OUT)
blue_led = Pin(11, Pin.OUT)

# Desligando o LED RGB inicialmente
red_led.value(0)
green_led.value(0)
blue_led.value(0)

while True:
    # S o Botão A for pressionado
    print(button_a.value())
    if button_a.value() == 0:
        # Limpa a tela
        oled.fill(0)
        oled.text("BOTAO A",0,10)
        # Atualiza a tela
        oled.show()
        # Espera um pouco
        time.sleep(2)
    else:
        red_led.value(0)
        oled.fill(0)

    # Se o Botão B for pressionado
    print(button_b.value())
    if button_b.value() == 0:
        # Limpa a tela
        oled.fill(0)
        oled.text("BOTAO B",0,10)
        # Atualiza a tela
        oled.show()
        # Espera um pouco
        time.sleep(2)
    else:
        blue_led.value(0)
        oled.fill(0)

    # Se o Botão C for pressionado
    print(button_c.value())
    if button_c.value() == 0:
        # Limpa a tela
        oled.fill(0)
        oled.text("BOTAO C",0,10)
        # Atualiza a tela
        oled.show()
        # Espera um pouco
        time.sleep(2)
    else:
        blue_led.value(0)
        oled.fill(0)