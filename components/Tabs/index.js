// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const ax = axios.get('https://lambda-times-backend.herokuapp.com/topics');

ax.then(response => {
    console.log(response.data);
})

const newTabs = document.querySelector('.topics');
ax.then(response =>{
    const articleTopics = Object.values(response.data);
    articleTopics.forEach(trend =>{
        trend.forEach(el =>{
            newTabs.append(BackTimes(el));
        })
    })
})

function BackTimes(topic){
    const newTab = document.createElement('div');

    newTab.textContent = topic;

    newTab.classList.add('tab');

    return newTab;
}

