// theme transitions

const logo = document.querySelector('.logo')
const icon = document.querySelector('.theme-icon');
const themeTitle = document.querySelector('.title-header');
const darkmode = document.getElementById('body') 
const headerBar = document.querySelector('.header-bar')


icon.addEventListener('click', () => {
    const items = [themeTitle, darkmode, headerBar]

    icon.classList.toggle('active')
    logo.classList.toggle('active')
    
    items.forEach(item => {
        item.classList.toggle('dark')
    })
   
})










//cards toggle button transitions

const toggles = document.querySelectorAll('.card-toggle')


Array.from(toggles).forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
})