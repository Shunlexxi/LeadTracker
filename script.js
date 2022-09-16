
let myLeads = []


//constant cannot be reassigned!
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const deleteBtn = document.getElementById("delete-btn")
const ulEl = document.getElementById("ul-el")
const tabBtn = document.getElementById("tab-btn")


let leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )


//LOCALSTORAGE
//save a key-value pair in localStorage
//localStorage.setItem("myLeads", "www.linkedin.com")

//get the value logged after refreshing the page
//console.log( localStorage.getItem("myLeads") )

//clearing the localstorage
//localStorage.clear()




//get the leads from the localStorage & storing it in a var
let savedLead = JSON.parse( localStorage.getItem("myLeads") )




if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}


tabBtn.addEventListener('click', function() {

    //console.log(tabs[0].url)
    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        console.log(tabs)

        myLeads.push(tabs[0].url)
        localStorage.setItem("mylead", JSON.stringify(myLeads) )
        render(myLeads)
    })
    
    //COMPLETE TABS
    // const tabs = [
    //     {url: "https://www.linkedin.com/in/per-harald-borgen/"}
    // ]
    //mySolution0
    // localStorage.setItem("link", "https://www.linkedin.com/in/per-harald-borgen/")
    // let linkFromLocalStorage = localStorage.getItem("link")
    // render(linkFromLocalStorage)
})




inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    
    
    localStorage.setItem("myLeads", JSON.stringify(myLeads))
    render(myLeads)

})


deleteBtn.addEventListener("dblclick", function() {
    //clear localStorage, myLeads & DOM
    localStorage.clear()
    myLeads = []
    ulEl.textContent = ""
    console.log("cleared local storage")
})




//making render re-usable; passing parameter
function render(leads) {
    
    let listItems = ""
    for (let i = 0; i < leads.length; i++) {
        
        //Mine
        //listItems += "<li><a href=" + myLeads[i] + " target=" + "_blank" + ">" + myLeads[i] + "</a></li>"
        
        //Per
        //listItems += "<li><a href='" + myLeads[i] + "' target='" + myLeads[i] + "'>" + myLeads[i] + "</a></li>" 
        
        //Template string
        listItems += `
        <li>
            <a target='_blank' href='${leads[i]}'>${leads[i]}</a>
        </li>
        `
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
