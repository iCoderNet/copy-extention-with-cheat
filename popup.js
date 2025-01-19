
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "showText") {
        alert(request.text);
      document.getElementById("selectedText").textContent = request.text;

    }
  });
  const button = document.getElementById('copybtn');
  const input=document.getElementById('question')

  // Add a click event listener to the button
  button.addEventListener('click', () => {
    for (const item of quizdata) {
        if (item['question']==input.value) {
            alert(item['answers'][item['correct']])
        }
    }
  });