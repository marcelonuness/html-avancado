let tela = document.getElementById('tela')
let ctx = tela.getContext('2d')

let circle = {
    x : 100,
    y : 100,
    raio: 100,
    inicio: 0,
    fim: 0,
}

function drawCircle(c) {

    ctx.beginPath()
    ctx.rect(0, 0, 1000, 1000)
    ctx.fillStyle = 'beige'
    ctx.fill()
    ctx.stroke()



    ctx.beginPath()
    ctx.arc(c.x, c.y, c.raio, c.inicio, c.fim)
    ctx.strokeStyle = 'red'
    ctx.strokeWidth = '5'
    ctx.fillStyle ='blue'
    ctx.stroke()
    ctx.fill()

    
}

setInterval(function() {

    if (circle.fim < 2 * Math.PI) {
        circle.fim += 0.3
        circle.x += 30
        circle.y += 15
    }

    drawCircle(circle)

}, 100)