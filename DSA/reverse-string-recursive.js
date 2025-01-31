function reverse(a) {
    if (a.length == 1) { return a[0] }
    if (a.length == 2) { return a[1] + a[0] }
    return a[a.length-1] + reverse(a.splice(1,a.length-2)) + a[0]
}

function reverse_string(s) { return s ? reverse(s.toString().split('')) : s }

reverse_string()        // undefined
reverse_string('')      // ""
reverse_string('0')     // "0"
reverse_string('01')    // "10"
reverse_string('012')   // "210"
reverse_string('0123')  // "3210"
reverse_string(true)    // "eurt"
reverse_string(false)   // false
reverse_string(-1234)   // "4321-"
