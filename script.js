// [수정 변수] 카카오 개발자 센터에서 발급받은 고유 JavaScript 키를 입력하세요.
const KAKAO_APP_KEY = 'YOUR_KAKAO_JAVASCRIPT_KEY'; 

// 카카오 SDK 초기화 실행
if (typeof Kakao !== 'undefined' && KAKAO_APP_KEY !== 'YOUR_KAKAO_JAVASCRIPT_KEY') {
    Kakao.init(KAKAO_APP_KEY);
}

// [다국어 데이터 팩] 한국어와 영어 각각 4개의 질문과 결과를 완벽히 매핑했습니다.
const localeData = {
    ko: {
        startTitle: "🔮 멋진 신세계 테스트",
        startDesc: "내 몸에는 어떤 영혼이 빙의되어 있을까?",
        startBtn: "테스트 시작하기",
        loadingText: "영혼의 주파수를 분석 중입니다...",
        resultSub: "나의 빙의 유형은?",
        restartBtn: "다시 테스트하기",
        questions: [
            {
                q: "누군가 나에게 말도 안 되는 시비를 걸어왔을 때 나의 대처는?",
                a: [
                    { text: '"더러운 입을 놀리느냐!"라며 매섭게 참교육한다.', type: 'A' },
                    { text: '자본의 힘이나 합의금으로 조용히 짓밟아준다.', type: 'B' },
                    { text: '눈물을 흘리며 억울해하지만 일단 참아본다.', type: 'C' },
                    { text: '이 상황을 나중에 연기나 콘텐츠로 쓸 생각에 싱글벙글한다.', type: 'D' }
                ]
            },
            {
                q: "돈을 벌 수 있는 일생일대의 기회가 온다면?",
                a: [
                    { text: '수단과 방법을 가리지 않고 무조건 쟁취한다.', type: 'A' },
                    { text: '이미 돈이 많아서 크게 관심이 없다.', type: 'B' },
                    { text: '마트 알바라도 하면서 성실하게 한 푼 두 푼 모은다.', type: 'C' },
                    { text: '대박을 노리며 일단 판에 뛰어들고 본다.', type: 'D' }
                ]
            },
            {
                q: "내가 원하는 이상적인 나의 모습은?",
                a: [
                    { text: '모두가 내 앞에 무릎 꿇는 절대 권력자', type: 'A' },
                    { text: '아쉬울 것 하나 없는 냉철한 자본주의 괴물 재벌', type: 'B' },
                    { text: '소박하지만 짠내 나지 않는 행복한 일상', type: 'C' },
                    { text: '화려한 조명을 받는 글로벌 대스타', type: 'D' }
                ]
            },
            {
                q: "친구가 힘든 일을 겪고 눈물을 흘릴 때 나는?",
                a: [
                    { text: '"누구냐? 누가 널 울렸냐?" 당장 패주러 간다.', type: 'A' },
                    { text: '해결책을 제시하며 위로금조로 통장에 돈을 쏴준다.', type: 'B' },
                    { text: '같이 울어주며 짠내 나는 공감을 나눈다.', type: 'C' },
                    { text: '우는 친구의 감정선을 유심히 관찰하며 연기 연습을 한다.', type: 'D' }
                ]
            }
        ],
        results: {
            A: { title: "조선 악녀 영혼 씌인 신서리", desc: "당신에게선 강렬한 카리스마와 절대 참지 않는 크러시가 느껴집니다. '더러운 입을 놀리느냐!' 밈의 주인공처럼, 부조리함을 보면 깡패든 재벌이든 처단하는 화끈한 성격입니다." },
            B: { title: "자본주의 괴물 재벌 차세계", desc: "냉철하고 이성적이며, 비즈니스와 돈의 흐름을 정확히 꿰뚫고 있습니다. 가끔 차가워 보이지만 자기 사람에게는 확실한 보상을 해주는 스타일입니다." },
            C: { title: "짠내 폭발 무명 배우 신서리(본체)", desc: "하루하루 성실하고 사랑스럽게 살아가는 노력파입니다. 마트 시식 알바부터 시작해 고군분투하지만, 마음이 여려 가끔 손해를 보기도 합니다. 하지만 곧 대기만성할 운명!" },
            D: { title: "글로벌 흥행 메이커 슈퍼스타", desc: "사람들의 이목을 끄는 천생 연예인 체질입니다. 위기 상황도 하나의 콘텐츠나 기회로 승화시키는 놀라운 능글맞음과 멘탈을 가지고 있습니다." }
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
            {
                q: "How do you react when someone starts nonsense drama with you?",
                a: [
                    { text: "Teach them a hard lesson immediately with fierce charisma.", type: 'A' },
                    { text: "Crush them silently using financial power or legal action.", type: 'B' },
                    { text: "Hold it back, cry out of frustration, but endure it for now.", type: 'C' },
                    { text: "Smile inside, planning to use this situation for my next acting/content.", type: 'D' }
                ]
            },
            {
                q: "What if a once-in-a-lifetime opportunity to make huge money comes?",
                a: [
                    { text: "Seize it at all costs, by any means necessary.", type: 'A' },
                    { text: "Not that interested because I am already rich enough.", type: 'B' },
                    { text: "Work diligently at part-time jobs and save penny by penny.", type: 'C' },
                    { text: "Aim for the jackpot and jump right into the game.", type: 'D' }
                ]
            },
            {
                q: "What is your ideal version of yourself?",
                a: [
                    { text: "An absolute ruler with everyone kneeling before me.", type: 'A' },
                    { text: "A cold capitalist tycoon who lacks nothing.", type: 'B' },
                    { text: "A simple, happy daily life without financial struggles.", type: 'C' },
                    { text: "A global superstar under the flashy spotlight.", type: 'D' }
                ]
            },
            {
                q: "When a friend goes through a hard time and cries, you:",
                a: [
                    { text: "Go straight to find who made them cry and punish them.", type: 'A' },
                    { text: "Offer a practical solution and wire some consolidation money.", type: 'B' },
                    { text: "Cry along with them and deeply sympathize with their pain.", type: 'C' },
                    { text: "Closely observe their emotional breakdown for my acting practice.", type: 'D' }
                ]
            }
        ],
        results: {
            A: { title: "The Joseon Villainess", desc: "You possess a fierce charisma and never let injustice slide. Just like the iconic line, you confront anyone, rich or powerful, with absolute confidence." },
            B: { title: "The Capitalist Tycoon", desc: "Cold, logical, and knows exactly how money and power work. You might seem detached, but you reward your people definitely." },
            C: { title: "The Honest Striver", desc: "A pure-hearted, diligent soul who works hard every single day. You might suffer losses due to your soft heart, but success awaits you." },
            D: { title: "The Born Superstar", desc: "A natural entertainer who catches everyone's eyes. You have an incredible mindset to turn any crisis into a creative opportunity." }
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
    
    // 현재 진행 중일 때 언어를 바꾸면 질문 화면도 갱신
    if (!document.getElementById('question-view').classList.contains('hidden')) {
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
    
    // [가독성 매개변수] 상단 프로그레스 바에 전체 질문 개수가 동적으로 반영됩니다.
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
    }, 2500);
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

function copyLink() {
    const currentUrl = window.location.href;
    navigator.clipboard.writeText(currentUrl).then(() => {
        if (currentLang === 'ko') {
            alert('테스트 링크가 복사되었습니다! 친구들에게 공유해 보세요.');
        } else {
            alert('Link copied to clipboard! Share it with your friends.');
        }
    }).catch(err => {
        console.error('링크 복사 실패:', err);
    });
}

function shareKakao() {
    if (!Kakao.isInitialized()) {
        alert('카카오 SDK 초기화가 필요합니다. APP_KEY를 확인해주세요.');
        return;
    }

    let maxType = 'A';
    let maxScore = -1;
    for (const key in score) {
        if (score[key] > maxScore) {
            maxScore = score[key];
            maxType = key;
        }
    }
    const finalResult = localeData[currentLang].results[maxType];

    Kakao.Share.sendDefault({
        objectType: 'feed',
        content: {
            title: finalResult.title,
            description: finalResult.desc,
            imageUrl: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?w=500',
            link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
        },
        buttons: [
            {
                title: currentLang === 'ko' ? '나도 테스트 하기' : 'Take Test',
                link: { mobileWebUrl: window.location.href, webUrl: window.location.href },
            },
        ],
    });
}

window.onload = () => { initApp(); };