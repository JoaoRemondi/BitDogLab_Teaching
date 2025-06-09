## Aula 02: Uso da matriz de led

A matriz de led 5x5 da BitDogLab possuí 25 luzes que podem ser acionadas separadamente. Dessa forma é possíve fazer desenhos e piscar luzes de forma separadas. 

Para utilizar a matriz de led devemos importar uma nova função, a função neopixel. Dessa forma, o início do código deve ficar da seguinte forma:

```python
from machine import Pin
import neopixel
```

Essa função permite manipular os leds da matriz de forma individual. Mas antes disso é necessário inicializar a matriz de Led e definir a pinagem da matriz. Para isso, utiliza-se o seguinte trecho:

```python
# Número de LEDs na sua matriz 5x5
NUM_LEDS = 25

np = neopixel.NeoPixel(Pin(7), NUM_LEDS) #Define a pinagem da matriz como GPIO 7
```

O que fizemos aqui foi criar um  objeto chamado np que representa uma faixa (ou matriz) de LEDs NeoPixel conectada ao pino GPIO 7, com NUM_LEDS LEDs.

Esse objeto se comporta como um vetor, onde cada posição representa um LED, e você pode acessar e modificar usando índices. Para usá-lo, primeiro deve-se entender a posição do Led. Os Leds tem suas posições definidas por números indo de 0 á 24, que representam as 25 posições de cada um.

"Imagem dos Led marcados"

Antes de acender um LED, é necessário entender um conceito também muito importante e muito usado atualmente: o modelo de cores RGB.

RGB é a sigla para:

- R = Red (vermelho)

- G = Green (verde)

- B = Blue (azul)

Essas três cores primárias da luz podem ser combinadas de várias maneiras para formar praticamente qualquer cor visível.

Cada LED RGB pode ter três valores de intensidade, um para cada cor (R, G e B). Esses valores normalmente vão de 0 a 255, no caso da BitDogLab isso é limitado para ir de 0 a 50.

Dessa forma, para acender um led com a cor vermelha tem-se o seguinte:

```python
from machine import Pin
import neopixel

# Número de LEDs na sua matriz 5x5
NUM_LEDS = 25

# Inicializar a matriz de NeoPixels no GPIO7
np = neopixel.NeoPixel(Pin(7), NUM_LEDS)

np[1] = (50, 0, 0) #Define o Led 0 para ser acesso com a cor vermelha 

np.write() # Acende os Leds definidos
```
Algumas cores para teste:

| **Cores** | **RGB**         |
|-----------|-----------------|
| Vermelho  | (50, 0, 0)      |
| Verde     | (0, 50, 0)      |
| Azul      | (0, 0, 50)      |
| Amarelo   | (30, 30, 0)     |
| Magenta   | (30, 0, 30)     |
| Ciano     | (0, 30, 30)     |
| Branco    | (25, 25, 25)    |
| Preto     | (0, 0, 0)       |

O desafio dessa atividade é usar os conhecimentos obtidos para desenhar um coração colorido com os leds.

"Imagem para referência"
