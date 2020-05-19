const date_elem = document.querySelector(".date")
const pointer_elem = document.querySelector(".mouse_invert")
const pointer_cursor_elem = document.querySelector(".mouse_invert_cursor")
let x
let y

const current_date_data = new Date()

function getDateString() {
    let month = current_date_data.getMonth() + 1
    let day = current_date_data.getDate()
    let year = current_date_data.getFullYear()
    return `${day <= 9 ? '0' + day : day}/
            ${month <= 9 ? '0' + month : month}/
            ${year}`
}

const cursor = () => {
    window.addEventListener('mousemove', (e) => { 
        x = e.clientX
        y = e.clientY 
    })

    const renderCursor = () => {
        pointer_cursor_elem.style.transform = `translate(${x - 2.5}px, ${y - 2.5}px)`
        pointer_elem.style.transform = `translate(${x - 10}px, ${y - 10}px)`
        requestAnimationFrame(renderCursor)
        
    }
    requestAnimationFrame(renderCursor)
}


cursor()

date_elem.textContent = getDateString()