//const fs = require('fs')
//const add = require('./utils.js')
//fs.writeFileSync('notes.txt',  'My name is Ankit.')
//fs.appendFileSync('notes.txt',  'I am 27 years old.')

const getNotes = require('./notes.js')
const validator = require('validator')
const chalk = require('chalk')
const log = console.log
//const sum = add(4, 3)
const Notes = getNotes()
console.log(Notes)

//console.log(chalk.green(validator.isEmail('ankirmohod@gmail.com')))
log(chalk.green('Success!'))