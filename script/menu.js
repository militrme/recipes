const menuBtn = document.getElementById('menu'),
    menuList = document.getElementById('menu-list');

menuBtn.addEventListener('click', function(){
    menuList.classList.toggle('header-nav_list-open');
    menuBtn.classList.toggle('menu-open')
});