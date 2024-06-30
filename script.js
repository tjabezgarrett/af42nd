// Array of links
const links = [
    'https://google.com/',
    'https://facebook.com/',
];

// Function to get a random link
function getRandomLink() {
    const randomIndex = Math.floor(Math.random() * links.length);
    return links[randomIndex];
}

// Set the href of the link dynamically
document.addEventListener('DOMContentLoaded', () => {
    const dynamicLink = document.getElementById('dynamic-link');
    dynamicLink.href = getRandomLink();
    dynamicLink.textContent = dynamicLink.href;
});
