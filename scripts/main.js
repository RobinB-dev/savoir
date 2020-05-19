const date_elem = document.querySelector(".date")
const pointer_elem = document.querySelector(".mouse_invert")

const current_date_data = new Date()

function getDateString() {
    let month = current_date_data.getMonth() + 1
    let day = current_date_data.getDate()
    let year = current_date_data.getFullYear()
    return `${day <= 9 ? '0' + day : day}/
            ${month <= 9 ? '0' + month : month}/
            ${year}`
}

window.addEventListener('mousemove', (e) => { 
    pointer_elem.style.top = `${e.clientY - 10}px`
    pointer_elem.style.left = `${e.clientX - 10}px`
})

date_elem.textContent = getDateString()