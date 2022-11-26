const questions = [{
    'que': 'Which of the following is Markup Language?',
    'a': 'HTML',
    'b': 'PHP',
    'c': 'JAVAScript',
    'd': 'CSS',
    'correct': 'a'
},

{
    'que': 'What year was JavaScript launched?',
    'a': '1996',
    'b': '1995',
    'c': '1994',
    'd': 'None of the above',
    'correct': 'b'

    },

    {
        'que': 'What does CSS stands for?',
        'a': 'Hypertext Markup Language',
        'b': 'Cascading Style Sheet',
        'c': 'Jason Object Notation',
        'd': 'Content Management System',
        'correct': 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;

const qBox = document.getElementById("qBox")
const optionsInput = document.querySelectorAll(".form-input")
const loadQuestion = () => {
    if (index === total) {
        return endQuiz()
    }
    resetForm()
    const data = questions[index]
    qBox.innerText = ` ${index + 1}) ${data.que}`;
    optionsInput[0].nextElementSibling.innerText = data.a;
    optionsInput[1].nextElementSibling.innerText = data.b;
    optionsInput[2].nextElementSibling.innerText = data.c;
    optionsInput[3].nextElementSibling.innerText = data.d;
}

const submitQuiz = () => {
    const data = questions[index]
    const ans = getAnswer()
    if (ans == data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionsInput.forEach(
        (input) => {
            if (input.checked) {
                answer = input.value;
            }
        }
    )
    return answer;
}

const resetForm = () => {
    optionsInput.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () => {
    document.getElementById("box").innerHTML = `
    <div style="text-align:center">
    <h3> Thank you for playing quiz </h3>
    <h2> ${right}/${total} are correct. </h2>
    </div>
    `
}


loadQuestion();