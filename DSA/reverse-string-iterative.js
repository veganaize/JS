function reverse_string(s) {
    if (! s) { return s }
    var a = s.toString().split('')
    for (var i=0; i < a.length/2; ++i) {
        var tmp = a[i]
        a[i] = a[a.length-1-i]
        a[a.length-1-i] = tmp
    }
    return a.join('')
}

reverse_string()        // undefined
reverse_string('')      // ""
reverse_string('0')     // "0"
reverse_string('01')    // "10"
reverse_string('012')   // "210"
reverse_string('0123')  // "3210"
reverse_string(true)    // "eurt"
reverse_string(false)   // false
reverse_string(-1234)   // "4321-"
