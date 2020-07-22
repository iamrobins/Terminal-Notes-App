const yargs = require('yargs')
const notes = require('./notes.js')

yargs.command({
    command: 'add',
    describe: 'Add a note',
    builder:{
        title:{
            describe: 'Add a title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'Add a body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.addNote(argv.title,argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title:{
            describe: 'Title of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'listNotes',
    describe: 'List Notes',
    handler(){
        notes.listNotes();
    }
})

yargs.command({
    command: 'readNote',
    describe: 'Read Note',
    builder:{
        title:{
            desctibe: 'Title of Note',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv){
        notes.readNote(argv.title);
    }
})

yargs.parse()