const init = () => {

    fetch('http://localhost:3000/beers/1')
        .then(response => response.json())
        .then(data => {
          let beerName = document.querySelector('#beer-name');
          let beerDescription = document.querySelector('#beer-description');
          document.getElementById("beer-image").src=data.image_url;
          beerName.innerText = data.name;
          beerDescription.innerText = data.description;
          let reviewList = document.createElement("ul");
          reviewList.setAttribute('id','review-list')
          for (review in data.reviews){
          let reviewText = document.createElement("li");
          reviewText.innerText = data.reviews[review];
          reviewList.appendChild(reviewText);     
          }
          document.getElementById('review-list').parentNode.replaceChild(reviewList,document.getElementById('review-list')); 
        }
        )
        
    fetch('http://localhost:3000/beers')
        .then(response => response.json())
        .then(data => {
            let beerList = document.createElement("ul");
            beerList.setAttribute('id','beerList')
            for (beer in data){
                let beerName = document.createElement("li");
                beerName.innerText = data[beer].name;
                beerList.appendChild(beerName);     
                }
        document.getElementById('beer-list').parentNode.replaceChild(beerList,document.getElementById('beer-list'));
        });
    
        }; 
        
        document.addEventListener('DOMContentLoaded', init);

  const inputForm1 = document.querySelector('button');
  inputForm1.addEventListener('click', (event) => {
  event.preventDefault();
    const description = document.querySelector('#description').value;
    let beerDescription = document.querySelector('#beer-description');
    beerDescription.innerText = description;
  
    let descriptionArray = {"description":description};
  
  
fetch('http://localhost:3000/beers/1',{
      method: 'PATCH',
      headers: {"Content-Type":"application/json"},
      body:JSON.stringify(descriptionArray)
    }

  ).then((response) => response.json)
  .then((description) => console.log(description))
  .catch((e) => console.log(e))
  
    });
    
  const inputForm2 = document.querySelector('#review-form').querySelector('button');
  inputForm2.addEventListener('click', (event) => {
    
        event.preventDefault();
  
fetch('http://localhost:3000/beers/1')
        .then(response => response.json())
        .then(data => {
        let reviews = data.reviews;
        let review = document.querySelector('#review').value;
        reviews.push(review);  
        
        let node = document.createElement("li");
        let textnode = document.createTextNode(review);
        node.appendChild(textnode);
        document.getElementById("review-list").appendChild(node);
          
    
fetch('http://localhost:3000/beers/1',{
    method: 'PATCH',
    headers: { "Content-Type":"application/json"},
            body:JSON.stringify(
              {
              reviews:reviews
          })
          }
      ).then((response) => response.json)
      .then((review) => console.log(review))
      .catch((e) => console.log(e))
      
    }
    ) 
    
          });

        
    
        
