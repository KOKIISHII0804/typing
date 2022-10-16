let untyped = "";
let typed = "";
let score = 0;

const untypedfield = document.getElementById("untyped");
const typedfieled = document.getElementById("typed");
const wrap = document.getElementById("wrap");
const start = document.getElementById("start");
const wordCountLabel = document.getElementById("counter");
const textLists = [
  "Hello World",
  "This is my App",
  "How are you?",
  "Hello World",
  "This is my App",
  "How are you?",
  "Today is sunny",
  "I love JavaScript!",
  "Good morning",
  "I am Japanese",
  "Let it be",
  "Samurai",
  "Typing Game",
  "Information Technology",
  "I want to be a programmer",
  "What day is today?",
  "I want to build a web app",
  "Nice to meet you",
  "Chrome Firefox Edge Safari",
  "machine learning",
  "Brendan Eich",
  "John Resig",
  "React Vue Angular",
  "Netscape Communications",
  "undefined null NaN",
  "Thank you very much",
  "Google Apple Facebook Amazon",
  "ECMAScript",
  "console.log",
  "for while if switch",
  "var let const",
  "Windows Mac Linux iOS Android",
  "programming",
];

const createText = () => {
  typed = "";
  typedfieled.textContent = typed;
  let random = Math.floor(Math.random() * textLists.length);
  untyped = textLists[random];
  untypedfield.textContent = untyped;
};

// キー入力の判定?
const keyPress = (e) => {
  if (e.key !== untyped.substring(0, 1)) {
    wrap.classList.add("mistyped");
    setTimeout(() => {
      wrap.classList.remove("mistyped");
    }, 100);

    return;
  }

  score++;
  scoreColor(score);
  // スコアを表示させる
  wordCountLabel.textContent = score;
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedfieled.textContent = typed;
  untypedfield.textContent = untyped;

  if (untyped === "") {
    createText();
  }
};

// タイピングスキルのランクを判定
const rankCheck = (score) => {
  let text = "";
  if (score < 10) {
    text = `rank C Bまであと${20 - score}文字です`;
  } else if (score < 20) {
    text = `rank B Aまであと${30 - score}文字です`;
  } else if (score >= 30) {
    text = "rank A ";
  }
  return `${text}\n${score}文字打てました`;
};
// スコアが増えるとるとカウンターの色が変わる
const scoreColor = (score) => {
  if (score < 10) {
    wordCountLabel.style.color = "yellow";
  } else if (score < 20) {
    wordCountLabel.style.color = "blue";
  }
};

// ゲームを終了
const gameOver = (id) => {
  clearInterval(id);
  confirm(rankCheck(score));
};
//

// カウントダウンタイマー
const timer = () => {
  let time = count.textContent;
  const id = setInterval(() => {
    time--;
    count.textContent = time;
    if (time <= 0) {
      gameOver(id);
    }
  }, 1000);
};

start.addEventListener("click", () => {
  timer();
  createText();
  start.style.display = "none";
  document.addEventListener("keypress", keyPress);
});
untypedfield.textContent = "スタートボタンで開始";
