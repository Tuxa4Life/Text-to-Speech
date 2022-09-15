const a = new Audio('assets/Audios/a.mp3')
const b = new Audio('assets/Audios/b.mp3')
const g = new Audio('assets/Audios/g.mp3')
const d = new Audio('assets/Audios/d.mp3')
const e = new Audio('assets/Audios/e.mp3')
const v = new Audio('assets/Audios/v.mp3')
const z = new Audio('assets/Audios/z.mp3')
const st = new Audio('assets/Audios/st.mp3')
const i = new Audio('assets/Audios/i.mp3')
const k = new Audio('assets/Audios/k.mp3')
const l = new Audio('assets/Audios/l.mp3')
const m = new Audio('assets/Audios/m.mp3')
const n = new Audio('assets/Audios/n.mp3')
const o = new Audio('assets/Audios/o.mp3')
const p = new Audio('assets/Audios/p.mp3')
const sj = new Audio('assets/Audios/sj.mp3')
const r = new Audio('assets/Audios/r.mp3')
const s = new Audio('assets/Audios/s.mp3')
const t = new Audio('assets/Audios/t.mp3')
const u = new Audio('assets/Audios/u.mp3')
const f = new Audio('assets/Audios/f.mp3')
const q = new Audio('assets/Audios/q.mp3')
const sr = new Audio('assets/Audios/sr.mp3')
const y = new Audio('assets/Audios/y.mp3')
const sh = new Audio('assets/Audios/sh.mp3')
const ch = new Audio('assets/Audios/ch.mp3')
const c = new Audio('assets/Audios/c.mp3')
const dz = new Audio('assets/Audios/dz.mp3')
const w = new Audio('assets/Audios/w.mp3')
const sw = new Audio('assets/Audios/sw.mp3')
const x = new Audio('assets/Audios/x.mp3')
const j = new Audio('assets/Audios/j.mp3')
const h = new Audio('assets/Audios/h.mp3')

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
    [' ', ' '],
    ['ა', a],
    ['ბ', b],
    ['გ', g],
    ['დ', d],
    ['ე', e],
    ['ვ', v],
    ['ზ', z],
    ['თ', st],
    ['ი', i],
    ['კ', k],
    ['ლ', l],
    ['მ', m],
    ['ნ', n],
    ['ო', o],
    ['პ', p],
    ['ჟ', sj],
    ['რ', r],
    ['ს', s],
    ['ტ', t],
    ['უ', u],
    ['ფ', f],
    ['ქ', q],
    ['ღ', sr],
    ['ყ', y],
    ['შ', sh],
    ['ჩ', ch],
    ['ც', c],
    ['ძ', dz],
    ['წ', w],
    ['ჭ', sw],
    ['ხ', x],
    ['ჯ', j],
    ['ჰ', h],
])

let inputVal = ''

let toArr = (string) => {
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
    console.log(arr)

    for (let i = 0; i < arr.length; i++) {
        if (letters.get(arr[i]) == ' ') {
            await sleep(200)
            continue
        }
        letters.get(arr[i]).play()
        console.log(arr[i])
        await sleep(100)
    }
}

btn.addEventListener('click', () => play())