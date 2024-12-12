//* React-useState-Input-Level-1_6
//*React-Counter-Level-1_3
//* React-useState-Faq-Level-1_1
//* React-useState-Day-Night-Change-Level-2_2

import Counter from "../../components/counter(Counter-Level-1_3)/Counter";
import DayNightSection from "../../components/dayNightSection(DN-Change-Level-2_2/DayNightSection";
import FAQ from "../../components/faq(useState-Faq-Level-1_1)/FAQ";
import Form from "../../components/form(input-lvl-1_6)/Form";

const Home = () => {
    return ( 
        <>
        <Form/> {/* React-useState-Input-Level-1_6 */}
        <hr />
        <Counter/> {/* React-Counter-Level-1_3 */}
        <hr/>
        <FAQ/> {/* React-useState-Faq-Level-1_1 */}
        <hr />
        <DayNightSection/>
        </>
     );
}
 
export default Home;