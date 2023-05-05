var result = document.getElementById("result");

var ans = 0;

function increment() {
  ans++;
  result.innerHTML = ans;
}

function reset() {
  ans = 0;
  result.innerHTML = ans;
}
