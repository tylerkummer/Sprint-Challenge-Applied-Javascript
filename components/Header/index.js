// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    const newHeader = document.createElement('div');
    const newDate = document.createElement('span');
    const newHOne = document.createElement('h1');
    const newTemp = document.createElement('span');

    newHeader.appendChild(newDate);
    newHeader.appendChild(newHOne);
    newHeader.appendChild(newTemp);

    newHeader.classList.add('header');
    newDate.classList.add('span','date');
    newHOne.classList.add('h1');
    newTemp.classList.add('span','temp');

    newDate.textContent = `SMARCH 28, 2019`;
    newHOne.textContent = `Lambda Times`;
    newTemp.textContent = `98°`;

    return newHeader;
}

const newHead = document.querySelector('.header-container');
newHead.appendChild(Header());