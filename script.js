document.addEventListener('DOMContentLoaded', fetchLink);

async function fetchLink() {
    try {
        const response = await fetch('https://silver-crumble-9cf8e6.netlify.app/.netlify/functions/switch-link');
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        const dynamicLink = document.getElementById('dynamic-link');
        dynamicLink.href = data.link;
        dynamicLink.textContent = "Temple Recommend Renewal";
    } catch (error) {
        console.error('Error fetching the link:', error);
    }
}
