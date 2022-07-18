 
let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveBtn = document.getElementById("save-btn")

const  leadsFromLocalStorage =JSON.parse(localStorage.getItem("myLeads")) 
console.log(leadsFromLocalStorage)

if (leadsFromLocalStorage ) {
    myLeads =   leadsFromLocalStorage
    render(myLeads)
}

function render(leads){
    let listiems = ""
    for (let i = 0; i < leads.length; i++) {
        listiems += `<li>
        <a target= '_blank' href='${leads[i]}'>${leads[i]}</a>
        </li> `
    }
    
    ulEl.innerHTML = listiems  
}


saveBtn.addEventListener('click', function(){
    
})

deleteBtn.addEventListener("click", function(){
    localStorage.clear()
    myLeads = []
    render(myLeads)
     
})

inputBtn.addEventListener("click", function(){
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads",JSON.stringify(myLeads))
    render(myLeads)
    console.log(localStorage.getItem("myLeads"))
     
})

