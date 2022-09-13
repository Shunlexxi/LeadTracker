
let myLeads = []


//constant cannot be reassigned!
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")

//save a key-value pair in localStorage
//localStorage.setItem("myLeads", "www.linkedin.com")

//get the value logged after refreshing the page
//console.log( localStorage.getItem("myLeads") )

//clearing the localstorage
//localStorage.clear()

//get the leads from the localStorage & storing it in a var
let savedLead = JSON.parse( localStorage.getItem("myLeads") )
console.log(savedLead)


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )

if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    renderLeads()
}


inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    renderLeads()

    console.log( localStorage.getItem("myLeads") )
})


deleteBtn.addEventListener('dblclick', function() {
    //call clear
    leadsFromLocalStorage = null
    console.log("cleared local storage")
})

    
//listItems is later reassign to <li> and mylead[i] - via loop

function renderLeads() {
    let listItems = ""
    for (let i = 0; i < myLeads.length; i++) {
        
        //Mine
        //listItems += "<li><a href=" + myLeads[i] + " target=" + "_blank" + ">" + myLeads[i] + "</a></li>"
        
        //Per
        //listItems += "<li><a href='" + myLeads[i] + "' target='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
        
        //Template string
        listItems += `
        <li>
            <a target='_blank' href='${myLeads[i]}'>${myLeads[i]}</a>
        </li>
        `
        console.log(listItems)
    }


//<a href="https://www.facebook.com" target="_blank">Check</a>    

    //render the listItems inside the unordered list; ulEl.innerHTML
    ulEl.innerHTML = listItems
}
    


 //rendering the leads
//  for (let i = 0; i < myLeads.length; i++){
        
                

    //ulEl.innerHTML += "<li>" + "<a href=" + myLeads[i] + ">" + myLeads[i] + "</a></li>"

    //or using document.creteElement and .append
    // const li = document.createElement("li")
    // li.textContent = myLeads[i]
    // ulEl.append(li)
    //}
