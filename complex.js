const messages=["Hey there! Welcome to UniChat – where great conversations start! 😊",
    "Hello! Ready to chat? Connect and share your thoughts instantly!",
    "Welcome aboard! Say hi and start chatting with friends now!",
    "Welcome to UniChat – your space for seamless and secure communication",
    "Stay connected with your friends and colleagues. Start chatting today!",
    "Every great connection begins with a single message. Start chatting today!"
    
    
    
    
];
var messageContainer=document.getElementById('my-contents');
function displayMessages(){
    messages.forEach((msg,index) =>{
        setTimeout(() => {
            const messageDiv=document.createElement("div");
            messageDiv.classList.add('messages');
            messageDiv.textContent = msg;
            messageContainer.appendChild(messageDiv);
        }, index * 1500

        );
    }



);
}
window.onload = displayMessages;
