//name of the JSON file that we want 
let requestURL = 'https://msotera.github.io/exam/Q3/cats.json';

let submitButton = document.querySelector('input[type="submit"]');
//instead of XMLHTTPRequest, we'll use Fetch API which is a more modern way that uses promises 
let weirdItems = fetch('https://msotera.github.io/exam/Q3/cats.json')
    .then(function(response) {
        //get the response 
        return response.json();



    }).then(submitButton.addEventListener('click',function catItems(jsonObj) {

        
        let catItems = jsonObj.catItems;
        let section = document.querySelector('section');
        for (let i = 0; i < catItems.length; i++) {
            //build HTML elements
            let article = document.createElement('article');
            let h2 = document.createElement('h2');
            let img = document.createElement('img');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let ul = document.createElement('ul');


            //set image attribute - set location - we are getting image from github repository
            //set image attribute - catItems[] - set to array.image
            //header text content can be found in json file under name
            //paragraph text content can be found in json file under price
            img.setAttribute('src', 'https://msotera.github.io/exam/Q3/assets/' + catItems[i].photo);
            img.setAttribute('alt', catItems[i].photo);
            h2.textContent = catItems[i].name;
            p1.textContent = 'Age: ' + catItems[i].age;
            p2.textContent = 'Species: ' + catItems[i].species;


            //create variable details, get information from json catItems array under details
            //create html element for list item and attach it to textContent from json
            let favFoods = catItems[i].favFoods;
            for (let j = 0; j < favFoods.length; j++) {
                let listItem = document.createElement('li');
                listItem.textContent = favFoods[j];
                ul.appendChild(listItem);
            }


            //append the nodes
            article.appendChild(img);
            article.appendChild(h2);
            article.appendChild(p1);
            article.appendChild(p2);
            article.appendChild(ul);
            section.appendChild(article);


        }
    }));