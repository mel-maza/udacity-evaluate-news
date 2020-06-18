import { resultsTemplate } from './APIresponse'

let mockResponse = {
    polarity: 'neutral',
    subjectivity: 'objective',
    text: 'https://www.google.com/',
    polarity_confidence: 0.8919758200645447,
    subjectivity_confidence: 0.9987134012767795
}

describe('resultsTemplate...', () => {
    it('should create a template with correct data', () => {
        expect(resultsTemplate(mockResponse)).toBe(`<div id="polarity">neutral</div><div id="polarity_confidence">0.8919758200645447</div><div id="subjectivity">objective</div><div id="subjectivity_confidence">0.9987134012767795</div><div id="text">https://www.google.com/</div>`)
    });

    it('should create the "no data available" template for bad data input', () => {
        expect(resultsTemplate({ something: 'data' })).toBe("<p>data not available</p>")
    })
})

