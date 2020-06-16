function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    Client.checkForName(formText)

    const data = {
        'text': formText
    }

    console.log("::: Form Submitted :::")
    console.log(JSON.stringify(data));
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
            document.getElementById('results').innerHTML = res.response.text;
        } else {
            document.getElementById('results').innerHTML = res.error;
        }
        
    })
}

export { handleSubmit }
