from machine import Pin
import time

# Definição do botão (pino pode variar dependendo da BitDogLab)
botao = Pin(5, Pin.IN, Pin.PULL_UP)  # Supondo um botão no GPIO2 com pull-up interno

def Espera_ativa():
    print("### Leitura por Espera Ativa ###")
    while True:
        if botao.value() == 0:
            print("Botão pressionado!")
            time.sleep(0.2)  # Debounce simples

# Definição da variável global antes de configurar a interrupção
flag_botao = False

# Função de interrupção
def tratar_interrupcao(p):
    global flag_botao
    flag_botao = True

# Configuração da interrupção
botao.irq(trigger=Pin.IRQ_FALLING, handler=tratar_interrupcao)

def Interrupcao():
    print("### Leitura por Flags ###")
    while True:
        global flag_botao  # Garante que estamos modificando a variável global
        if flag_botao:
            print("Botão pressionado! (Interrupção detectada)")
            flag_botao = False  # Reseta a flag
            time.sleep(0.2)  # Pequeno debounce
#Espera_ativa()
Interrupcao()