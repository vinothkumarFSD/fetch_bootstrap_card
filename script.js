var container = document.createElement('div');
container.setAttribute('class', 'container');

var row = document.createElement('div');
row.className='row';
container.append(row);

var res = fetch('https://restcountries.com/v3.1/all');
res.then((data) => data.json()).then((data1) => foo(data1));

function foo(data1) {
    
    for (var i = 0; i < data1.length; i++) {
        
        row.innerHTML += `
        <div class=col-md-4>
        <div class="card border-primary mb-4" style="max-width: 18rem;">
        <div text-align="center" class="card-header">${data1[i].name.common}</div>
        <img  src="${data1[i].flags.png}" class="card-img-top" alt="...">
        <div class="card-body text-primary">
        <p class="card-title">Capital:${data1[i].capital}</p>
        <p class="card-title">Region:${data1[i].region}</p>
        <p class="card-title">Countrycode:${data1[i].cca3}</p>
        <button type="button" class="btn btn-secondary">Click to Weather</button>
        </div>
        </div>
        </div>`;
        document.body.append(container);
    }
}

