// varibale definitions
let message_box_expanded = false


// event listeners
window.addEventListener("load", () => {
    const $main = document.getElementById('main-content')
    $main.classList.replace('disabled', 'enabled')
})

document.getElementById('contact-form').onsubmit = async (e) => {
    e.preventDefault()

    const form_data = Object.fromEntries(new FormData(e.target).entries())

    try {
        const res = await fetch('/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(form_data)
        })

        const data = await res.json()
        alert(data.message)
    } catch (err) {
        console.error(err)
    }

}

// function calls


// function definitions
function init() {

}

