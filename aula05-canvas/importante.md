# Propriedades/Métodos do Canvas

## Métodos e Propriedades do Canvas:

### Cores, estilos e sombras

### Propriedades:

*fillStyle* Define ou retorna a cor, gradiente ou padrão usado para preencher o desenho,
*strokeStyle* Define ou retorna a cor, gradiente ou padrão usado para traçados,
*shadowColor* Define ou retorna a cor a ser usada para sombras,
*shadowBlur* Define ou retorna o nível de desfoque das sombras,
*shadowOffsetX* Define ou retorna a distância horizontal da sombra da forma,
*shadowOffsetY* Define ou retorna a distância vertical da sombra da forma,

### Métodos:

createLinearGradient() Cria um gradiente linear (para usar no conteúdo da tela)
createPattern() Repete um elemento especificado na direção especificada
createRadialGradient() Cria um gradiente radial/circular (para usar no conteúdo da tela)
addColorStop() Especifica as cores e as posições de parada em um objeto de gradiente
Estilização do line
Propriedades
lineCap Define ou retorna o estilo das terminações de uma linha
lineJoin Define ou retorna o tipo de canto criado, quando duas linhas se encontram
lineWidth Define ou retorna a largura da linha atual
mitreLimit Define ou retorna o comprimento máximo da mitra

## Retângulos

### Métodos:

rect() Cria um retângulo
fillRect() Desenha um retângulo "preenchido"
strokeRect() Desenha um retângulo (sem preenchimento)
clearRect() Limpa os pixels especificados dentro de um determinado retângulo

## Caminhos/Paths

### Métodos
fill() Preenche o desenho atual (caminho)
stroke() Na verdade desenha o caminho que você definiu
beginPath() Inicia um caminho ou redefine o caminho atual
moveTo() Move o caminho para o ponto especificado na tela, sem criar uma linha
closePath() Cria um caminho do ponto atual de volta ao ponto inicial
lineTo() Adiciona um novo ponto e cria uma linha para esse ponto a partir do último ponto especificado na tela
clip() Recorta uma região de qualquer forma e tamanho da tela original
quadraticCurveTo() Cria uma curva Bézier quadrática
bezierCurveTo() Cria uma curva Bézier cúbica
arc() Cria um arc/curva (usado para criar círculos ou partes de círculos)
arcTo() Cria um arc/curva entre duas tangentes
isPointInPath() Retorna true se o ponto especificado estiver no caminho atual, caso contrário, false


## Transformations

### métodos:

scale() Dimensiona o desenho atual para maior ou menor
girar() Gira o desenho atual
translate() Remapeia a posição (0,0) na tela
transform() Substitui a matriz de transformação atual para o desenho
setTransform() Redefine a transformação atual para a matriz de identidade. Em seguida, executa transform()

## Text
### Propriedades:

*font* Define ou retorna as propriedades da fonte atual para conteúdo de texto
*textAlign* Define ou retorna o alinhamento atual para o conteúdo de texto
*textBaseline* Define ou retorna a linha de base do texto atual usada ao desenhar texto

### Métodos:

fillText() Desenha o texto "preenchido" na tela
strokeText() Desenha texto na tela (sem preenchimento)
MeasureText() Retorna um objeto que contém a largura do texto especificado


## image drawing

### Métodos:

drawImage() Desenha uma imagem, tela ou vídeo na tela
 
## Manipulação de Pixel

### Propriedades:

*width* Retorna a largura de um objeto ImageData
*height* Retorna a altura de um objeto ImageData
*data* Retorna um objeto que contém dados de imagem de um objeto ImageData especificado

### Métodos

createImageData() Cria um novo objeto ImageData em branco
getImageData() Retorna um objeto ImageData que copia os dados de pixel para o retângulo especificado em uma tela
putImageData() Coloca os dados da imagem (de um objeto ImageData especificado) de volta na tela

## Compositing

### Propriedades:

*globalAlpha* Define ou retorna o alfa atual ou o valor de transparência do desenho
*globalCompositeOperation* Define ou retorna como uma nova imagem é desenhada em uma imagem existente

## Outros
### Métodos:

save() Salva o estado do contexto atual
restore() Retorna o estado do caminho e os atributos salvos anteriormente
createEvent()
getContext()
toDataURL()