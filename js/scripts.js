function convertText() {
    const inputText = document.getElementById('inputText').value;
    const outputDiv = document.getElementById('output');
    const paragraphs = inputText.split('\n').map(paragraph => `<p>${paragraph}</p>`).join('');
    outputDiv.innerHTML = paragraphs;
}
