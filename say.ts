export default class Say {
  inEnglish(n: number) {
    if (n === 0) {
      return 'zero'
    }

    let result = ''

    if (n === 9) {
      result += 'nine'
    } else if (n === 8) {
      result += 'eight'
    } else if (n === 7) {
      result += 'seven'
    } else if (n === 6) {
      result += 'six'
    } else if (n === 5) {
      result += 'five'
    } else if (n === 4) {
      result += 'four'
    } else if (n === 3) {
      result += 'three'
    } else if (n === 2) {
      result += 'two'
    } else if (n === 1) {
      result += 'one'
    } else {
      result += 'zero'
    }

    return result
  }
}
