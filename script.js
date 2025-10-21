const bands = [
  'The Plot in You',
  'The Devil Wears Prada',
  'Pierce the Veil',
  'Norma Jean',
  'The Bled',
  'Say Anything',
  'The Midway State',
  'We Came as Romans',
  'Counterparts',
  'Oh, Sleeper',
  'A Skylit Drive',
  'Anywhere But Here',
  'An Old Dog'
];

// Function to remove 'a', 'an', and 'the' from start
function strip(bandName) {
  return bandName.replace(/^(a |an |the )/i, '').trim();
}

// Sort alphabetically ignoring the above words
const sortedBands = bands.sort((a, b) => strip(a).localeCompare(strip(b)));

// Add sorted bands to the list
const bandList = document.getElementById('band');
bandList.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
