// সোশ্যাল মিডিয়া লোগো ও লিংক সেট করা
const socialMedia = [
    { name: "Facebook", logo: "https://img.icons8.com/?size=100&id=16712&format=png&color=000000", link: "https://facebook.com" },
    { name: "Twitter", logo: "icons8-telegram-50.png", link: "https://twitter.com" },
    { name: "Instagram", logo: "icons8-instagram-logo-30.png", link: "https://instagram.com" },
    { name: "GitHub", logo: "icons8-github-logo-30.png", link: "https://github.com" }
];

const socialLinksContainer = document.getElementById("socialLinks");

socialMedia.forEach((media, index) => {
    let anchor = document.createElement("a");
    anchor.href = media.link;
    anchor.target = "_blank";

    let img = document.createElement("img");
    img.src = media.logo;
    img.alt = media.name;

    // একটু দেরিতে আইকন দেখানোর জন্য delay
    anchor.style.animation = `fadeInUp 0.5s ${index * 0.2}s forwards`;

    anchor.appendChild(img);
    socialLinksContainer.appendChild(anchor);
});

// এনিমেশন ডিলে সেট করা (সুন্দর ভিউর জন্য)
document.addEventListener("DOMContentLoaded", function () {
    setTimeout(() => {
        document.querySelectorAll(".fade-in").forEach((element, index) => {
            element.style.animationDelay = `${index * 0.2}s`;
        });
    }, 500);
});
