

const getNotes = require('./notes.js')
//const validator = require('validator')
const chalk = require('chalk')
const yargs = require('yargs')

//const command = process.argv[2]

//customize yargs command --version
yargs.version('1.1.0')

//create add commands
yargs.command({
    command:'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string',
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string',
        }
    },
    handler: function(argv){
        console.log('Title: '+ argv.title)
        console.log('Body: '+ argv.body)
    }
})

//create remov command
yargs.command({
    command: 'remove',
    describe: 'Remov a note',
    handler: function(){
        console.log('Removing a note')
    }
})

//create a list command
yargs.command({
    command: 'list',
    describe: 'List all notes',
    handler: function(){
        console.log('listing all notes')
    }
})

//create read command
yargs.command({
    command: 'read',
    describe: 'Read a single note',
    handler: function(){
        console.log('Reading a single note')
    }
})


yargs.parse()
//add, remove, read, list
//console.log(yargs.argv)

// if(command === 'add'){
//     console.log('Adding note..!')
// }else if(command === 'remove'){
//     console.log('Removing note..!')
// }
































//const fs = require('fs')
//const add = require('./utils.js')
//fs.writeFileSync('notes.txt',  'My name is Ankit.')
//fs.appendFileSync('notes.txt',  'I am 27 years old.')

// const log = console.log
// //const sum = add(4, 3)
// const Notes = getNotes()
// console.log(Notes)

// //console.log(chalk.green(validator.isEmail('ankirmohod@gmail.com')))
// log(chalk.green('Success!'))