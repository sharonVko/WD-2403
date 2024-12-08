const passwordInput = document.querySelector('#passwordInput') as HTMLInputElement;
const saveBtn = document.querySelector('#saveBtn') as HTMLButtonElement;
const userFeedbackOutput = document.querySelector('#user-feedback__output') as HTMLParagraphElement;


/* saveBtn?.addEventListener('click', () => {
    passwordInput.value.length >=8 ? userFeedbackOutput.innerHTML= 'password correct': userFeedbackOutput.innerHTML = 'password too short'
}); */

saveBtn?.addEventListener('click', () => {
    
    const isPasswordValid = passwordInput.value.length >= 8;isPasswordValid ? userFeedbackOutput.innerHTML= 'Welcome to your account': userFeedbackOutput.innerHTML = 'The password is too short';
    isPasswordValid ? userFeedbackOutput.style.color = 'green' : userFeedbackOutput.style.color ='red'
}); // nur kurz gestruggled, wie man mit ternary operator formuliert, dass sich mehrere Dinge verändern sollen - also nicht nur text, sondern auch farbe