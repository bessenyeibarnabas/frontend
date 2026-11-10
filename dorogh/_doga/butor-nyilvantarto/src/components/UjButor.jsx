import { beszur, lekerdez } from "../data"

export function UjButor({butorok, setButorok}){

    function handleSave(){
        const fajta = document.getElementById("fajta").value
        const szin = document.getElementById("szin").value
        const ar = document.getElementById("ar").value * 1


        beszur({
            fajta: fajta,
            szin: szin,
            ar: ar,
        })

        setButorok(lekerdez())
    }

    return(
        <section>
            <h3>Hozzáad</h3>
            <form>
                <table id="formos">
                    <tbody>
                        <tr>
                            <td>Fajtája:</td>
                            <td>
                                <input type="text" name="" id="fajta" />
                            </td>
                        </tr>
                        <tr>
                            <td>Színe:</td>
                            <td>
                                <input type="text" name="" id="szin" />
                            </td>
                        </tr>
                        <tr>
                            <td>Ára:</td>
                            <td>
                                <input type="number" name="" id="ar" />
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