# Importa as blibiotecas de função
from machine import Pin, PWM
import time

# Configuração dos pinos PWM para o LED RGB# Definindo os pinos 13, 12 e 11 como saídas PWM para controlar o LED RGB
led_r = PWM(Pin(13))  # Pino para o componente vermelho do LED RGB
led_g = PWM(Pin(12))  # Pino para o componente verde do LED RGB
led_b = PWM(Pin(11))  # Pino para o componente azul do LED RGB
# Configuração da frequência PWM para 1000 Hz# Isso define a velocidade com que o LED pisca para simular diferentes intensidades de cor
led_r.freq(1000)
led_g.freq(1000)
led_b.freq(1000)

def led(r, g, b):
    # Função para definir a cor do LED RGB# Convertendo os valores de 0-255 para 0-65535, que é o intervalo aceito pela função duty_u16()
    led_r.duty_u16(int(r * 65535 / 255))
    led_g.duty_u16(int(g * 65535 / 255))
    led_b.duty_u16(int(b * 65535 / 255))

# Função para testar o LED RGB com várias cores
def test_rgb():
    print("led(50, 0, 0)  resulta em vermelho")  # Mensagem indicando a cor resultante
    led(50, 0, 0)  # Define o LED para vermelho
    time.sleep(2)  # Espera 2 segundosprint("led(0, 50, 0)  resulta em verde")  # Mensagem indicando a cor resultante

    print("led(0, 50, 0)  resulta em verde")  # Mensagem indicando a cor resultante
    led(0, 50, 0)  # Define o LED para verde
    time.sleep(2)
    
    print("led(0, 0, 50)  resulta em azul")  # Mensagem indicando a cor resultante
    led(0, 0, 50)  # Define o LED para azul
    time.sleep(2)
    
    print("led(50, 50, 0)  resulta em amarelo")  # Mensagem indicando a cor resultante
    led(50, 50, 0)  # Define o LED para amarelo (combinação de vermelho e verde)
    time.sleep(2)

    print("led(0, 50, 50)  resulta em ciano")  # Mensagem indicando a cor resultante
    led(0, 50, 50)  # Define o LED para ciano (combinação de verde e azul)
    time.sleep(2)

    print("led(50, 0, 50)  resulta em roxo")  # Mensagem indicando a cor resultante
    led(50, 0, 50)  # Define o LED para roxo (combinação de vermelho e azul)
    time.sleep(2)
    
    print("led(50, 50, 50)  resulta em branco")  # Mensagem indicando a cor resultante
    led(50, 50, 50)  # Define o LED para branco (combinação de todas as cores)
    time.sleep(2)

    print("led(0, 0, 0)  resulta em led apagado")  # Mensagem indicando que o LED está apagado
    led(0, 0, 0)  # Desliga o LED
    time.sleep(1)
    
    print("                                                                                   ")
    print("Agora você pode tentar digitando o comando led seguido dos argumentos para cada cor")
    time.sleep(1)
    print("Exemplo: led(200,50,25)")  # Exemplo de como o usuário pode definir uma cor específica# Chama a função de teste para mostrar as cores
test_rgb()
