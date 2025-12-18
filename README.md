# Wit.ai Chatbot

## Project Description
This project is a simple web-based chatbot that integrates with Wit.ai to understand user inputs and respond accordingly. The interface features a styled chat window with a background image, allowing users to type messages and receive AI-powered responses in real-time.

---

## Setup and Installation Instructions

1. **Download the files**:
   - `chat.html`
   - `chat.css`
   - `chat.js`

2. **Prepare your Wit.ai Token**:
   - Sign up or log in to [Wit.ai](https://wit.ai/).
   - Create a new app or use an existing one.
   - Obtain your server access token from the app settings.

3. **Configure the JavaScript file**:
   - Open `chat.js` in a text editor.
   - Locate the line:
     ```js
     const WIT_AI_TOKEN = 'YOUR_WIT_AI_TOKEN_HERE';
     ```
   - Replace `'YOUR_WIT_AI_TOKEN_HERE'` with your actual Wit.ai token, e.g.:
     ```js
     const WIT_AI_TOKEN = 'your_actual_token_here';
     ```

---

## How to Run the Application Locally

1. Save all files in the same directory.

2. Open `chat.html` in your web browser:
   - You can do this by double-clicking the file or dragging it into your browser window.
   - Alternatively, if you have a local server setup (like VSCode Live Server or Python's HTTP server), start it in the directory and navigate to `http://localhost:PORT/chat.html`.

3. Ensure your Wit.ai token is correctly set in `chat.js`.

4. Start chatting with your AI chatbot!

---

## Known Limitations and Future Improvements

- **Limitations**:
  - Currently, the chatbot only recognizes basic intents defined in Wit.ai.
  - No persistent conversation history or context management.
  - Background image and styles are static; customization needed for different themes.
  - No error handling for network issues beyond console logs.
  
- **Future Improvements**:
  - Implement conversation context handling.
  - Add more sophisticated NLP responses based on entities.
  - Enhance UI with animations or themes.
  - Add support for voice input.
  - Implement a backend server for secure token management and logging.

---

## License
This project is for educational purposes. Feel free to modify and expand it!

---
