//external javascript file. create a hello world tier javascript function

//display an alert message when an event occurs (like clicking on a link)
function popUpFunction() {
    const message = "Hire me :}";
    alert(message);
    console.log("PopUpFunction called successfully");
}

const form = document.querySelector("#form");
const submitButton = document.querySelector("#submit");
const scriptURL = 'https://httpbin.org/post';

form.addEventListener('submit', e => {
    submitButton.disabled = true
    e.preventDefault()
    let requestBody = new FormData(form)
    fetch(scriptURL, { method: 'POST', body: requestBody })
        .then(response => {
            alert('Success!', response)
            submitButton.disabled = false
        })
        .catch(error => {
            alert('Error!', error.message)
            submitButton.disabled = false

        }
        )
});
