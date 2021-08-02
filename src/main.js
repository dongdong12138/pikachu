import string from './css'

const pre = document.querySelector('pre')
const style = document.querySelector('style')
const btnGroup = document.querySelector('.button-group')

let n = 0
let speed = 50
let timer

const player = {
    init() {
        timer = setInterval(() => {
            this.run()
        }, speed)
    },
    run() {
        if (n >= string.length) {
            clearInterval(timer)
            return
        }
        n += 1
        pre.innerText = string.substr(0, n)
        style.innerHTML = string.substr(0, n)
    
        pre.scrollTop = pre.scrollHeight
    },
    play() {
        return setInterval(this.run, speed)
    },
    slow() {
        speed = 100
        timer = this.play()
    },
    medium() {
        speed = 50
        timer = this.play()
    },
    fast() {
        speed = 0
        timer = this.play()
    },
}

player.init()

btnGroup.onclick = (e) => {
    const { id } = e.target
    clearInterval(timer)
    timer = id === 'btnPlay' && player.play()
    id === 'btnSlow' && player.slow()
    id === 'btnMedium' && player.medium()
    id === 'btnFast' && player.fast()
}
