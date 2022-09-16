## Overview

This small utility is designed to make it easier to hash/unhash database IDs for debugging purposes. It contains two scripts:

* `hash.js`
* `unhash.js`

Configuration is done in the `settings.js` file where you can set the hashing salt and the `minHashLength` (defaulted to 10).

## Prerequisites

* Node.js >v16.x - https://nodejs.org/en/

## Usage

Hash an integer ID:

```node.js
node hash.js 1
```

Unhash a hashed ID:

```node.js
node unhash.js "someHashedString"
```