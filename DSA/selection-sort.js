function selection_sort(list) {
  // Start at left
  for (var i = 0; i < list.length-1; i++) {
    var min = i;
    // Move right to find lowest value
    for (var j = i+1; j < list.length; j++) {
      if (list[j] < list[min]) min = j;
    }
    
    // Swap in the lowest value
    if (list[min] != list[i]) {
      var other = list[i];
      list[i] = list[min];
      list[min] = other;
    }
  }
  
  return list;
}

console.log(selection_sort([2,3,4,5,1]));