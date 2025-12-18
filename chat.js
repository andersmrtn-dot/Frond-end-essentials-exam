// Replace this with your actual Wit.ai token
const WIT_AI_TOKEN = 'YOUR_WIT_AI_TOKEN_HERE';

const chatMessages = document.getElementById('chatMessages');
const userInput = document.getElementById('userInput');
const sendBtn = document.getElementById('sendBtn');

// Add a message to the chat
function addMessage(text, isUser = false) {
  const messageDiv = document.createElement('div');
  messageDiv.className = `message ${isUser ? 'user-message' : 'bot-message'}`;
  
  const bubble = document.createElement('div');
  bubble.className = 'message-bubble';
  bubble.textContent = text;
  
  messageDiv.appendChild(bubble);
  chatMessages.appendChild(messageDiv);
  
  // Scroll to bottom
  chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Send message to Wit.ai
async function sendToWitAi(message) {
  try {
    const response = await fetch(
      `https://api.wit.ai/message?v=20241218&q=${encodeURIComponent(message)}`,
      {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${WIT_AI_TOKEN}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Wit.ai Error:', error);
    return null;
  }
}

// Process Wit.ai response
function processWitResponse(witData, userMessage) {
  if (!witData) {
    return "Sorry, I'm having trouble understanding right now. Please try again.";
  }

  const intents = witData.intents || [];
  const entities = witData.entities || {};

  if (intents.length > 0) {
    const topIntent = intents[0];
    const intentName = topIntent.name;
    const confidence = topIntent.confidence;

    if (confidence > 0.7) {
      switch (intentName) {
        case 'greeting':
        case 'greet':
        case 'hello':
          return "Hello! How can I assist you today?";
        case 'goodbye':
        case 'bye':
          return "Goodbye! Have a great day!";
        case 'help':
          return "I'm here to help! What do you need assistance with?";
        case 'thanks':
        case 'thank_you':
          return "You're welcome! Happy to help!";
        default:
          return `I detected the intent "${intentName}". You said: "${userMessage}"`;
      }
    } else {
      return `I think you're asking about "${intentName}", but I'm not entirely sure. Could you rephrase?`;
    }
  }

  return `You said: "${userMessage}". I'm still learning! Try training me in Wit.ai.`;
}

// Handle send button click
async function handleSend() {
  const message = userInput.value.trim();
  if (!message) return;

  if (WIT_AI_TOKEN === 'YOUR_WIT_AI_TOKEN_HERE') {
    addMessage('⚠️ Please set your Wit.ai token in the code! Edit the WIT_AI_TOKEN variable.', false);
    userInput.value = '';
    return;
  }

  addMessage(message, true);
  userInput.value = '';

  // Disable button
  sendBtn.disabled = true;
  sendBtn.textContent = 'Thinking...';

  const witResponse = await sendToWitAi(message);
  const botReply = processWitResponse(witResponse, message);
  addMessage(botReply, false);

  // Re-enable button
  sendBtn.disabled = false;
  sendBtn.textContent = 'Send';
  userInput.focus();
}

// Event Listeners
sendBtn.addEventListener('click', handleSend);
userInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') handleSend();
});

// Focus input on load
userInput.focus();

console.log('✅ Chatbot loaded! Remember to set your Wit.ai token.');