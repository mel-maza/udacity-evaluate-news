function resultsTemplate(data) {
    if(data && Object.keys(data).length >= 4) {
        const { polarity, polarity_confidence, subjectivity, subjectivity_confidence, text } = data

        return `<div id="polarity">${polarity}</div><div id="polarity_confidence">${polarity_confidence}</div><div id="subjectivity">${subjectivity}</div><div id="subjectivity_confidence">${subjectivity_confidence}</div><div id="text">${text}</div>`
    }

    return `<p>data not available</p>`
}

export { resultsTemplate }