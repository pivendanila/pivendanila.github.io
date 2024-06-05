const handleChange1 = (offset)=>{
	const activeSlide = document.querySelector(".carousel [data-active]")
	const slides = [...document.querySelectorAll(".carousel .slide")]
	const currentIndex = slides.indexOf(activeSlide)
	let newIndex = currentIndex + offset;
	if(newIndex < 0) newIndex = slides.length - 1
	if(newIndex >= slides.length) newIndex = 0

	slides.forEach((slide, index) => {
        if (index === newIndex) {
            slide.dataset.active = true;
        } else {
            delete slide.dataset.active;
        }
    });
}

const Next1 = ()=> handleChange1(1)
const Prev1 = ()=> handleChange1(-1)