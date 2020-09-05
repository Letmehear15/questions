export const api = {
    postQuestion(question) {
        return fetch('https://question-app-a0704.firebaseio.com/questions.json',{
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(question)
        })
        .then(res=>res.json())
    },
    getQuestion() {
        return fetch('https://question-app-a0704.firebaseio.com/questions.json')
        .then(res=>res.json())
    }
}