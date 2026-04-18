import type { ComponentEntry } from './registry';
import styles from './RolodexCard.module.css';

interface Props {
  entry: ComponentEntry;
}

export default function RolodexCard({ entry }: Props) {
  return (
    <article className={`${styles.card} ${styles[entry.status]}`}>
      <div className={styles.header}>
        <span className={styles.eyebrow}>{entry.category}</span>
        <h3 className={styles.name}>{entry.name}</h3>
      </div>

      <div className={styles.rule} aria-hidden />

      <p className={styles.description}>{entry.description}</p>

      <div className={`${styles.status} ${styles[entry.status]}`} aria-label={`Status: ${entry.status}`}>
        <span className={styles.statusDot} aria-hidden />
        {entry.status === 'ready' ? 'Ready' : 'Phase 3'}
      </div>
    </article>
  );
}
