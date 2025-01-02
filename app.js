//defining variables
let tabsArray = []; //this is where we will store all variables
const inputElement = document.getElementById('input-bar');
let ulContainer = document.getElementById('list-container')
const saveLinkBtn = document.getElementById('save-url');
const saveTabBtn = document.getElementById('save-tab');
const clearAllBtn = document.getElementById('clear-all');


//first the function to push input value to the array
saveLinkBtn.addEventListener('click', () => {
    tabsArray.push(inputElement.value);
    inputElement.value = '';
    render(tabsArray);
})


//function for rendering out the input elements
function render(items){
    let listItems = '';
    for (let i = 0; i < items.length; i++){
        listItems += `
                       <div class="lists">
                        <li>${items[i]}</li>
                        <span class="material-icons">
                        delete_outline
                        </span>
                        </div> 
                    `
    }

    ulContainer.innerHTML = listItems;
}