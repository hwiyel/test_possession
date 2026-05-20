// [다국어 데이터 팩 구조 변수] 한국어와 영어 텍스트 매핑 데이터를 변수로 선언하여 영미권 확장을 구현했습니다.
const localeData = {
    ko: {
        startTitle: "🔮 멋진 신세계 테스트",
        startDesc: "내 몸에는 어떤 영혼이 빙의되어 있을까?",
        startBtn: "테스트 시작하기",
        loadingText: "영혼의 주파수를 분석 중입니다...",
        resultSub: "나의 빙의 유형은?",
        restartBtn: "다시 테스트하기",
        questions: [
            { q: "누군가 말도 안 되는 시비를 걸어왔을 때 나는?", a: [{text: "매섭게 참교육한다.", type: "A"}, {text: "합의금으로 짓밟는다.", type: "B"}, {text: "일단 참아본다.", type: "C"}, {text: "연기 연습을 한다.", type: "D"}] }
        ],
        results: {
            A: { title: "크러시 영혼", desc: "부조리함을 보면 절대 참지 않는 화끈한 성격입니다." },
            B: { title: "재벌가 영혼", desc: "이성적이며 비즈니스 흐름을 꿰뚫고 있습니다." },
            C: { title: "성실한 영혼", desc: "하루하루 노력하지만 마음이 다소 여린 편입니다." },
            D: { title: "스타성 영혼", desc: "위기를 기회로 승화시키는 천생 연예인 체질입니다." }
        }
    },
    en: {
        startTitle: "🔮 Alter Ego Test",
        startDesc: "Which hidden soul is possessing your body right now?",
        startBtn: "Start Test",
        loadingText: "Analyzing your spiritual frequency...",
        resultSub: "Your Inner Type is...",
        restartBtn: "Retry Test",
        questions: [
            { q: "How do you react when someone starts nonsense drama with you?", a: [{text: "Teach them a hard lesson immediately.", type: "A"}, {text: "Crush them with money or legal action.", type: "B"}, {text: "Hold it back and stay quiet.", type: "C"}, {text: "Analyze them to use for my next creative work.", type: "D"}] }
        ],
        results: {
            A: { title: "The Firecracker", desc: "You have a fierce charisma and never let injustice slide." },
            B: { title: "The Tycoon", desc: "Cold, logical, and knows exactly how money and power work." },
            C: { title: "The Honest Striver", desc: "A pure-hearted, diligent soul who works hard every single day." },
            D: { title: "The Born Superstar", desc: "Natural entertainer who turns any crisis into an artistic opportunity." }
        }
    }
};

let currentLang = 'ko';
let currentIdx = 0;
let score = { A: 0, B: 0, C: 0, D: 0 };

function switchLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;
    initApp();
}

function initApp() {
    const data = localeData[currentLang];
    document.getElementById('start-title').innerText = data.startTitle;
    document.getElementById('start-desc').innerText = data.startDesc;
    document.getElementById('start-btn').innerText = data.startBtn;
    document.getElementById('loading-text').innerText = data.loadingText;
    document.getElementById('result-sub-text').innerText = data.resultSub;
    document.getElementById('restart-btn').innerText = data.restartBtn;
    
    if (document.getElementById('question-view').classList.contains('hidden') === false) {
        showQuestion();
    }
}

function startTest() {
    changeView('start-view', 'question-view');
    showQuestion();
}

function showQuestion() {
    const data = localeData[currentLang];
    const qData = data.questions[currentIdx];
    
    document.getElementById('progress').innerText = `${currentIdx + 1} / ${data.questions.length}`;
    document.getElementById('question-text').innerText = qData.q;
    
    const btnContainer = document.getElementById('answer-buttons');
    btnContainer.innerHTML = '';
    
    qData.a.forEach(ans => {
        const btn = document.createElement('button');
        btn.className = 'ans-btn';
        btn.innerText = ans.text;
        btn.onclick = () => selectAnswer(ans.type);
        btnContainer.appendChild(btn);
    });
}

function selectAnswer(type) {
    score[type]++;
    currentIdx++;
    
    const data = localeData[currentLang];
    if (currentIdx < data.questions.length) {
        showQuestion();
    } else {
        showLoadingAndResult();
    }
}

function showLoadingAndResult() {
    changeView('question-view', 'loading-view');
    setTimeout(() => {
        changeView('loading-view', 'result-view');
        calcResult();
    }, 2000);
}

function calcResult() {
    let maxType = 'A';
    let maxScore = -1;
    for (const key in score) {
        if (score[key] > maxScore) {
            maxScore = score[key];
            maxType = key;
        }
    }
    
    const finalResult = localeData[currentLang].results[maxType];
    document.getElementById('result-title').innerText = finalResult.title;
    document.getElementById('result-desc').innerText = finalResult.desc;
}

function restartTest() {
    currentIdx = 0;
    score = { A: 0, B: 0, C: 0, D: 0 };
    changeView('result-view', 'start-view');
    initApp();
}

function changeView(fromId, toId) {
    document.getElementById(fromId).classList.add('hidden');
    document.getElementById(toId).classList.remove('hidden');
}

// 초기화 구동
window.onload = () => { initApp(); };