import styles from "./sent.module.css"

function sent(){
    const sentences = [
        { fr: "Bonjour, comment ça va ?", de: "Hallo, wie geht es dir?" },
        { fr: "J'aime voyager à l'étranger.", de: "Ich liebe es, ins Ausland zu reisen." },
        { fr: "Quel est ton plat préféré ?", de: "Was ist dein Lieblingsessen?" },
        { fr: "Il fait beau aujourd'hui.", de: "Heute ist schönes Wetter." },
        { fr: "J'ai rendez-vous chez le médecin demain.", de: "Ich habe morgen einen Termin beim Arzt." },
        // Weitere Sätze hier hinzufügen
      ];
    
      return (
        <div className={styles.sentContainer}>
          <h2>Französische Sätze und Übersetzungen</h2>
          {sentences.map((sentence, index) => (
            <div className={styles.sentence} key={index}>
              <p className={styles.fr}>{sentence.fr}</p>
              <p className={styles.de}>{sentence.de}</p>
            </div>
          ))}
        </div>
      );
    }
    

export default sent