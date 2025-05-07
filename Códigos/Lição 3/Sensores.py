import machine
import time

sensor_temperatura = machine.ADC(4)  # ADC4 é interno, temperatura do chip
conversao = 3.3 / (65535)  # Conversão para tensão. Tensão total 3.3. Valor máximo do ADC: 65535

while True:
    leitura = sensor_temperatura.read_u16() * conversao
    temperatura_celsius = 27 - (leitura - 0.706) / 0.001721
    print("Temperatura interna: {:.2f} °C".format(temperatura_celsius))
    time.sleep(2)
