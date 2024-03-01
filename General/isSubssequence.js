let a="adc"
let s="ahbgdc"

var isSubsequence = function (a, s) {
  let i = 0;
  j = 0;
  if (a.length == 0 && s.length == 0) return true;

  if (s.length == 0) return false;
  while (i < s.length) {
    if (a[j] == s[i]) {
      j++;
    }
    i++;

    if (j === a.length) return true;

    if (i == s.length) return false;
  }
};

console.log(isSubsequence(a,s))