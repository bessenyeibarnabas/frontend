import { useRef } from "react";
import { felvesz, listaz } from "../data";

export function UjAuto({ autok, setAutok }) {
  const rendszam = useRef();
  const evjarat = useRef();
  const fogyasztas = useRef();

  const inputAuto = {
    rendszam: useRef(),
    evjarat: useRef(),
    fogyasztas: useRef(),
  }

  function handleSave() {
    felvesz({
      rendszam: inputAuto.rendszam.current.value,
      evjarat: inputAuto.evjarat.current.value,
      fogyasztas: inputAuto.fogyasztas.current.value,
    });
    setAutok(listaz());
  }

  return (
    <section id="ujauto">
      <h2>Új autó felvétele</h2>
      <form>
        <table>
          <tbody>
            <tr>
              <td>Rendszám: </td>
              <td>
                <input type="text" id="rendszam" ref={inputAuto.rendszam} />
              </td>
            </tr>
            <tr>
              <td>Évjárat: </td>
              <td>
                <input type="number" id="evjarat" min="1900" ref={inputAuto.evjarat} />
              </td>
            </tr>
            <tr>
              <td>Fogyasztás: </td>
              <td>
                <input
                  type="number"
                  id="fogyasztas"
                  min="0"
                  step="0.1"
                  ref={inputAuto.fogyasztas}
                />
              </td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="button" onClick={handleSave}>
                  Mentés
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </section>
  );
}