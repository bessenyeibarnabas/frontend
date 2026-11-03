import { felvesz, listaz } from "../data";

export function UjAuto({autok, setAutok}){
    function handleSave(){
        const rendszam = document.getElementById("rendszam").value;
        const evjarat = document.getElementById("evjarat").value*1;
        const fogyasztas = document.getElementById("fogyasztas").value*1;

        felvesz({
            rendszam: rendszam,
            evjarat: evjarat,
            fogyasztas: fogyasztas
        });

        setAutok(listaz());
    }
    return(
        <section id="ujautoc">
            <h2>Új autó felvétele</h2>
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td>Rendszám: </td>
                            <td>
                                <input type="text" id="rendszam"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Évjárat: </td>
                            <td>
                                <input type="number" id="evjarat" min="1900s" />
                            </td>
                        </tr>
                        <tr>
                            <td>Fogyasztás: </td>
                            <td>
                                <input type="number" id="fogyasztas" min="0" step="0.1"/>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                <button type="button" onClick={handleSave}>Mentés</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    );
}