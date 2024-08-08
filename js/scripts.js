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

document.addEventListener('DOMContentLoaded', function() {
    const workItems = document.querySelectorAll('.work-item');

    workItems.forEach(item => {
        const title = item.querySelector('.work-title');
        const details = item.querySelector('.work-details');

        title.addEventListener('click', () => {
            details.classList.toggle('open');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    emailjs.init('iTmnt56qxGAKGQzEF');

    const formPopup = document.getElementById('formPopup');
    const openFormBtns = document.querySelectorAll('.open-form-btn');
    const contactForm = document.getElementById('contactForm');

    openFormBtns.forEach(button => {
                button.addEventListener('click', function() {
                    formPopup.style.display = 'block';
                    document.body.classList.add('overlay');
                });
            });

    formPopup.addEventListener('click', function(event) {
        if (event.target === formPopup) {
            closeForm();
        }
    });

    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();


        const formData = new FormData(contactForm);
        const vacancy = formData.get('vacancy');
        const name = formData.get('name');
        const experience = formData.get('experience');
        const age = formData.get('age');
        const number = formData.get('number');

        const templateParams = {
            vacancy: vacancy,
            name: name,
            experience: experience,
            age: age,
            number: number
        };


        const serviceID = 'service_mo4c1tn';
        const templateID = 'template_y66jsmm';

        emailjs.send(serviceID, templateID, templateParams).then(
            (response) => {
                alert('Сообщение отправлено!');
                closeForm();
            }, (error) => {
                console.log('Ошибка отправки:', error);
            }
        );
    });

    function closeForm() {
        formPopup.style.display = 'none';
        document.body.classList.remove('overlay');
    }
});
