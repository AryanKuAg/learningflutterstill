const yargs = require('yargs');
const learningaboutjson = require('./learningaboutjson.js');

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



// // List your notes
// yargs.command({
//     command: "list",
//     description: "Listing your notes",
//     handler: function () {
//         console.log('Listing your all notes');
//     }
// }).help.argv;

// // Reading your new note
// yargs.command({
//     command: "read",
//     description: "Reading a note",
//     handler: function () {
//         console.log('Reading your note');
//     }
// }).help.argv;

yargs.parse();