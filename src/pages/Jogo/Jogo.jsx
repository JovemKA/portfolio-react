import React, { useState } from 'react';
import './Jogo.css';

function Jogo() {
  const [randomCode] = useState(generateRandomCode());
  const [input, setInput] = useState('');
  const [attempts, setAttempts] = useState([]);

  function generateRandomCode() {
    const digits = new Set();
    while (digits.size < 4) {
      digits.add(Math.floor(Math.random() * 10));
    }
    return Array.from(digits).join('');
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (input.length !== 4 || !/^\d+$/.test(input)) {
      alert('Por favor, insira um número de 4 dígitos.');
      return;
    }

    const bulls = input.split('').filter((num, idx) => num === randomCode[idx]).length;
    const cows = input.split('').filter((num) => randomCode.includes(num)).length - bulls;

    setAttempts([{ guess: input, bulls, cows }, ...attempts]);
    setInput('');
  }

  function revealCode() {
    alert(`O código secreto é: ${randomCode}`);
  }

  return (
    <div className="game">
      <h2>Jogo Senha (Bulls and Cows)</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Digite 4 números"
          maxLength="4"
        />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={revealCode}>Revelar Código</button>
      <ul>
        {attempts.map((attempt, index) => (
          <li key={index}>
            {attempt.guess} - {attempt.bulls} Bulls, {attempt.cows} Cows
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Jogo;
