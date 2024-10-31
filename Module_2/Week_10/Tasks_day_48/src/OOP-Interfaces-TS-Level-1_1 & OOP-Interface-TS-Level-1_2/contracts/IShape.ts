//- Erstelle ein Interface IShape mit den Eigenschaften
//- name: string
//- color: string

interface IShape {
    _name : string;
    _color : string;
//Nimm eine weitere Eigenschaft isRound (boolean) in IShape auf (level 1_2)
    _isRound: boolean;  // should this be optional, to mention it in constructor of classes ? 


    draw: () => void;
};



export default IShape;