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
arguments.callee  // reference to currently executing function; js 1.2+
arguments.length
```


### Array <sup>1.1</sup>

```js
array.length  // unsigned 32-bit integer
array.pop()  // remove & return last element
array.push(value, ..)  // append value(s); returns new length
```
