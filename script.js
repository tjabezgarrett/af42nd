async function fetchLink() {
    try {
        const response = await fetch('https://silver-crumble-9cf8e6.netlify.app/.netlify/functions/switch-link');
        const data = await response.json();
        const dynamicLink = document.getElementById('dynamic-link');
        dynamicLink.href = data.link;
        dynamicLink.textContent = data.link;
    } catch (error) {
        console.error('Error fetching the link:', error);
    }
}

document.addEventListener('DOMContentLoaded', fetchLink);
