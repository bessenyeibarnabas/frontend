import { felvesz, listaz } from "../data"

export function UjTelefonok({telefonok, setTelefonok}){

    function handleSave(){
        const tipus = document.getElementById("tipus").value
        const gyartasi_ev = document.getElementById("gyartasi_ev").value * 1
        const kapacitas = document.getElementById("kapacitas").value

        felvesz({
            id: Date.now(),
            tipus: tipus,
            gyartasi_ev: gyartasi_ev,
            kapacitas: kapacitas
        })

        setTelefonok(listaz())
        
    }
    return(
        <section>
            <h1>Telefon hozzáadása</h1>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Tipus</td>
                            <td>
                                <input type="text" id="tipus"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Gyártási év</td>
                            <td>
                                <input type="number" name="" id="gyartasi_ev" />
                            </td>
                        </tr>
                        <tr>
                            <td>Kapacitas</td>
                            <td>
                                <input type="text" id="kapacitas"/>
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