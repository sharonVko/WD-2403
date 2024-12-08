const numberInput = document.querySelector('#numberInput') as HTMLInputElement;
const loopMeBtn = document.querySelector('#loopMeBtn') as HTMLButtonElement;
const loopOutput = document.querySelector('#loopOutput') as HTMLParagraphElement;


loopMeBtn?.addEventListener('click', () => {
let amount = Number(numberInput.value);
let output ='Loo';
for(let char:number = 0; char < amount ; char++) {
    output += 'o';
}
  loopOutput.innerHTML = `${output + 'p'}`;
  loopOutput.style.color = 'limegreen'

});