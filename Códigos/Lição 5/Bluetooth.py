from machine import UART, ADC, Pin, SoftI2C, PWM
from ssd1306 import SSD1306_I2C
import time

# Configurar UART com os GPIOs corretos
uart = UART(1, baudrate=9600, tx=19, rx=16)  # UART1 com TX=GPIO19, RX=GPIO16

#Define pinos de entrada da tela
i2c = SoftI2C(scl=Pin(15), sda=Pin(14))
#Define tamanho máximo da tela (128 pixels de largura e 64 pixels de altura)
oled = SSD1306_I2C(128, 64, i2c)

# Sensor interno de temperatura
sensor = machine.ADC(4) 
conversao = 3.3 / 65535

while True:
    leitura = sensor.read_u16() * conversao
    temperatura = 27 - (leitura - 0.706) / 0.001721
    
        # Limpa a tela
    oled.fill(0)

    # Escreve o valor da temperatura
    oled.text("Temperatura:", 0, 10)
    oled.text("{:.2f} C".format(temperatura_celsius), 0, 30)

    # Atualiza a tela
    oled.show()
    
    mensagem = "Temperatura: {:.2f} °C\n".format(temperatura)
    uart.write(mensagem)  # Envia para o HC-05
    print("Enviado:", mensagem)
    time.sleep(2)