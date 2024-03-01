//susequence
let a = "ace";
let b = "abcde";
let i = 0;
let j = 0;
while (i < a.length) {
  if (j == b.length) {
    console.log("false");
    return;
  }
  if (a[i] == b[j]) {
    i++;
  }
  j++;
}
