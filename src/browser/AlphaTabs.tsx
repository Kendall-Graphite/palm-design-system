import { ALPHABET } from './registry';
import styles from './AlphaTabs.module.css';

interface Props {
  activeLetter: string | null;
  availableLetters: Set<string>;
  onSelect: (letter: string) => void;
}

export default function AlphaTabs({ activeLetter, availableLetters, onSelect }: Props) {
  return (
    <nav className={styles.strip} aria-label="Alphabetical navigation">
      {ALPHABET.map(letter => {
        const hasComponents = availableLetters.has(letter);
        const isActive = letter === activeLetter;

        return (
          <button
            key={letter}
            className={[
              styles.tab,
              isActive ? styles.active : '',
              !hasComponents ? styles.disabled : '',
            ].join(' ')}
            onClick={() => hasComponents && onSelect(letter)}
            aria-label={hasComponents ? `Jump to ${letter}` : `No components for ${letter}`}
            aria-current={isActive ? 'true' : undefined}
            aria-disabled={!hasComponents}
            tabIndex={hasComponents ? 0 : -1}
          >
            {letter}
          </button>
        );
      })}
    </nav>
  );
}
