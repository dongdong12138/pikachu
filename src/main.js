const pre = document.querySelector('pre')
const style = document.querySelector('style')

const string = `
/* 先画个皮肤 */
.skin {
    width: 100%;
    height: 50%;
    background: #FEE433;
    position: absolute;
    left: 0;
    bottom: 0;
}

/* 再画眼睛 */
.eye {
    width: 50px;
    height: 50px;
    background: #2E2E2E;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 80px;
}
.eye::after {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background: #fff;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    left: 6px;
    top: -1px;
}
.eye-left {
    right: 50%;
    margin-right: 90px;
}
.eye-right {
    left: 50%;
    margin-left: 90px;
}

/* 再画鼻子 */
.nose {
    border-style: solid;
    border-width: 12px;
    border-color: #000 transparent transparent transparent;
    border-radius: 11px;
    position: absolute;
    left: 50%;
    top: 120px;
    transform: translateX(-50%);
}
.nose:hover {
    animation: wave .3s linear infinite;
}
@keyframes wave {
    0% { transform: translateX(-50%) rotate(0); }
    25% { transform: translateX(-50%) rotate(5deg); }
    50% { transform: translateX(-50%) rotate(0); }
    75% { transform: translateX(-50%) rotate(-5deg); }
    100% { transform: translateX(-50%) rotate(0); }
}

/* 再画脸蛋 */
.face {
    width: 68px;
    height: 68px;
    background: #FC0D1C;
    border: 2px solid #000;
    border-radius: 50%;
    position: absolute;
    top: 160px;
}
.face-left {
    right: 50%;
    margin-right: 110px;
}
.face-right {
    left: 50%;
    margin-left: 110px;
}

/* 再画嘴唇 */
.mouth {
    width: 200px;
    height: 110px;
    position: absolute;
    left: 50%;
    top: 150px;
    transform: translateX(-50%);
    overflow: hidden;
}
.mouth > .lip-up {
    width: 80px;
    height: 25px;
    background: #FDE348;
    border: 2px solid black;
    border-top: none;
    position: absolute;
    top: -8px;
}
.mouth > .lip-up:nth-of-type(2) {
    border-right: none;
    border-bottom-left-radius: 40px 25px;
    transform: rotate(-20deg);
    left: 18px;
}
.mouth > .lip-up:nth-of-type(3) {
    border-left: none;
    border-bottom-right-radius: 40px 25px;
    transform: rotate(20deg);
    right: 18px;
}
.mouth > .lip-down {
    width: 200px;
    height: 3500px;
    border: 2px solid #000;
    border-radius: 200px/2000px;
    background: #990513;
    position: absolute;
    left: 0;
    bottom: 0;
    overflow: hidden;
}
.mouth > .lip-down::after {
    content: "";
    display: block;
    width: 100px;
    height: 100px;
    background: #FC4A62;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    bottom: -20px;
    transform: translateX(-50%);
}
`
let n = 0

let timer = setInterval(() => {
    if (n >= string.length) {
        clearInterval(timer)
        return
    }
    n += 1
    pre.innerText = string.substr(0, n)
    style.innerHTML = string.substr(0, n)

    pre.scrollTop = pre.scrollHeight
}, 0)