// The two links
const links = [
    'https://calendly.com/af42assistant1/tr',
    'https://calendly.com/af42assistant2/tr'
  ];

  // Function to get the most recent Sunday
  function getLastSunday(date) {
    const currentDay = date.getDay();
    const distanceToSunday = currentDay === 0 ? 0 : currentDay;
    const lastSunday = new Date(date);
    lastSunday.setDate(date.getDate() - distanceToSunday);
    return lastSunday;
  }

  // Function to determine if this Sunday is the "alternate" one
  function isAlternateSunday(today) {
    const firstSunday = new Date('2024-09-08'); // Start with a known Sunday
    const msInWeek = 7 * 24 * 60 * 60 * 1000;
    const lastSunday = getLastSunday(today);

    // Calculate the number of weeks since the first Sunday
    const weeksSinceFirstSunday = Math.floor((lastSunday - firstSunday) / msInWeek);

    // Return true if the week is even (i.e., alternate Sunday)
    return weeksSinceFirstSunday % 2 === 0;
  }

  // Function to determine which link to use
  function determineLink(today) {
    const dayOfWeek = today.getDay();

    if (dayOfWeek === 0) { // If it's Sunday
      return isAlternateSunday(today) ? links[0] : links[1];
    } else {
      return dayOfWeek % 2 === 0 ? links[0] : links[1]; // Alternate on non-Sundays
    }
  }

  // Set the link dynamically
  const today = new Date();
  const selectedLink = determineLink(today);
  document.getElementById('dynamic-link').href = selectedLink;