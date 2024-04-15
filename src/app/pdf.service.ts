
const pdfkit= require('pdfkit')
const fs = require('fs')
const options ={
     userPassword:'123456'

}


const doc = new pdfkit(options)
doc.addPage()
doc.text("hola como estas ",23,23)
doc.pipe(fs.createWriteStream('autput.pdf'))

doc.end()