let btnsearch = document.getElementById('btn-search')
let inputSearch = document.querySelector('#input-search');
let _result = document.getElementById('result');


btnsearch.addEventListener('click',()=>{
    let countryName = inputSearch.value ;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
    console.log(finalURL)
    fetch(finalURL)
    .then((res) => res.json())
        .then((data) =>{
            // console.log(val[0])
            _result.innerHTML = `
            <img src="${data[0].flags.png}" class="flag-img">
            <h2>${data[0].name.common}</h2>
            <div class="wrapper">
            <div class="data-wrapper">
            <h4>capital:</h4>
            <span>${data[0].capital[0]}</span>
            </div>
            </div>
    
            <div class="wrapper">
            <div class="data-wrapper">
            <h4>continent:</h4>
            <span>${data[0].continents[0]}</span>
            </div>
            </div>
    
            <div class="wrapper">
            <div class="data-wrapper">
            <h4>population:</h4>
            <span>${data[0].population}</span>
            </div>
            </div>
    
    
            `;
        }) .catch(()=>{
            if(countryName.length == 0){
                      result.innerHTML = `<h3>the input field cannot be empty</h3>`
                  }else{
                     result.innerHTML=`<h3>please enter a valid country name</h3>`;
                }
              })
    });
        
    
         
                   
                   