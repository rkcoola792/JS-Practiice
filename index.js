let a = "ace";
let b = "abcde";
let i = 0;
let j = 0;
while (i < a.length) {
  if (j == b.length) {
    return console.log("false");
  }

  if (a[i] == b[i]) {
    i++;
  }
  j++;
}

return console.log("true");
