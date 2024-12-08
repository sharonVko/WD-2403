const airQuality =  document.querySelector('#air-quality') as HTMLInputElement;

const qualityNumberOutput = document.querySelector('#quality-number__output') as HTMLSpanElement;

const concernLvl = document.querySelector('#concern-lvl') as HTMLParagraphElement;

const effectLvl = document.querySelector('#effect-lvl') as HTMLParagraphElement;


const checkAirQuality = (quality: number): void => {
    qualityNumberOutput.innerHTML = quality.toString(); // to show number matching the range

    if(quality <= 50) {
        concernLvl.innerHTML = `Level of health concern:  Good`;
        effectLvl.innerHTML = `Level of health effect: Little or no risk`;
        document.body.style.backgroundColor = 'green'
    } else if (quality > 50 && quality <= 100) {
        concernLvl.innerHTML = `Level of health concern:  Moderate`;
        effectLvl.innerHTML = `Level of health effect:  Acceptable quality`
        document.body.style.backgroundColor = 'yellow';
    } else if (quality >100 && quality <= 150) {
        concernLvl.innerHTML = `Level of health concern: Unhealthy for sensitive groups`;
        effectLvl.innerHTML = `Level of health effect: Generable publics not likely affected`;
        document.body.style.backgroundColor = 'orange';
    }
};

airQuality?.addEventListener('input', (event: Event)=> { 
    const rangePosition = event.target as HTMLInputElement; 
    checkAirQuality(Number(rangePosition.value));
}) //  hier konnte ich mich nicht mehr erinnern, wie ich den value von einer range bekommen kann


     