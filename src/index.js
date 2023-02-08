const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};
function decode(expr) {
  let binary = {
    10: '.',
    11: '-',
    '**********': ' ',
  }
  function sliceToChunks(string, chunksSize) {
      if (string[0] === '*') return [string]
      resultArr = []
      arr = string.split('')
      for (let i = 0; i < string.length; i += chunksSize) {
          const chunk = string.slice(i, i + chunksSize)
          console.log(chunk)
          resultArr.push(chunk)
      }
      return resultArr
  }
  let arrOfTen = sliceToChunks(expr, 10)
  let cuttedArr = []
  arrOfTen.forEach(el => {
    let firstIndex = el.indexOf(1)
    if (firstIndex < 1) cuttedArr.push(el)
    else cuttedArr.push(el.slice(firstIndex, el.length + 1))
  })

return cuttedArr
.map(el => sliceToChunks(el, 2))
.map(el => el
    .map(subEl => binary[subEl]))
    .map(el => el.join(''))
    .map(el => {
        if (Object.keys(MORSE_TABLE).includes(el)) return MORSE_TABLE[el]
        else return el
    }).join('')
}
module.exports = {
    decode
}