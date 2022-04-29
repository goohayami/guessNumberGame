const btnS = document.getElementById("btnS");
const anser = Math.floor(Math.random() * 10) + 1;
const comment = document.getElementById("comment");

console.log(anser);

let i = 0;

btnS.addEventListener("click", () => {
  i += 1;
  // クリックした時に入力された数字を取得（value)してから
  // 比べる前にNumber()メソッドで数字に変換
  const num = document.getElementById("guessNum").value;
  const N = Number(num);
  const A = Number(anser);
  // ランダムで生成された答え
  console.log(num);
  if (A === N) {
    // 正解と不正解の時のメッセージ
    comment.textContent = `${i}回目で正解です!`;
  } else if (A < N) {
    comment.textContent = "もっと下だよ";
  } else {
    comment.textContent = "もっと上だよ!";
  }
});
