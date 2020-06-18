function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value

    // Get the error element and hide it 
    const errorElement = document.getElementById('error');
    errorElement.style.display = "none";

    // Get the result-element and clear it, before a new result or error is set
    const resultElement = document.getElementById('results');
    resultElement.innerHTML = '';

    // check if input is valid url
    if (!Client.isValidURL(formText)) {
        document.getElementById('errormessage').innerHTML = "Your input is not a valid URL.";
        errorElement.style.display = "block";
    } else {
        const data = {
            'text': formText
        }
    
        console.log("::: Form Submitted :::")
        fetch('http://localhost:8081/api', {
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => {return res.json()})
        .then(function(res) {
            if (res.response) {
                resultElement.innerHTML = `${Client.resultsTemplate(res.response)}`;
            } else {
                document.getElementById('errormessage').innerHTML = res.error;
                errorElement.style.display = "block";
            }
            
        })
        
    }

}

export { handleSubmit }
