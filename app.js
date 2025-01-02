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
    tabsArray.push(inputElement.value);
    inputElement.value = '';
    localStorage.setItem('myTabs', JSON.stringify(tabsArray));
    render(tabsArray);
})


//function for rendering out the input elements
function render(items){
    let listItems = '';
    for (let i = 0; i < items.length; i++){
        listItems += `
                       <div class="lists">
                        <li><a target='_blank' href='${items[i]}'>${items[i]}</a></li>
                        <span class="material-icons" id="delete-item">
                        delete_outline
                        </span>
                        </div> 
                    `
    }
    
    ulContainer.innerHTML = listItems; //rendering out the items

    
//CREATING AN EVENT FOR THE DELETE EACH ITEM BUTTON
document.getElementById('delete-item').addEventListener('click', () => {
    
})

    
}

//condition for checking if there are tabs in local storage
if(tabsFromLocalStorage){
    tabsArray = tabsFromLocalStorage;
    render(tabsArray)
}
