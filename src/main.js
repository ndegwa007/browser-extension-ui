// theme transitions

const logo = document.querySelector('.logo')
const icon = document.querySelector('.theme-icon');
const themeTitle = document.querySelector('.title-header');
const darkmode = document.getElementById('body') 
const headerBar = document.querySelector('.header-bar')
const navbtns = document.querySelectorAll('.nav-btn')
const cards = document.querySelectorAll('.card')
const content = document.querySelectorAll('.content')
const names = document.querySelectorAll('.name')
const removeBtns = document.querySelectorAll('.remove-btn')


icon.addEventListener('click', () => {
    const items = [themeTitle, darkmode, headerBar]
    const darkNavItems = [icon, logo]

    darkNavItems.forEach(item => {
        item.classList.toggle('active');
    })
   
    navbtns.forEach(item => {
        item.classList.toggle('active')
    })

    cards.forEach(item => {
        item.classList.toggle('active')
    })
    
    items.forEach(item => {
        item.classList.toggle('dark')
    })

    content.forEach(item => {
        item.classList.toggle('active')
    })

    names.forEach(item => {
        item.classList.toggle('active')
    })

    removeBtns.forEach(item => {
        item.classList.toggle('active')
    })
   
})


//cards toggle button transitions

const toggles = document.querySelectorAll('.card-toggle')


Array.from(toggles).forEach(btn => {
    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
    })
})