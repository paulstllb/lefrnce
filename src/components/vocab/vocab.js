import React, { useState } from 'react';
import styles from './vocab.module.css'; // Importiere das CSS-Modul

function Vocab() {
  const [vokabelnData, setVokabelnData] = useState([
    { franzoesisch: "Bonjour", aussprache: "bɔ̃ʒuʀ", deutsch: "Hallo" },
    { franzoesisch: "Merci", aussprache: "mɛʁsi", deutsch: "Danke" },
    { franzoesisch: "Chat", aussprache: "ʃa", deutsch: "Katze" },
    { franzoesisch: "Chien", aussprache: "ʃjɛ̃", deutsch: "Hund" },
    // Weitere Vokabeln hier hinzufügen
  ]);

  const handleAddVokabel = (franzoesisch, aussprache, deutsch) => {
    const newVokabel = { franzoesisch, aussprache, deutsch };
    setVokabelnData((prevData) => [...prevData, newVokabel]);
  };

  return (
    <div className={styles['vokabeln-container']}>
      <h2>Vokabeln</h2>
      <Comp onAddVokabel={handleAddVokabel} />
      <table className={styles['vokabeln-table']}>
        <thead>
          <tr>
            <th>Französischer Satz</th>
            <th>Aussprache</th>
            <th>Deutsches</th>
          </tr>
        </thead>
        <tbody>
          {vokabelnData.map((vokabel, index) => (
            <tr key={index}>
              <td>{vokabel.franzoesisch}</td>
              <td>{vokabel.aussprache}</td>
              <td>{vokabel.deutsch}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Comp({ onAddVokabel }) {
  const [franzoesisch, setFranzoesisch] = useState('');
  const [aussprache, setAussprache] = useState('');
  const [deutsch, setDeutsch] = useState('');

  const handleAddClick = () => {
    onAddVokabel(franzoesisch, aussprache, deutsch);
    setFranzoesisch('');
    setAussprache('');
    setDeutsch('');
  };

  return (
    <div className={styles['hstack']}>
      <div className={`custom-button`} onClick={handleAddClick}>
        Add new one
      </div>
      <input className={styles['vokabeln-input']}
        placeholder="Franz."
        value={franzoesisch}
        onChange={(e) => setFranzoesisch(e.target.value)}
      />
      <input className={styles['vokabeln-input']}
        placeholder="Aussprache"
        value={aussprache}
        onChange={(e) => setAussprache(e.target.value)}
      />
      <input className={styles['vokabeln-input']}
        placeholder="Deutsch"
        value={deutsch}
        onChange={(e) => setDeutsch(e.target.value)}
      />
    </div>
  );
}

export default Vocab;