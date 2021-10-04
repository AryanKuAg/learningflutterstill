const fs = require('fs');
const chalk = require('chalk');

// const human = {
//     name: "Aryan",
//     age: 18,
//     gender: "male"
// };
// const humanJSON = JSON.stringify(human);

// fs.writeFileSync('json-01.json', humanJSON);

// const buffer = fs.readFileSync('json-01.json');
// const buffertojson = buffer.toString();
// const jsontobject = JSON.parse(buffertojson);
// jsontobject.name = "Agrawal ji";
// jsontobject.age = 19;
// const justanother = JSON.stringify(jsontobject);
// fs.writeFileSync('json-01.json', justanother);


// removing a note

const removenote = function (title) {

    try {
        const note = fs.readFileSync('json-01.json')
        const noteJSON = note.toString()
        const noteobject = JSON.parse(noteJSON)
        // console.log(noteobject)
        // console.log('-----------------------------------')
        let temp = 0;
        for (let i = 0; i < noteobject.length; i++) {
            // console.log(noteobject[i].name, title);
            if (noteobject[i].name === title) {
                noteobject.splice(i, 1);
                temp++;
                // console.log('hey')
            }
        }
        console.log(temp)
        if (temp === 0) {
            // console.log('No note found');
            console.log(chalk.red.inverse('No note found'))
            return;
        }

        const uptodate = JSON.stringify(noteobject)
        fs.writeFileSync('json-01.json', uptodate)
        // console.log('note removed')
        console.log(chalk.green.inverse('note removed'))

    } catch (e) {
        // console.log('There is nothing like that')
        console.log(chalk.red.inverse('No note found'))

    }
}

module.exports = {
    removenote: removenote
}