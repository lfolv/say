const numbers = {
  "twenty": 20,
  "nineteen": 19,
  "eighteen": 18,
  "seventeen": 17,
  "sixteen": 16,
  "fifteen": 15,
  "fourteen": 14,
  "thirteen": 13,
  "twelve": 12,
  "eleven": 11,
  "ten": 10,
  'nine': 9,
  'eight': 8,
  'seven': 7,
  'six': 6,
  'five': 5,
  'four': 4,
  'three': 3,
  'two': 2,
  'one': 1
}

export default class Say {
  inEnglish(n: number) {
    if (n === 0) {
      return 'zero'
    }

    let result = ""

    for (const [valueInEnglish, realValue] of Object.entries(numbers)) {
      if (n > 0 && n % realValue === 0) {
        n -= realValue
        result += valueInEnglish
      }
    }

    return result
  }
}
