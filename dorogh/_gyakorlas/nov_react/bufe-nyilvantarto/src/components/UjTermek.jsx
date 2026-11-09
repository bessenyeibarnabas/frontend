import { felvesz, lekerdez } from "../data";

export function UjTermek({termekek, setTermekek}){

    function handleSave(){
        const termeknev = document.getElementById("termeknev").value;
        const ar = document.getElementById("ar").value * 1;
        const kaloria = document.getElementById("kaloria").value * 1;

        felvesz({
            id: Date.now(),
            termeknev: termeknev,
            ar: ar,
            kaloria: kaloria
        })

        setTermekek(lekerdez())


    }
    return(
        <section>
            <h2>Új +</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Terméknév: </td>
                            <td>
                                <input type="text" id="termeknev" />
                            </td>
                        </tr>
                        <tr>
                            <td>Ár: </td>
                            <td>
                                <input type="number" id="ar" min="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>Kalória: </td>
                            <td>
                                <input type="number" id="kaloria" min="0" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button type="button" onClick={handleSave}>Mentés</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )
}