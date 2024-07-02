function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');
    
    // Split the input text by new lines
    const paragraphs = inputText.split('\n').map(paragraph => {
        // Trim any leading/trailing whitespace
        paragraph = paragraph.trim();
        // Only wrap non-empty lines with <p> tags
        return paragraph ? `<p>${paragraph}</p>` : '';
    }).join('');

    // Set the innerHTML of the output div to the paragraphs
    outputDiv.innerHTML = paragraphs;
}
