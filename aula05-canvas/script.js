let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

// aprendendo a fazer linhas
/*
ctx.moveTo(0, 0)
ctx.lineTo(250, 250)
ctx.lineTo(500, 0)
ctx.moveTo(0, 500)
ctx.lineTo(250, 250)
ctx.lineTo(500, 500)
ctx.stroke() 
*/

//aprendendo a fazer retangulos e novas linhas de desenhos no canvas

/*
ctx.beginPath()
ctx.lineWidth = '7'
ctx.strokeStyle = "blue"
ctx.fillStyle = "red"
ctx.moveTo(50, 30)
ctx.lineTo(360, 420)
ctx.lineTo(300, 420)
ctx.closePath()
ctx.stroke()
ctx.fill()


ctx.beginPath()
ctx.rect(80, 80, 100, 200)
ctx.strokeStyle = 'green'
ctx.fillStyle = 'brown'
ctx.stroke()
ctx.fill()
*/

// aprendendo a realizar um círculo

let x = 300
let y = 300
let raio = 297
let inicio = 0
let fim = 2 * Math.PI

ctx.arc(x, y, raio, inicio, fim)
ctx.strokeStyle = 'blue'
ctx.strokeWidth = '5'
ctx.stroke()



