const fs = require('fs')
const chalk = require('chalk')

const addNote = (title,body)=> {
     const notes = loadNotes();
     const duplicateNote = notes.find((note)=> note.title === title);
     if(!duplicateNote)
     {
         notes.push({
             title: title,
             body: body
         })
         saveNotes(notes);
         console.log(chalk.green('Note Successfully Added'));
     }
     else
     {
        console.log(chalk.red('Title Already Taken'));
     }
}

const removeNote = (title)=> {
    const notes = loadNotes();
    let result = 0;

    if(notes.length == 0)
        console.log(chalk.red('Notes List is Already Empty'));
    
    else if(notes.length > 0)  
    for(let i=0; i<notes.length; i++)
    {
        if(notes[i].title == title)
        {
            notes.splice(i,1);
            console.log(chalk.green('Note Successfully Removed'));
            saveNotes(notes);
            result = 1;
            return;
        }
    }
    
    if(result == 0)
        console.log(chalk.red('No such note present'));
    
}

const listNotes = ()=> {
    const notes = loadNotes();
    if(notes.length == 0)
        console.log(chalk.red('Note List is Empty'));
    else{
        console.log(chalk.blue.inverse('Your Notes are:'))
        for(let i=0; i<notes.length; i++)
            console.log(chalk.cyan.italic.bold('Title: ') + notes[i].title + ' ' + chalk.red.italic.bold('Body: ') + notes[i].body);
    }    
}

const readNote = (title)=> {
    const notes = loadNotes();
    const findNote = notes.find((note)=> note.title === title)
    if(findNote)
        console.log(chalk.cyan.italic.bold('Title: ') +findNote.title + ' ' + chalk.red.italic.bold('Body: ') + findNote.body);
    else
        console.log(chalk.red('Note does not exists'));
}

//File Read/Write Functions Start
const loadNotes = ()=> {
    try{
        const dataBuffer = fs.readFileSync('notes.json').toString();
        const notes = JSON.parse(dataBuffer);
        return notes;
    }
    catch(error){
        return []
    }
}

const saveNotes = (notes)=> fs.writeFileSync('notes.json',JSON.stringify(notes)); //inline function
//File Read/Write Functions Ends


module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}