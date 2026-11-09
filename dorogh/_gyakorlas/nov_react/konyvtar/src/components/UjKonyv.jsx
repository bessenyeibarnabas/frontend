import { hozzad, lekerdez } from "../data"

export function UjKonyv({konyvkonyvek, setKonyvek}){

    function handleSave(){
        const leltari_szam = document.getElementById("leltari_szam").value * 1
        const szerzo = document.getElementById("szerzo").value
        const cim = document.getElementById("cim").value
        const kiadas_eve = document.getElementById("kiadas_eve").value * 1
        const keszleten = document.getElementById("keszleten").checked

        hozzad({
            leltari_szam: leltari_szam,
            szerzo: szerzo,
            cim: cim,
            kiadas_eve: kiadas_eve,
            keszleten: keszleten
        })

        setKonyvek(lekerdez())
    }
    return(
        <section>
            <h2>Hozzáad</h2>
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>Leltári szám:</td>
                            <td><input type="text" id="leltari_szam" /></td>
                        </tr>
                        <tr>
                            <td>Szerző:</td>
                            <td><input type="text" id="szerzo" /></td>
                        </tr>
                        <tr>
                            <td>Cím:</td>
                            <td><input type="text" id="cim" /></td>
                        </tr>
                        <tr>
                            <td>Kiadás éve:</td>
                            <td><input type="number" id="kiadas_eve" /></td>
                        </tr>
                        <tr>
                            <td>Készleten:</td>
                            <td><input type="checkbox" id="keszleten" /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                {/* type="button" kell, hogy az űrlap ne töltse újra az oldalt! */}
                                <button type="button" onClick={handleSave}>Mentés</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )


}