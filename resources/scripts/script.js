const contactMeButton = document.getElementById('contactMeButton');
const contactMeIcon = document.getElementById('contactMeIcon');

const showContactMeButton = () => {
  contactMeButton.style.display = 'block';
}

contactMeIcon.addEventListener('mouseover', showContactMeButton);