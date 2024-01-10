// TECNOLOGIAS USADAS PARA DESENVOLVER A TELA DE CARTEIRA DE ESTUDANTE


//NEXTJS
//TYPSCRIPT
//NODE
//POSTCSS
//TAILWINDCSS

//+ caminho para simular a qualidade da internet e ver como roda no site direto no Devtools.

/*

import React, { useState } from 'react';

const DateComponent: React.FC = () => {
  const [inputDate, setInputDate] = useState<string>('');
  const [processedDate, setProcessedDate] = useState<string>('');

  const handleDateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(event.target.value);
  };

  const processDate = () => {
    const currentDate = new Date();
    const inputYear = new Date(inputDate).getFullYear();
    const currentYear = currentDate.getFullYear();

    if (inputYear > currentYear || (inputYear === currentYear && new Date(inputDate).getMonth() >= 2)) {
      const nextYear = currentYear + 1;
      setProcessedDate(`${nextYear}-01-01`);
    } else {
      setProcessedDate(inputDate);
    }
  };

  return (
    <div>
      <label>
        Insira uma data:
        <input type="date" value={inputDate} onChange={handleDateChange} />
      </label>
      <button onClick={processDate}>Processar Data</button>
      {processedDate && <p>Data processada: {processedDate}</p>}
    </div>
  );
};

export default DateComponent;
*/