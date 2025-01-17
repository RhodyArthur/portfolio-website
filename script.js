const menuEl = document.getElementById('menu');
const sidebarEl = document.querySelector('.sidebar');
const closeEl = document.getElementById('close');
const themeToggle = document.getElementById("dark-mode-toggle");
const themeIcon = themeToggle.querySelector("img");


themeToggle.addEventListener("click", () => {
	document.body.classList.toggle("dark-mode");

	if (document.body.classList.contains('dark-mode')) {
		themeIcon.src = './assets/icons/sun.svg';
		themeIcon.alt = 'sun icon';
	} else {
		themeIcon.src = './assets/icons/moon.png';
		themeIcon.alt = 'moon icon';
	}
});


menuEl.addEventListener('click', () => {
	sidebarEl.classList.remove('hidden');
})

closeEl.addEventListener('click', () => {
	sidebarEl.classList.add('hidden');
})