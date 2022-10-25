function sameCase(a, b) {
    if (a === a.toUpperCase() && b === b.toUpperCase()) {
        return 1
    }
    if (a === a.toLowerCase() && b === b.toLowerCase()) {
        return 1
    }
    if (a === a.toLowerCase() && b === b.toUpperCase()) {
        return 0
    }
    if (a === a.toUpperCase() && b === b.toLowerCase()) {
        return 0
    } else {
        return -1
    }
}

/*

function sameCase(a, b) {
    if (a == a.toUpperCase() && b == b.toUpperCase()) {
        return -1
    }
    if (a == a.toLowerCase() && b == b.toLowerCase()) {
        return 1
    }
    if (a == a.toLowerCase() && b == b.toUpperCase()) {
        return 0
    }
    if (a == a.toUpperCase() && b == b.toLowerCase()) {
        return 0
    }
}


*/
/* describe("Solution", function() {
  doTest('C', 'B', 1);
  doTest('b', 'a', 1);
  doTest('d', 'd', 1);
  doTest('A', 's', 0);
  doTest('c', 'B', 0);
  doTest('b', 'Z', 0);
  doTest('\t', 'Z', -1);
  doTest('H', ':', -1);
}); */