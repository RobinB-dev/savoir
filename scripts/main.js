const date_elem = document.querySelector(".date")
const pointer_elem = document.querySelector(".mouse_invert")
const pointer_cursor_elem = document.querySelector(".mouse_invert_cursor")
const clickable_things_elem = document.querySelectorAll(".clickable")
let x = -50
let y = -50

let monthTable = [
    {
      monthNb: '1',
      monthName: 'Janvier'
    },
    {
    monthNb: '2',
    monthName: 'Fevrier'
    },
    {
      monthNb: '3',
      monthName: 'Mars'
    },
    {
    monthNb: '4',
    monthName: 'Avril'
    },
    {
      monthNb: '5',
      monthName: 'Mai'
    },
    {
    monthNb: '6',
    monthName: 'Juin'
    },
    {
      monthNb: '7',
      monthName: 'Juillet'
    },
    {
    monthNb: '8',
    monthName: 'Aout'
    },
    {
      monthNb: '9',
      monthName: 'Septembre'
    },
    {
    monthNb: '10',
    monthName: 'Octobre'
    },
    {
      monthNb: '11',
      monthName: 'Novembre'
    },
    {
    monthNb: '12',
    monthName: 'Decembre'
    }
]


const current_date_data = new Date()

function getDateString() {
    let month = current_date_data.getMonth() + 1
    const searchMonth = monthTable.find(search => search.monthNb == month ).monthName

    let day = current_date_data.getDate()
    let year = current_date_data.getFullYear()
    return `${day <= 9 ? '0' + day : day}
            ${searchMonth <= 9 ? '0' + searchMonth : searchMonth}
            ${year}`
}

const cursor = () => {
    window.addEventListener('mousemove', (e) => { 
        x = e.clientX
        y = e.clientY 
    })

    clickable_things_elem.forEach(element => {
        element.addEventListener("mouseenter", () => {
            pointer_elem.classList.add("click")
        })
        element.addEventListener("mouseleave", () => {
            pointer_elem.classList.remove("click")
        })
    });

    const renderCursor = () => {
        pointer_cursor_elem.style.transform = `translate(${x - 2.5}px, ${y - 2.5}px)`
        pointer_elem.style.transform = `translate(${x - 10}px, ${y - 10}px)`
        requestAnimationFrame(renderCursor)
        
    }
    requestAnimationFrame(renderCursor)
}


cursor()

date_elem.textContent = getDateString()

