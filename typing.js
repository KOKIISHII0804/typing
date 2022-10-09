let untyped = "";
let typed = "";
const untypedField = document.getElementById("untyped");
const typedFieled = document.getElementById("typed");
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
  let random = Math.floor(Math.random() * textLists.length);
  untyped = textLists[random];
  untypedField.textContent = untyped;
  typed = "";
  typedFieled.textContent = typed;
};
createText();

// キー入力の判定?
const keyPress = (e) => {
  typed += untyped.substring(0, 1);
  untyped = untyped.substring(1);
  typedFieled.textContent = typed;
  untypedField.textContent = untyped;
  if (untyped === "") {
    createText();
  }
};

// タイピングスキルのランクを判定
const rankCheck = (score) => {};

// ゲームを終了
const gameOver = (id) => {};

// カウントダウンタイマー
const timer = () => {};

document.addEventListener(keyPress, keyPress);
