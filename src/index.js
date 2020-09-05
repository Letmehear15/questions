import './style.css'
import {validateInput} from './utils'
import { api } from './api'


const input = document.querySelector("#askInput")
const btn = document.querySelector("#btn")
const template = document.querySelector('.template')

window.addEventListener('load', () => {
    render()
})
input.addEventListener('input',(e)=> {
    if (validateInput(e.target.value)) btn.disabled=false
    else btn.disabled=true
})
btn.addEventListener("click", btnHandler)

function btnHandler(e) {
    e.preventDefault()
    btn.disabled=true

    const newData = {
        value: input.value,
        date:  new Date().toJSON()
    }

    api.postQuestion(newData)
    .then(() => {
        input.value = ''
        input.className = '' 
        render()
    })    
}
async function render() {
    const data = await getRenderData();
    template.innerHTML = ""
    data.map(el => {
        const HTML = `
            <span class="date">${new Date(el.date).toLocaleDateString()} ${new Date(el.date).toLocaleTimeString()}</span>
            <span class="question">${el.value}</span>
        `
        template.innerHTML += HTML
    }) 
}
async function getRenderData() {
    const res = await api.getQuestion()
    const questionsArr = []
    for (let key in res) {
        questionsArr.push(res[key])
    }
    return questionsArr
}
