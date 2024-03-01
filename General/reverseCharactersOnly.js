let s = "Test1ng-Leet=code-Q!";
let x = s
  .split("")
  .filter(
    (ele, index, arr) =>
      (s.charCodeAt(index) >= 97 && s.charCodeAt(index) <= 122) ||
      (s.charCodeAt(index) >= 65 && s.charCodeAt(index) <= 90)
  )
  .reverse();

for (let i = 0; i < s.length; i++) {
  if (s.charCodeAt(i) >= 33 && s.charCodeAt(i) <= 64) {
    x.splice(i, 0, s[i]);
  }
}
console.log(x.join(""));
//a =97  z=122 A=65 Z=90
//"Qedo1ct-eeLg=ntse-T!"
