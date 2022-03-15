(function() {
    
    const sidebarToggle = document.querySelector(".mobile-sidebar-toggle");
    const closeSidebar = document.querySelector(".fa-times-circle");
    const sideBar = document.querySelector('#modal-sidebar');
    
    sidebarToggle.addEventListener('click', () => {
        sideBar.classList.remove('hidden');
        sideBar.classList.add('show');
    });

    closeSidebar.addEventListener('click', () => {
        sideBar.classList.remove('show');
        sideBar.classList.add('hidden');
    });
    




})()