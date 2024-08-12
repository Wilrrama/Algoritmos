function romanToInt(s: string): number {
  // Passo 1: Definir a tabela de valores para os símbolos romanos
  const romanMap: { [key: string]: number } = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;

  // Passo 2: Percorrer o numeral romano da esquerda para a direita
  for (let i = 0; i < s.length; i++) {
    const current = romanMap[s[i]];
    const next = romanMap[s[i + 1]];

    // Passo 3: Aplicar a lógica de adição ou subtração
    if (next && current < next) {
      total -= current;
    } else {
      total += current;
    }
  }

  // Passo 4: Retornar o valor total
  console.log(total);

  return total;
}

romanToInt("III");
romanToInt("MCMXCIV");
romanToInt("LVIII");
romanToInt("IX");
romanToInt("IV");
