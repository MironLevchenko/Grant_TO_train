function SliderForImageTO() {
    const slider = document.getElementById('containerImage');
    const imageUrls = [
        "img/imgDetils/filter/FiltrTop1.png",
        "img/imgDetils/filter/filtrTOp2.png",
        "img/imgDetils/filter/filtrTOp3.png",
        // Добавьте столько URL-адресов изображений, сколько вам нужно
    ];

    // Функция для создания и добавления изображений в слайдер
    function createImages() {
        imageUrls.forEach((url, index) => {
            const img = document.createElement('img');
            img.src = url;
            img.alt = `Image ${index + 1}`;
            img.classList.add('slider-image');
            if (index === 0) img.classList.add('visible'); // Первое изображение видимо
            slider.appendChild(img);
        });
    }

    let currentIndex = 0;
    const images = slider.getElementsByClassName('slider-image');

    function showNextImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex + 1) % images.length;
        images[currentIndex].classList.add('visible');
    }

    function showPreviousImage() {
        images[currentIndex].classList.remove('visible');
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        images[currentIndex].classList.add('visible');
    }

    slider.addEventListener('click', function(event) {
        const rect = slider.getBoundingClientRect();
        const x = event.clientX - rect.left; // Получаем X координату внутри элемента

        if (x < rect.width / 2) {
            showPreviousImage();
        } else {
            showNextImage();
        }
    });

    createImages(); // Вызов функции для создания и добавления изображений
}