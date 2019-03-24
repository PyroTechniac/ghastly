'use strict';

const fs = require('fs');
const jsdoc2md = require('jsdoc-to-markdown');

jsdoc2md.getTemplateData({ files: './src/**/**/**' }).then(arr => {
    arr.forEach(data => {
        console.log(`Rendering data for ${data.scope ? `${data.scope} ` : ''}${data.kind} ${data.longname}`);
    });
    return arr;
}).then(arr => console.log(`Generating docs for ${arr.length} items`));
jsdoc2md.render({ files: './src/**/**/**' }).then(data => fs.writeFile('./.docs/docs.md', data, (err) => { if (err) throw err; }));