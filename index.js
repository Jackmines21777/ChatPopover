
document.addEventListener('DOMContentLoaded', () => {
  const menosButton = document.querySelector('.menos');
  const masButton = document.querySelector('.mas');
  const inputField = document.querySelector('.input');

  menosButton.addEventListener('click', () => {
      let currentValue = parseInt(inputField.value);
      if (!isNaN(currentValue) && currentValue > 1) {
          inputField.value = currentValue - 1;
      }
  });

  masButton.addEventListener('click', () => {
      let currentValue = parseInt(inputField.value);
      if (!isNaN(currentValue)) {
          inputField.value = currentValue + 1;
      }
  });
});




// BOTON DEL CHAT
    document.addEventListener('DOMContentLoaded', function() {
      const chatButton = document.getElementById('chat-button');
      const chatBox = document.getElementById('chat-box');
      const closeChat = document.getElementById('close-chat');

      chatButton.addEventListener('click', function() {
        chatButton.classList.add('open');
        chatBox.classList.add('open');
      });

      closeChat.addEventListener('click', function() {
        chatButton.classList.remove('open');
        chatBox.classList.remove('open');
      });
    });

  
  // POPOVER
  document.addEventListener('mouseup', function (e) {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();
  
    if (selectedText) {
      const range = selection.getRangeAt(0);
      const rect = range.getBoundingClientRect();
      const popover = document.getElementById('popover');
      const popoverText = document.getElementById('popover__text');
      const popoverCopy = document.getElementById('popover__copy');
      const popoverChrome = document.getElementById('popover__chrome');
      const popoverChat = document.getElementById('popover__chat');
      const searchInput = document.getElementById('search-input');
  
      popoverText.textContent = selectedText;
      popover.style.left = `${rect.left + window.scrollX}px`;
      popover.style.top = `${rect.top + window.scrollY - popover.offsetHeight}px`;
      popover.style.display = 'block';
  
      popoverCopy.onclick = function () {
        navigator.clipboard.writeText(selectedText).then(() => {
          alert('Copiado');
        });
      };
  
      popoverChrome.onclick = function () {
        searchInput.value = selectedText;
        const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(selectedText)}`;
        window.open(searchUrl, '_blank');
      };

      popoverChat.onclick = function () {
        searchInput.value = selectedText;
      };


    } else {
      document.getElementById('popover').style.display = 'none';
    }
  });
  