//defining variables
let tabsArray = []; //this is where we will store all variables
const inputElement = document.getElementById('input-bar');
let ulContainer = document.getElementById('list-container')
const saveLinkBtn = document.getElementById('save-url');
const saveTabBtn = document.getElementById('save-tab');
const clearAllBtn = document.getElementById('clear-all');
const tabsFromLocalStorage = JSON.parse(localStorage.getItem('myTabs'));


//first the function to push input value to the array
saveLinkBtn.addEventListener('click', () => {
    if (inputElement.value) {
    tabsArray.push(inputElement.value);
    inputElement.value = '';
    localStorage.setItem('myTabs', JSON.stringify(tabsArray));
    render(tabsArray);
    } else {
        alert('Please enter link')
    }
})


//function for rendering out the input elements
function render(items){
    let listItems = '';
    for (let i = 0; i < items.length; i++){
        listItems += `
                       <div class="lists">
                        <li>
                        <a target='_blank' href='${items[i]}'>
                        ${items[i]}
                        </a>
                        </li>
                        <span class="material-icons delete-item">
                        delete_outline
                        </span>
                        </div> 
                    `
    }
    
    ulContainer.innerHTML = listItems; //rendering out the items

    
//CREATING AN EVENT FOR THE DELETE EACH ITEM BUTTON
document.querySelectorAll('.delete-item').forEach((button) => {
    button.addEventListener('click', (event) => {
      const index = event.target.dataset.index; // Get the index of the item from the data attribute, the event is for the each button selected
      tabsArray.splice(index, 1) //remove the item from the array
      localStorage.setItem('myTabs', JSON.stringify(tabsArray)) //updating local storage
      render(tabsArray)
    })
})


}


//condition for checking if there are tabs in local storage
if(tabsFromLocalStorage){
    tabsArray = tabsFromLocalStorage;
    render(tabsArray)
    console.table(tabsArray)
}


//FUNCTION FOR CLEAR ALL BUTTON
clearAllBtn.addEventListener('click', () => {
    localStorage.clear();
    tabsArray = [];
    render(tabsArray)
})


//function for the save tab button
saveTabBtn.addEventListener('click', () => {
    chrome.tabs.query({active: true, currentWindow: true}, ((tabs) => {
        tabsArray.push(tabs[0].url);
        localStorage.setItem('myTabs', JSON.stringify(tabsArray));
        render(tabsArray)
    }))
})