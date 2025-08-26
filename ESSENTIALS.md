Javascript Essentials
=====================

_A JS quick reference minus most of the ES6+ pollution!_


### Operator Precedence

|                     |                                  |
|---------------------|----------------------------------|
| `. [] () new`       | property, element, function, new
| `++ -- - + ~ !`<br />`delete typeof void` | unary operators
| `* / %`             | multiply, divide, remainder
| `+ -`               | add/concat, subtract
| `<< >> >>>`         | shift left, shift right sign/zero extension
| `< > <= >= instanceof in` | less/greater than, less/greater than/equal, type, membership
| `!= == !== ===`     | non/equality, non/identical
| `&`                 | bitwise AND
| `^`                 | bitwise XOR
| `\|`                | bitwise OR
| `&&`                | logical AND
| `\|\|`              | logical OR
| `?:`                | ternary conditional
| `= *= /= += -= %=`<br />`<<= >>= >>>=`<br />`&= ^= \|= &&= \|\|=`<br />`**=` <sup>2016</sup> `??=` <sup>2020</sup> | assignment
| `=>` <sup>ES6</sup> | arrow operator
| `,`                 | comma operator


### Arguments <sup>1.1</sup>

```js
arguments[n]
arguments.callee  // reference to currently executing function; js 1.2
arguments.length
```


### Array <sup>1.1</sup>

```js
new Array()                          // `[]` preferred since js 1.2
new Array(size)
new Array(element1, element2, ..)    // `[element1, element2, ..]` preferred since js 1.2

array.concat(element1, element2, ..)  // returns new array; array args deconstructed; js 1.2
array.join(separator)  // returns string of elements, with separator string between each
array.length           // unsigned 32-bit integer
array.pop()            // remove & return last element; js 1.2
array.push(value, ..)  // append value(s); returns new length; js 1.2
array.reverse()        // reverse elements in-place; returns nothing
array.shift()          // remove & return first element; shift elements down; decrement length; js 1.2
array.slice(begin, end)        // returns new array; `begin` to `end` exclusive; js 1.2
array.sort(ordering_function)  // returns reference; sorted in-place; numbers converted to strings; no time/space guarantees
array.splice(begin, count, element1, ..)  // returns array of deleted elements; deletes `count` then inserts args; js 1.2
array.toLocaleString()         // returns localized string representation of array; ES1
array.toString()               // returns string representation of array
array.unshift(element1, ..)    // shift elements up & insert arg(s) at beginning of array; js 1.2
```
