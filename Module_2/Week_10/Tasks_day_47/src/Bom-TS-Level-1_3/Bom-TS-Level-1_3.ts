console.log("level3");

//Schreibe eine Function, die sich Daten aus dem Browser zieht und diese auf einer Seite anzeigt. Schaue dir zum besseren Verständnis die Vorschau an.
const browserData = document.querySelector('#browserData') as HTMLDivElement;


const getBrowserData = ():void => {
    const data = {

    browserName: navigator.userAgent,
    platform: navigator.platform, // Betriebssystem-Architektur veraltet
    appVersion: navigator.appVersion, // Browser-Version veraltet
    windowResolution: `${window.innerWidth}x${window.innerHeight}`, // Window Auflösung (Dank AI)
    innerWidth: window.innerWidth, 
    innerHeight: window.innerHeight, 
    colorDepth: screen.colorDepth, 
    pixelDepth: screen.pixelDepth 
};
 console.log(data);
 
  browserData.innerHTML= `
   <p>Browsername: ${data.browserName}</p>
        <p>Betriebssystem-Architektur: ${data.platform}</p>
        <p>Browser-Version: ${data.appVersion}</p>
        <p>Window Auflösung: ${data.windowResolution}</p>
        <p>Innenbreite des Dokuments: ${data.innerWidth}</p>
        <p>Innenhöhe des Dokuments: ${data.innerHeight}</p>
        <p>colorDepth: ${data.colorDepth}</p>
        <p>pixelDepth: ${data.pixelDepth}</p>
    `;
}
getBrowserData()

