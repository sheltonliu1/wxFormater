function parse(bindName, type, obj, target) {
  let nodes = []
  if (type == 'json') {
    nodes = jsonParse(obj)
  }
  let bindData = { parser: target.data.parser || {} }
  bindData.parser[bindName] = { data: nodes }
  target.setData(bindData)
}
function jsonParse(obj) {
  let str = JSON.stringify(obj, null, '~')
  console.log(str)
  let res = ''
  let lineArr = []
  let tab = 0
  let line = ''

  for (let i = 0; i < str.length; i++) {
    let char = str.charAt(i)
    if (i == 0) {
      line += char
      continue
    }

    if ((char == '~' && str.charAt(i - 1) != '~') || (i == str.length - 1)) {   //新的一行
      lineArr.push({
        tab: tab,
        line: line
      })
      tab = 1
      line = ''
    } else if (char == '~') {
      tab++
    } else if (char != '~' && char != '\n') {
      line += char;
    }

    if (i == str.length - 1) {
      lineArr.push({
        tab: 0,
        line: char
      })
    }
  }
  return lineArr
}
module.exports = {
  parse: parse
}