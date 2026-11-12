// Ez a függvény egy JS-objektumot vár argumentumként
// Az objektumnak a következő tulajdonságokat kell tartalmaznia:
// - initialInvestment: A kezdeti befektetés összege
// - annualInvestment: Az évente befektetett összeg
// - expectedReturn: A várt (éves) hozamráta
// - duration: A befektetés időtartama (időtáv)
export function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    const interestEarnedInYear = investmentValue * (expectedReturn / 100);
    investmentValue += interestEarnedInYear + annualInvestment;
    annualData.push({
      year: i + 1, // aktuális év sorszáma
      interest: interestEarnedInYear, // adott évben elért hozam
      valueEndOfYear: investmentValue, // befektetés teljes értéke adottév végén
      annualInvestment: annualInvestment, // újonnan befizetett összeg az adott évben
    });
  }

  return annualData;
}

// A böngészőbe beépített Intl API segít a pénznemek formázásában
// This object offers a "format()" method that can be used to format numbers as currency
// Ennek az objektumnak a format() metódusával könnyen lehet formázni az aktuális pénznemet
// példa a használatra: formatter.format(1500000)  => '1 500 000 Ft"
export const formatter = new Intl.NumberFormat('hu-HU', {
  style: 'currency',
  currency: 'HUF',  
  maximumFractionDigits: 0,
});
