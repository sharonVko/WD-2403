console.log("test");


type Pet = {
    tiertyp: string;
    namen: string[];
  };
  
  let unsereHaustiere: Pet[] = [
    {
      tiertyp: 'Katze',
      namen: ['Gipsy', 'Nala', 'Dinky']
    },
    {
      tiertyp: 'Hunde',
      namen: ['Knöpfchen', 'Pinselchen', 'Droopy']
    },
    {
        tiertyp: 'Hamster',
        namen: ['Harald', "Herbert"]
    }
  ];

  console.log(unsereHaustiere);
  console.log(unsereHaustiere[0].namen[1]); /* console returns: Nala */
  console.log(unsereHaustiere[1].namen[2]); /* console returns: Droopy */
  
  console.log(unsereHaustiere[1].namen); /* console returns: (3) ['Knöpfchen', 'Pinselchen', 'Droopy'] */

  const unsereHaustiereCopy = {...unsereHaustiere};
  unsereHaustiereCopy[1].namen[2] = "Snoopy" 
  console.log(unsereHaustiereCopy[1].namen[2]); /* console returns: Snoopy */

  unsereHaustiereCopy[0].namen[2] =  "Pinky";
  console.log(unsereHaustiereCopy[0].namen[2]); /* console returns: Pinky   */
  
  console.log(unsereHaustiere); /* console returns: (3) [{…}, {…}, {…}]
  0
  : 
  {tiertyp: 'Katze', namen: Array(3)}
  1
  : 
  {tiertyp: 'Hunde', namen: Array(3)}
  2
  : 
  {tiertyp: 'Hamster', namen: Array(2)}
  length
  : 
  3
  [[Prototype]]
  : 
  Array(0) */

  console.log(unsereHaustiere[2].namen[1]); /* console returns : Herbert */
  
  
  
  