// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.

const ax2 = axios.get('https://lambda-times-backend.herokuapp.com/articles');

ax2.then(response =>{
    console.log(response.data);
})

const authorCredit = document.querySelector('.cards-container');
ax2.then(response =>{
    const credits = Object.values(response.data);
    credits.forEach(element=>{
        const credits2 = Object.values(element);
        credits2.forEach(item=>{
            const credits3 = Object.values(item);
            item.forEach(item2=>{
                authorCredit.append(NewCardTable(item2));
            })
        })
    })
})

function NewCardTable(crd){
    const newCard =  document.createElement('div');
    const newHeadLine = document.createElement('div');
    const newAuthor = document.createElement('div');
    const newImgContainer = document.createElement('div');
    const newImg = document.createElement('img');
    const newAuthorName = document.createElement('span');

    newCard.appendChild(newHeadLine);
    newCard.appendChild(newAuthor);
    newAuthor.appendChild(newImgContainer);
    newImgContainer.appendChild(newImg);
    newCard.appendChild(newAuthorName);

    newCard.classList.add('card');
    newHeadLine.classList.add('headline');
    newAuthor.classList.add('author');
    newImgContainer.classList.add('img-container');
    newImg.classList.add('img');
    newAuthorName.classList.add('span');

    newHeadLine.textContent = crd.headline;
    newImg.src = crd.authorPhoto;
    newAuthorName.textContent = crd.authorName;

    return newCard;
}