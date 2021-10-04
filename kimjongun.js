const yargs = require('yargs');
const fs = require('fs');
const learningaboutjson = require('./learningaboutjson.js');
const chalk = require('chalk');

// Adding a new note
yargs.command({
    command: "add",
    description: "Adding a new note",
    builder: {
        title: {
            description: "Your Note Title",
            demandOption: true,
            type: 'string'
        },
        body: {
            description: "Your Note Body",
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        console.log('Your Note Title:', argv.title);
        console.log('Your Note Body:', argv.body);

    }
});




// Removing a new note
yargs.command({
    command: "remove",
    description: "Remove your note",
    showInHelp: true,
    builder: {
        title: {
            description: 'to remove the note ja',
            showInHelp: true,
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argvskld) {
        // console.log('Removing a new note', argvskld);
        learningaboutjson.removenote(argvskld.title)

    }
});



// List your notes
yargs.command({
    command: "list",
    description: "Listing your notes",
    handler: function () {
        try {
            const thing = fs.readFileSync('json-01.json')
            const thingjson = thing.toString();
            const ob = JSON.parse(thingjson)
            console.log(chalk.yellow('Your notes are following:'))
            ob.forEach(element => {
                console.log(chalk.white.inverse(element.name), chalk.cyan.inverse(element.gender))
            })
        } catch (e) {
            console.log('No notes found!!!')
        }
    }
});

// Reading your new note
yargs.command({
    command: "read",
    description: "Reading a note",
    builder: {
        title: {
            description: 'note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        try {
            const allnotes = fs.readFileSync('json-01.json')
            const notestojson = allnotes.toString()
            const notestoobject = JSON.parse(notestojson)
            const thenote = notestoobject.find(elem => elem.name === argv.title)
            if (thenote) {
                console.log(chalk.bold.yellow.inverse(thenote.name))
                console.log(chalk.whiteBright(thenote.gender))

            } else {
                console.log(chalk.red.inverse('Nothing found like that!!!!'))

            }
        } catch (e) {
            console.log(chalk.red.inverse('Nothing found!!!!'))
        }
    }
});

yargs.parse();