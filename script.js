const btn = document.getElementById('btn')
const input = document.getElementById('input')
const output = document.getElementById('output')
const letters = document.getElementById('spanLettersCount')
const space  = document.getElementById('spanSpaceCount')
const words = document.getElementById('spanWordsCount')
const sentences = document.getElementById('spanSentencesCount')
const themeBtn = document.getElementById('changeColor')
const r = document.querySelector(':root');


const counteLetters = (arr) => { 
    let counte = 0
    arr.forEach(el => {
        if (el !== " " && el !== '.') {
            counte ++
        }
    })
    letters.innerHTML = counte
}

const counteSpace = (arr) => {
    let counte = 0
    arr.forEach(el => {
        if (el === " ") {
            counte ++
        }
    })
    space.innerHTML = counte
}

const counteWord = (text) => {
    let count = 0
    const arr = text.split(' ').map(el => {
        return el.split('.')
    }).flatMap(el => el)
    
    arr.forEach(word => {
        if(word.length){
            count ++;
        }
    })
    words.innerHTML = count
}

const countSentences  =(arr) => {
    let count = 0
    arr.forEach((letter,i) => {
        if (letter === '.' && arr[i-1] !== '.' && arr[i+1] !== '.') {
            count ++
        }
    })
        sentences.innerHTML = count
}

const getValue = (event) => {
    let value = document.getElementById('input').value
    let trimedText = value.trim()
    const arr = trimedText.split('')
    counteLetters(arr)
    counteSpace(arr)
    counteWord(trimedText)
    countSentences(arr)
    
    output.innerHTML = value
    document.getElementById('input').value = ''
}

const changeTheme = () => {
    const bg = Math.floor(Math.random()*16777215).toString(16);
    const cr = Math.floor(Math.random()*16777215).toString(16);
    r.style.setProperty('--bg-color',`#${bg}`)
    r.style.setProperty('--color',`#${cr}`)
}

btn.addEventListener('click', getValue)
themeBtn.addEventListener('click',changeTheme)