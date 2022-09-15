const a = document.querySelector('#a')
const b = document.querySelector('#b')
const g = document.querySelector('#g')
const d = document.querySelector('#d')
const e = document.querySelector('#e')
const v = document.querySelector('#v')
const z = document.querySelector('#z')
const st = document.querySelector('#t')
const i = document.querySelector('#i')
const k = document.querySelector('#k')
const l = document.querySelector('#l')
const m = document.querySelector('#m')
const n = document.querySelector('#n')
const o = document.querySelector('#o')
const p = document.querySelector('#p')
const sj = document.querySelector('#sj')
const r = document.querySelector('#r')
const s = document.querySelector('#s')
const t = document.querySelector('#t')
const u = document.querySelector('#u')
const f = document.querySelector('#f')
const q = document.querySelector('#q')
const sr = document.querySelector('#sr')
const y = document.querySelector('#y')
const sh = document.querySelector('#sh')
const ch = document.querySelector('#ch')
const c = document.querySelector('#c')
const dz = document.querySelector('#dz')
const w = document.querySelector('#w')
const sw = document.querySelector('#sw')
const x = document.querySelector('#x')
const j = document.querySelector('#j')
const h = document.querySelector('#h')

const input = document.querySelector('#input')
const btn = document.querySelector('.play-btn')

let letters = new Map([
    ['a', a],
    ['b', b],
    ['g', g],
    ['d', d],
    ['e', e],
    ['v', v],
    ['z', z],
    ['st', st],
    ['i', i],
    ['k', k],
    ['l', l],
    ['m', m],
    ['n', n],
    ['o', o],
    ['p', p],
    ['sj', sj],
    ['r', r],
    ['s', s],
    ['t', t],
    ['u', u],
    ['f', f],
    ['q', q],
    ['sr', sr],
    ['y', y],
    ['sh', sh],
    ['ch', ch],
    ['c', c],
    ['dz', dz],
    ['w', w],
    ['sw', sw],
    ['x', x],
    ['j', j],
    ['h', h],
    [' ', ' ']
])

let inputVal = ''

let toArr = (string) => {
    console.log('hey')
    let arr = []
    for (let i = 0; i < string.length; i++) {
        if (string[i] == 't' && string[i + 1] == 'h') {
            arr.push('st')
            i += 2
        }
        if (string[i] == 's' && string[i + 1] == 'h') {
            arr.push('sh')
            i += 2
        }
        if (string[i] == 'j' && string[i + 1] == 'h') {
            arr.push('sj')
            i += 2
        }
        if (string[i] == 'g' && string[i + 1] == 'h') {
            arr.push('sr')
            i += 2
        }
        if (string[i] == 'c' && string[i + 1] == 'h') {
            arr.push('ch')
            i += 2
        }
        if (string[i] == 'd' && string[i + 1] == 'z') {
            arr.push('dz')
            i += 2
        }
        if (string[i] == 'w' && string[i + 1] == 'h') {
            arr.push('sw')
            i += 2
        }

        arr.push(string[i])
    }
    return arr
}

const sleep = (time) => {
    return new Promise((resolve) => setTimeout(resolve, time))
}

let play = async () => {
    inputVal = input.value.toLowerCase()
    let arr = toArr(inputVal)

    for (let i = 0; i < arr.length; i++) {
        if (letters.get(arr[i]) == ' ') {
            await sleep(200)
            continue
        }
        letters.get(arr[i]).play()
        console.log(arr[i], letters.get(arr))
        await sleep(100)
    }
}

btn.addEventListener('click', () => play())