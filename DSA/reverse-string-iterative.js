function reverse_string(s) {
    var a = s.split('')
	for (var i=0; i < a.length/2; ++i) {
        var tmp = a[i]
        a[i] = a[a.length-1-i]
        a[a.length-1-i] = tmp
    }
    return a.join('')
}

reverse_string('hello world!')
