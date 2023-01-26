const form = document.getElementById('calc');
const priceBox = document.getElementById('price')
const addBtn = document.getElementById('add')
const historyBox = document.getElementById('history')
let price, type, forms, seo
let history = []


form.addEventListener('change', (event) => {
    price = 0
    type = parseInt(document.getElementById('type').value)
    switch (type)
    {
        case 0:
            priceBox.innerHTML = '-' 
            abort()
            break;


        case 1:
            price += 1500;
            break;
        
        case 2:
            price += 1200;
            break

        case 3:
            price += 4000;
            break

        case 4:
            price += 2000;
            break;
    }
    forms = document.getElementById('forms').value
    if (forms === '') forms = 0; else forms = parseInt(forms);
    if (forms>0)
    {
        price += 500 + forms*100
    }
    seo = document.getElementById('seo').checked
    if (seo)
    {
        price += 600
    }

    priceBox.innerHTML = price 
});

addBtn.addEventListener('click', (event) => {
   
    if (price!==undefined)
    {
        history.push({
            typ: type,
            formularze: forms,
            seo: seo,
            cena: price,
        })
        historyBox.innerHTML = ''
        Object.keys(history).forEach(key => {
       
            console.log(history[key].seo)
            switch (history[key].typ)
            {
                case 1:
                    printType = 'Wordpress'
                    break;
                
                case 2:
                    printType = 'One Page'
                    break
        
                case 3:
                    printType = 'Backend'
                    break
        
                case 4:
                    printType = '<span lang="pl">Statyczna</span><span lang="en">Static</span>'
                    break;
            }

            if (history[key].seo)
            {
                printSeo = '<span lang="pl">tak</span><span lang="en">yes</span>'
            }
            else
            {
                printSeo = '<span lang="pl">nie</span><span lang="en">no</span>'
            }

            historyBox.innerHTML += '<div class="col-12 d-flex flex-row text-center my-3"><div class="col-3">'+printType+'</div><div class="col-3">'+history[key].formularze+' <span lang="pl">formularze</span><span lang="en">forms</span></div><div class="col-3">SEO - '+printSeo+'</div><div class="col-3 price">'+history[key].cena+' PLN</div></div>'
        });
    }
    
});