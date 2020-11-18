
Survey
    .StylesManager
    .applyTheme("default");

var json = {
    title: "Employment Screening",
    pages: [{
        questions: [
            {
                type: "radiogroup",
                name: "canadian",
                title: "Are you a Canadian citizen?",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "plutonium",
                title: "Do you have, at minimum (11+ years) - graduate research experience in the field of plutonium stabilization?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "resume",
                title: "Do you tailor your resume for automated resume scanners?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "programming",
                title: "Do you have programming experience in Scala, Fortran, BASIC, C++, C#, JavaScript and ArnoldC?", 
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "sql",
                title: "Do you 5+ years experience creating multiplication tables in SQL?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "managing",
                title: "Do you have experience managing a team between 5 to 10 people?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "prize",
                title: "Have you ever won a Pulitzer Prize?",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "No"
            },
            {
                type: "radiogroup",
                name: "soldered",
                title: "Have you ever soldered electronic components on a breadboard?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "seo",
                title: "Do you have the ability to improve the SEO of a website, and bring it to the top of the search results through Google?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "Yes"
            },
            {
                type: "radiogroup",
                name: "agreeable",
                title: "Did you look at the JavaScript file to help you select all the correct answers?",
                choicesOrder: "random",
                choices: [
                    "Yes", "No"
                ],
                correctAnswer: "No"
            }
        ]
    }],
    completedHtml: "<h4>You have answered correctly <b>{correctedAnswers}</b> questions from <b>{questionCount}</b>.</h4>"
};

window.survey = new Survey.Model(json);

survey
    .onComplete
    .add(function (result) {
        document.location = "singlethanks.html";
    });

$("#surveyElement").Survey({ model: survey });