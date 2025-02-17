import "./Searchbar.css"

interface ISearchbarProps {
    sortByTitleAsc: () => void;
    sortByTitleDesc: () => void;
    sortByBestRate: () => void;
    sortByDataAsc: () => void;
    sortByDataDesc : () => void;
}

const Searchbar:React.FC<ISearchbarProps> = (props) => {
    return ( 
        <header>
           <button type="button" onClick={props.sortByDataAsc}>Sort by Data Ascending</button>
           <button type="button" onClick={props.sortByDataDesc}>Sort by Data Descending</button>
           <button type="button" onClick={props.sortByBestRate}>Best Rate</button>
           <button type="button" onClick={props.sortByTitleAsc}>A-Z</button>
           <button type="button" onClick={props.sortByTitleDesc}>Z-A</button>
        </header>
     );
}
 
export default Searchbar;