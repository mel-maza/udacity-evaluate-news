import { isValidURL } from './js/urlValidator'
import { resultsTemplate } from './js/APIresponse'
import { handleSubmit } from './js/formHandler'
import img from '../icons/9685812131574055269-128.png'

import './styles/resets.scss'
import './styles/base.scss'
import './styles/main.scss'
import './styles/form.scss'
import './styles/footer.scss'
import './styles/header.scss'

alert("I EXIST")
console.log("CHANGE!!");

const logoElement = document.getElementById('logo');
const myLogo = new Image();
myLogo.src = img;
logoElement.appendChild(myLogo);

export {
    isValidURL,
    resultsTemplate,
    handleSubmit
}
