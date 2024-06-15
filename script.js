document.addEventListener('DOMContentLoaded', (event) => {

    const bubble = document.getElementById('bubble');

    bubble.addEventListener('click', () => {
        //add the class pop to bubble
        bubble.classList.add('pop');

        // timeout to pop the bubble
        setTimeout(() => {
            bubble.remove();
        }, 300);
    });
});
