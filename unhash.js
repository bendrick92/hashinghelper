var Hashids = require('hashids');
var Settings = require('./settings');

console.log('Initializing...');

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Expected id param!');
    process.exit(1);
}

console.log(`Unhashing ${args[0]} with salt '${Settings.salt}'...`);

try {
    var hashids = new Hashids(Settings.salt, Settings.minHashLength);
    var unhashedId = hashids.decode(args[0]);

    console.log('Unhashing complete!');
    console.log('-----');
    console.log(unhashedId[0]);
    console.log('-----');
} catch(e) {
    console.error('Something went wrong hashing!', e);
}