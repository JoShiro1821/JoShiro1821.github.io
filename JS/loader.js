window.onload = function() {
    const loaderScreen = document.getElementById('loading-screen');
    const mainContent = document.getElementById('main-content');

    setTimeout(function() {
        loaderScreen.style.opacity = '0'; 
        loaderScreen.style.visibility = 'hidden'; 
        mainContent.classList.remove('hidden'); 
    }, 1200); 
}