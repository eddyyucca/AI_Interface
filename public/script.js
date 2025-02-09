async function sendMessage() {
    const input = document.getElementById('userInput');
    const message = input.value.trim();
    
    if (!message) return;

    // Tampilkan pesan user
    appendMessage('user', message);
    input.value = '';

    try {
        console.log('Sending request...');
        const response = await fetch('http://localhost:3000/ask', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ question: message })
        });

        const data = await response.json();
        console.log('Received response:', data);

        // Tampilkan respons AI
        if (data.response) {
            appendMessage('ai', data.response);
        } else {
            appendMessage('ai', 'Maaf, terjadi kesalahan dalam memproses respons.');
        }
    } catch (error) {
        console.error('Error:', error);
        appendMessage('ai', 'Maaf, terjadi kesalahan dalam komunikasi dengan server.');
    }
}

 // Deteksi Enter dan Shift + Enter di textarea
    userInput.addEventListener("keydown", function (event) {
        if (event.key === "Enter") {
            if (!event.shiftKey) {
                event.preventDefault(); // Hindari baris baru
                sendMessage(); // Kirim pesan
            }
        }
    });
    
function appendMessage(type, content) {
    const chatContainer = document.getElementById('chatContainer');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${type}-message`;
    messageDiv.textContent = content;
    chatContainer.appendChild(messageDiv);
    chatContainer.scrollTop = chatContainer.scrollHeight;
}