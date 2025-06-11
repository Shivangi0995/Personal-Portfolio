// --- NAVBAR ---
// Responsive nav toggle for mobile
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');
navToggle.onclick = () => navLinks.classList.toggle('open');

// Smooth scroll & active link highlight
document.querySelectorAll('.nav-link').forEach((l, i, a) => l.onclick = e => {
  navLinks.classList.remove('open'); // Close nav on click (mobile)
  const t = document.querySelector(l.getAttribute('href'));
  if (t) {
    e.preventDefault();
    window.scrollTo({ top: t.offsetTop - 59, behavior: 'smooth' });
  }
});

// Highlight active section in navbar
const secs = [...document.querySelectorAll('.section,.home-section')];
window.onscroll = () => {
  let s = document.documentElement.scrollTop || document.body.scrollTop, o = 65, a = 0;
  secs.forEach((e, i) => { if (s >= e.offsetTop - o - 20) a = i; });
  document.querySelectorAll('.nav-link').forEach((l, i) => l.classList.toggle('active', i === a));
};

// --- PROJECTS ---
// Dynamically populate project cards (edit as needed)
const projectsGrid = document.getElementById('projects-grid');
[
  {title:"Personal Portfolio",desc:"Responsive portfolio website with smooth animations and contact form.",img:"personal.jpg",link:"#"},
  {title:"Weather App",desc:"A simple app to fetch and display current weather using a public API.",img:"weather.jpg",link:"#"},
  {title:"ToDo List App",desc:"Organize tasks with a clean, interactive todo list application.",img:"todo.jpg",link:"#"},
  {title:"Gallery Page",desc:"A responsive gallery to showcase images with lightbox effect.",img:"gallery.jpg",link:"#"}
].forEach(p=>{
  projectsGrid.innerHTML+=`<div class="project-card pop-in"><img src="${p.img}" alt="${p.title}" class="project-img"/><div class="project-body"><div class="project-title">${p.title}</div><div class="project-desc">${p.desc}</div><a href="${p.link}" target="_blank" class="project-link">View Project</a></div></div>`;
});

// --- SKILLS ---
// Animate skill bars when in view
function animateSkills(){
  const s=document.getElementById('skills');
  document.querySelectorAll('.skill-level').forEach(b=>{
    if(s&&s.getBoundingClientRect().top<window.innerHeight-100){
      b.style.width=b.getAttribute('style').replace('width:','').trim();
      window.removeEventListener('scroll',animateSkills);
    }
  });
}
window.addEventListener('scroll',animateSkills);
window.addEventListener('DOMContentLoaded',animateSkills);

// --- CONTACT FORM ---
// Simple validation and feedback
const contactForm = document.getElementById('contact-form');
const formMsg = document.getElementById('form-msg');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
contactForm.onsubmit = e => {
  e.preventDefault();
  const n = nameInput.value.trim(), m = messageInput.value.trim(), em = emailInput.value.trim();
  if (!n || !em || !m) {
    formMsg.style.color = "red";
    formMsg.textContent = "Please fill all fields.";
    return;
  }
  formMsg.style.color = "#00bcd4";
  formMsg.textContent = "Thank you! Your message has been sent.";
  contactForm.reset();
  setTimeout(() => formMsg.textContent = "", 3500);
};

// --- ANIMATIONS ---
// Trigger fade/slide/pop animations when elements enter view
function animateOnScroll(){
  document.querySelectorAll('.fade-in,.slide-in-left,.slide-in-right,.pop-in').forEach(el=>{
    if(el.getBoundingClientRect().top<window.innerHeight-60)el.style.animationPlayState='running';
  });
}
window.addEventListener('scroll',animateOnScroll);
window.addEventListener('DOMContentLoaded',animateOnScroll);

/* 
  Features:
  - Navbar: mobile toggle, smooth scroll, active highlight.
  - Dynamic projects, skill bar anim, contact form validation.
  - Animations on scroll. Vanilla JS, minimal.
*/