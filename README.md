# Chit-Chat: Effortless Chatbot Integration

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

#### Chit-Chat allows you to quickly integrate a chatbot No code into your application by simply uploading a configuration file. This bot uses the power of OpenAI's API to generate responses. By using our provided CDN and API endpoint, you can get started in just a few minutes.
## Docker
```javascript
docker pull apurvjha123/chit-chat
```
## 🚀 How to Integrate
### 1. 🎨 CDN Integration
**Step 1:** Add the provided CSS and JS CDN to your project.

***CSS CDN:***

```javascript
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/style.css">
```
**Step 2:** Embed the chatbot interface into your desired location within the HTML body:

```HTML
<div id="chatbot"></div>
```

**Step 3:** Before the closing `</body>` tag, add the following 

***JavaScript CDN:***

```javascript
<script src="https://cdn.jsdelivr.net/gh/apurvjha123/Chit-Chat-Server/js-interface/script.js"></script>
```

**Step 4:** Configure the chatbot using the following code:

```javascript
chatbot.setChatBotConfiguration({
    apiKey: "Your API Key",
    chatbotTitle: "Chat Bot",
    initialMessage: "Hello! How can I assist You ?",
    brandImage: "https://www.kindpng.com/picc/m/179-1798038_chatbots-builder-pricing-crozdesk-free-chatbot-hd-png.png",
});
```

## 2. 🔌 API Integration
#### After uploading your file and providing the OpenAI API key, you can make use of our generateAnswer function to retrieve the chatbot's responses:

```javascript 
async function generateAnswer(userQuestion, apiKey) {
    const chatAPIUrl = `https://chit-chat.tech/api/v1/QnARetrieval?key=${apiKey}`;

    const payloadBody = {
        prompt: userQuestion,
    };

    const response = await fetch(chatAPIUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(payloadBody),
    });

    const jsonData = await response.json();
    return jsonData.answer;
}
```
## 📘 API Reference

### Retrieve a Chatbot Answer


```http
    POST https://chit-chat.tech/api/v1/QnARetrieval?key=${apiKey}
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **Required**. Your Chit-Chat API key |
| `prompt`      | `string` | **Required**. The user's question |

### Request Example

```JSON
{
  "prompt": "What is Chit-Chat?"
}
```

### Response Example

```JSON
{
  "answer": "Chit-Chat is a service that allows you to integrate a chatbot into your application using OpenAI's API."
}
```

## 🛠 Prerequisites
* Active OpenAI API Key
* Configuration file uploaded to Chit-Chat

# 💌 Support
##### If you encounter any issues or require further assistance, please reach out to our support team at apurvjha123@gmail.com.



### Thank you for choosing Chit-Chat for your chatbot needs. We hope to make your integration process as smooth as possible.🚀
