const buttonname = document.getElementById('changeName');
const studentname = document.getElementById('studentName');

const buttonBackground = document.getElementById('changeBackground');
const profile = document.getElementById('profile');

const buttonDetails = document.getElementById('toggleDetails');
const details = document.getElementById('details');

// Change Name
buttonname.addEventListener('click', function () {
    studentname.textContent = 'Maria Santos';
});

// Change Background
buttonBackground.addEventListener('click', function () {
    profile.style.backgroundColor = '#f4fffb';
});

// Show / Hide Details
buttonDetails.addEventListener('click', function () {
    details.classList.toggle('hidden');

    if (details.classList.contains('hidden')) {
        buttonDetails.textContent = 'Show Details';
    } else {
        buttonDetails.textContent = 'Hide Details';
    }
});
