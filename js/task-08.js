const form = document.querySelector('.login-form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const {email, password} = event.currentTarget.elements;
    if(!email.value || !password.value){
        const messageAlert = 'ALERT!  Fill in all fields';
        alert(messageAlert);
    }
    else {
        const dataForm = {
            email:email.value,
            password:password.value,
        }
        console.log(dataForm)
    }
    form.reset()
}