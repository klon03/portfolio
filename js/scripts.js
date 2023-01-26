document.getElementById('year').innerHTML = new Date().getFullYear();

const enBtn = document.getElementById('selectEn')
const plBtn = document.getElementById('selectPl')
let langs = ['en', 'pl'];
let lang = navigator.language.split('-')[0]

if (localStorage.getItem("lang") === null)
{ 
    localStorage.setItem('lang', lang);
}
else
{
    lang = localStorage.getItem("lang");
}

setLangStyles(lang);

function setLang(lang) {
  setLangStyles(lang);
  localStorage.setItem('lang', lang);
}

function setLangStyles(lang) {

    if (lang == 'pl')
    {
        plBtn.style.display = 'none'
        enBtn.style.display = 'block'
    }
    else
    {
        plBtn.style.display = 'block'
        enBtn.style.display = 'none'
    }

    let styles = langs
    .filter(function (l) {
      return l != lang;
    })
    .map(function (l) {
      return ':lang('+ l +') { display: none; }';
    })
    .join(' ');

  setStyles(styles);
}

function setStyles(styles) {
    var elementId = '__lang_styles';
    var element = document.getElementById(elementId);
    if (element) {
      element.remove();
    }
  
    let style = document.createElement('style');
    style.id = elementId;
    style.type = 'text/css';
  
    if (style.styleSheet) {
      style.styleSheet.cssText = styles;
    } else {
      style.appendChild(document.createTextNode(styles));
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

var modal = document.getElementById("cookieModal");
if (localStorage.getItem("cookieConsent") === null || !localStorage.getItem("cookieConsent"))
{
    modal.style.display = "block";
    document.body.style.overflowY = "hidden";
}
function closeModal () {
    modal.style.display = "none";
    document.body.style.overflowY = "auto";
    localStorage.setItem('cookieConsent', true);
}


