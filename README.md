# Hypera
**Hypera** is a simple to use module that allows you to create multi-dimensional arrays in an instant.

## Installation
```sh
$ npm i hypera
```
## Usage
**Hypera** module is imported into your project like this:
```js
const Hypera = require('hypera')();
```
You can also pass in an argument that will serve as the default value for all the elements of the array:

*(If no argument is passed, the default value will be set to ```null```.)*
```js
const Hypera = require('ezhash')(false);
```
In this case, I'm setting the default value to ```false```.
<br>
<br>
<br>

After importing the module, you can use it like this:
```js
// This will create a 2-dimensional array with 3 rows and 3 columns:
let array = Hypera(3,3);

/* [ [ null, null, null ],
     [ null, null, null ],
     [ null, null, null ] ] */
```
Now you can create arrays with as many dimensions as you need.

For example, creating a ***5-dimensional array*** where all the dimensions have a length of *3* would look like this:
```js
let array = Hypera(3,3,3,3,3);
```

## License
**MIT**