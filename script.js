//Suppose you work in an organisation for sea turtle conservation and research
//and you need to update information of the turtle "Frida"

const listOfTurtles = `
<turtles> 
    <turtle id="Dave">
        <sex>M</sex>
        <ccl>80</ccl>
        <tag>123456789</tag>
    </turtle>
    <turtle id="Sara">
        <sex>F</sex>
        <ccl>72</ccl>
        <tag>1235469807</tag>
    </turtle>
    <turtle id="Frida">
        <sex>M</sex>
        <ccl>64</ccl>
        <tag>123678940</tag>
    </turtle>
</turtles>`;

const parseDocument = new DOMParser();
const xmlTurtles = parser.parseFromString(listOfTurtles, "application/xml");

const Frida = xmlTurtles.querySelector("turtle[id='Frida']");
const sex = Frida.querySelector("sex").textContent;
Frida.querySelector("sex").textContent =  "F";

const serializer = new XMLSerializer();
const updatedFrida = serializer.serializeToString(xmlTurtles);




