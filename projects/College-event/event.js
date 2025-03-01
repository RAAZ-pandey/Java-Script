 // Event Data
 const events = [
  {
      title: "TCS Workshop",
      date: "2025-03-15T09:00:00",
      description: "Annual technology conference featuring industry leaders",
      venue: "MAC Bidholi"
  },
  {
      title: "Spandan Fest",
      date: "2025-04-20T10:00:00",
      description: "Multi-cultural festival showcasing student talents",
      venue: "College Grounds Kandoli"
  }
];

// Initialize Events
function renderEvents() {
  const container = document.getElementById('events-container');
  container.innerHTML = events.map(event => `
      <div class="event-card">
          <h3>${event.title}</h3>
          <p>📅 ${new Date(event.date).toLocaleDateString()}</p>
          <p>${event.description}</p>
          <p>📍 ${event.venue}</p>
      </div>
  `).join('');
}

// Countdown Timer
function updateCountdown() {
  const nextEvent = new Date(events[0].date);
  const now = new Date();
  const diff = nextEvent - now;

  const days = Math.floor(diff / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

  document.getElementById('countdown').innerHTML = `
      Next Event: ${events[0].title} starts in 
      ${days}d ${hours}h ${minutes}m
  `;
}

// Form Validation
function validateForm(e) {
  e.preventDefault();
  const form = e.target;
  if(form.checkValidity()) {
      alert('Registration Successful!');
      form.reset();
      showSection('home');
  }
  return false;
}

// Theme Toggle
function toggleTheme() {
  document.body.classList.toggle('dark-mode');
  localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

// Section Navigation
function showSection(sectionId) {
  document.querySelectorAll('section').forEach(section => {
      section.classList.toggle('hidden', section.id !== sectionId);
  });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
  renderEvents();
  setInterval(updateCountdown, 1000);
  if(localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');
});
