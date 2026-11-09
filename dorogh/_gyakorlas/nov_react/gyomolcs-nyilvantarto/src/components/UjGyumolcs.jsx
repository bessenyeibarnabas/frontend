import { felvesz } from "../data"

export function UjGyumolcs({gyumolcsok, setGyumolcsok}){
    
    function handelSave(){
        const nev = document.getElementById("nev").value
        const cukortartalom = document.getElementById("cukortartalom").value*1
        const rosttartalom = document.getElementById("rosttartalom").value*1

        felvesz({
            nev: nev,
            cukortartalom: cukortartalom,
            rosttartalom: rosttartalom,
        })

        setGyumolcsok([...listazgyumi()]);
    }
    return (
        <section>
            <h2>Új termék felvétele</h2>
            <form action="">
                <table>
                    <tbody>
                        <tr>
                            <td>Termék neve:</td>
                            <td>
                                <input type="text" id="nev"/>
                            </td>
                        </tr>
                        <tr>
                            <td>Cukortartalma</td>
                            <input type="number" name="" id="cukortartalom" />
                        </tr>
                        <tr>
                            <td>Rost: t</td>
                            <td>
                                <input type="number" name="" id="rosttartalom" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <button onClick={handelSave}>Mentés</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </form>
        </section>
    )
}