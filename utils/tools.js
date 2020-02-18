const convert = require('xml-js')
const randomstring = require('randomstring')

exports.xml2js = xml => {
  let message = convert.xml2js(xml, {
    compact: true,
    textKey: 'value',
    cdataKey: 'value'
  }).xml

  let reduceObj = Object.keys(message).reduce((obj, key) => {
    obj[key] = message[key]['value']
    return obj
  }, {})

  return reduceObj
}

exports.genNonceStr = () => {
  return randomstring.generate(32)
}