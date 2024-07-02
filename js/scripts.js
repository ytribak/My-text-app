function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');

    // Split the input text by new lines and filter out empty lines
    const paragraphs = inputText.split('\n').filter(paragraph => paragraph.trim() !== '');

    // Wrap each paragraph with <p> tags and join them into a single string
    const outputHTML = paragraphs.map(paragraph => `<p>${paragraph}</p>`).join('');

    // Set the innerHTML of the output div to the resulting HTML string
    outputDiv.innerHTML = outputHTML;
}
