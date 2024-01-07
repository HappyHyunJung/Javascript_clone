const quotes = [
    {
        quote : "상황을 가장 잘 활용하는 사람이 가장 좋은 상황을 맞는다",
        author : "존 우든"
    },
    {
        quote : "일반적인 것을 잃을 위험을 감수하지 않으면 평범한 것에 만족해야 한다",
        author : "짐 론"
    },
    {
        quote : "한 가지 생각을 선택하라. 그 생각을 당신의 삶으로 만들어라. " 
              + "\n그걸 생각하고, 꿈꾸고, 그에 기반해서 살아가라. "
              + "\n당신의 몸의 모든 부분, 뇌, 근육, 신경을 그 생각으로 가득 채우고 다른 생각은 다 내버려둬라. "
              + "\n이것이 성공하는 방법이다",
        author : "스와미 비베카난다"
    },
    {
        quote : "기다리는 사람에게 좋은 일이 생기지만, 찾아나서는 사람에게는 더 좋은 일이 생긴다",
        author : "미상"
    },
    {
        quote : "늘 하던 대로 하면 늘 얻던 것을 얻는다",
        author : "미상"
    },
    {
        quote : "열정을 잃지 않고 실패에서 실패로 걸어가는 것이 성공이다",
        author : "윈스턴 처칠"
    },
    {
        quote : "애벌레가 세상이 끝났다고 생각하는 순간 나비로 변했다",
        author : "미상"
    },
    {
        quote : "성공한 사업가들은 긍정적인 에너지를 주는 사람들이지 가져가는 사람들이 아니다",
        author : "미상"
    },
    {
        quote : "성공한 사람을 볼 때 당신은 대중에게 드러난 영예만 보지, " 
              + "\n절대 그 영예를 얻기 위해 했던 개인적 희생은 보지 않는다",
        author : "바입하브 샤"
    },
    {
        quote : "성공한 사람이 되려고 노력하기보다 가치있는 사람이 되려고 노력하라",
        author : "알버트 아인슈타인"
    },
    {
        quote : "위대한 정신을 가진 사람들은 생각을 논한다. 평범한 사람들은 사건을 논한다. 마음이 좁은 사람들은 사람들을 논한다",
        author : "엘리너 루즈벨트"
    },
    {
        quote : "남들이 당신에게 던진 벽돌들로 탄탄한 기반을 쌓을 수 있어야 성공한다",
        author : "데이비드 브링클리"
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");
const length = quotes.length;
//console.log(length);
const todaysQuote = quotes[Math.floor(Math.random() * length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;
