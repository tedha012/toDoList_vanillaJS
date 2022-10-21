const quotes = [
  {
    quote: "사람들이 뭐라고 하든 자신이 옳다고 믿는 길이 최선의 길입니다",
    author: "곰돌이 푸",
  },
  {
    quote: "상대방의 마음이 움직이기만 기다리지 말고 먼저 다가가보세요",
    author: "곰돌이 푸",
  },
  {
    quote: "자신을 바꿀수 있는 사람은 오직 자기 자신밖에 없습니다",
    author: "곰돌이 푸",
  },
  {
    quote: "내가 힘들다고 다른 사람을 탓하지 마세요",
    author: "곰돌이 푸",
  },
  {
    quote: "어설프게 아느니 차라리 모르는 편이 나아요",
    author: "곰돌이 푸",
  },
  {
    quote: "적어도 스스로에게는 정직하세요",
    author: "곰돌이 푸",
  },
  {
    quote: "눈앞의 행복을 잡아요",
    author: "곰돌이 푸",
  },
  {
    quote: "작은 행복이 쌓이고 쌓여 큰 행복이 되요",
    author: "곰돌이 푸",
  },
  {
    quote: "세상에 휩쓸리지 않는 방법은 잠시 멈추는 거예요",
    author: "곰돌이 푸",
  },
  {
    quote: "이미 선택한 것에 미련을 두지 마세요",
    author: "곰돌이 푸",
  },
  {
    quote: "첫 번째는 나를 사랑하는 거예요",
    author: "곰돌이 푸",
  },
  {
    quote: "누구나 자기 자신을 가장 사랑합니다",
    author: "곰돌이 푸",
  },
  {
    quote: "친해지고 싶은 사람이 있다면 일단 말을 걸어보세요",
    author: "곰돌이 푸",
  },
  {
    quote: "나의 길은 나만이 정할 수 있어요",
    author: "곰돌이 푸",
  },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
