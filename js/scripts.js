window.addEventListener('scroll', function() {
    var hiddenObject = document.querySelector('.up_arrow');
    var scrollPosition = window.scrollY;
    var windowHeight = window.innerHeight

    if (scrollPosition >= windowHeight * 1.009) {
        hiddenObject.style.opacity = '1';
		hiddenObject.style.cursor = 'pointer';
    }
	if (scrollPosition < windowHeight * 1.009) {
        hiddenObject.style.opacity = '0';
		hiddenObject.style.cursor = 'default';
    }
});
function scrollUp() {
    const element = document.querySelector('.panel');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToActivities() {
    const element = document.querySelector('.activities');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToCareer() {
    const element = document.querySelector('.career');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}
function scrollToContacts() {
    const element = document.querySelector('.footer');
    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
}