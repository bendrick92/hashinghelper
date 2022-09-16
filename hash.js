var Hashids = require('hashids');
var Settings = require('./settings');

console.log('Initializing...');

const args = process.argv.slice(2);

if (args.length < 1) {
    console.error('Expected id param!');
    process.exit(1);
}

console.log(`Hashing ${args[0]} with salt '${Settings.salt}'...`);

try {
    var hashids = new Hashids(Settings.salt, Settings.minHashLength);
    var hashedId = hashids.encode(args[0]);

    console.log('Hashing complete!');
    console.log('-----');
    console.log(hashedId);
    console.log('-----');
} catch(e) {
    console.error('Something went wrong hashing!', e);
    process.exit(1);
}