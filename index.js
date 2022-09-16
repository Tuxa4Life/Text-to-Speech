const audios = {
    a: new Audio('assets/Audios/a.mp3'), b: new Audio('assets/Audios/b.mp3'),
    g: new Audio('assets/Audios/g.mp3'), d: new Audio('assets/Audios/d.mp3'),
    e: new Audio('assets/Audios/e.mp3'), v: new Audio('assets/Audios/v.mp3'),
    z: new Audio('assets/Audios/z.mp3'), st: new Audio('assets/Audios/st.mp3'),
    i: new Audio('assets/Audios/i.mp3'), k: new Audio('assets/Audios/k.mp3'),
    l: new Audio('assets/Audios/l.mp3'), m: new Audio('assets/Audios/m.mp3'),
    n: new Audio('assets/Audios/n.mp3'), o: new Audio('assets/Audios/o.mp3'),
    p: new Audio('assets/Audios/p.mp3'), sj: new Audio('assets/Audios/sj.mp3'),
    r: new Audio('assets/Audios/r.mp3'), s: new Audio('assets/Audios/s.mp3'),
    t: new Audio('assets/Audios/t.mp3'), u: new Audio('assets/Audios/u.mp3'),
    f: new Audio('assets/Audios/f.mp3'), q: new Audio('assets/Audios/q.mp3'),
    sr: new Audio('assets/Audios/sr.mp3'), y: new Audio('assets/Audios/y.mp3'),
    sh: new Audio('assets/Audios/sh.mp3'), ch: new Audio('assets/Audios/ch.mp3'),
    c: new Audio('assets/Audios/c.mp3'), dz: new Audio('assets/Audios/dz.mp3'),
    w: new Audio('assets/Audios/w.mp3'), sw: new Audio('assets/Audios/sw.mp3'),
    x: new Audio('assets/Audios/x.mp3'), j: new Audio('assets/Audios/j.mp3'),
    h: new Audio('assets/Audios/h.mp3'), 
}

const input = document.querySelector('#input')
const btn = document.querySelector('.play-btn')

let letters = new Map([
    ['a', audios.a], ['b', audios.b], ['g', audios.g],
    ['d', audios.d], ['e', audios.e], ['v', audios.v],
    ['z', audios.z], ['st', audios.st], ['i', audios.i],
    ['k', audios.k], ['l', audios.l], ['m', audios.m],
    ['n', audios.n], ['o', audios.o], ['p', audios.p],
    ['sj', audios.sj], ['r', audios.r], ['s', audios.s],
    ['t', audios.t], ['u', audios.u], ['f', audios.f],
    ['q', audios.q], ['sr', audios.sr], ['y', audios.y],
    ['sh', audios.sh], ['ch', audios.ch], ['c', audios.c],
    ['dz', audios.dz], ['w', audios.w], ['sw', audios.sw],
    ['x', audios.x], ['j', audios.j], ['h', audios.h],
    [' ', ' '], ['ა', audios.a], ['ბ', audios.b],
    ['გ', audios.g], ['დ', audios.d], ['ე', audios.e],
    ['ვ', audios.v], ['ზ', audios.z], ['თ', audios.st],
    ['ი', audios.i], ['კ', audios.k], ['ლ', audios.l],
    ['მ', audios.m],['ნ', audios.n],['ო', audios.o],
    ['პ', audios.p],['ჟ', audios.sj],['რ', audios.r],
    ['ს', audios.s],['ტ', audios.t],['უ', audios.u],
    ['ფ', audios.f],['ქ', audios.q],['ღ', audios.sr],
    ['ყ', audios.y],['შ', audios.sh],['ჩ', audios.ch],
    ['ც', audios.c],['ძ', audios.dz],['წ', audios.w],
    ['ჭ', audios.sw],['ხ', audios.x],['ჯ', audios.j],
    ['ჰ', audios.h],
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