import type { ComponentEntry } from './registry';
import styles from './RolodexCard.module.css';

interface Props {
  entry: ComponentEntry;
}

function PreviewPlaceholder() {
  return (
    <div className={styles.previewPlaceholder}>
      <span className={styles.previewLabel} aria-hidden>—</span>
    </div>
  );
}

export default function RolodexCard({ entry }: Props) {
  return (
    <article className={styles.card}>
      {/* Preview */}
      <div className={styles.preview} aria-label={entry.status === 'ready' ? `${entry.name} preview` : `${entry.name} preview — coming in Phase 3`}>
        {entry.render ? entry.render() : <PreviewPlaceholder />}
      </div>

      {/* Body */}
      <div className={styles.body}>
        <div className={styles.header}>
          <span className={styles.eyebrow}>{entry.category}</span>
          <h3 className={styles.name}>{entry.name}</h3>
        </div>

        <p className={styles.description}>{entry.description}</p>

        <div className={`${styles.status} ${styles[entry.status]}`} aria-label={`Status: ${entry.status === 'ready' ? 'ready' : 'planned for Phase 3'}`}>
          <span className={styles.statusDot} aria-hidden />
          {entry.status === 'ready' ? 'Ready' : 'Phase 3'}
        </div>
      </div>
    </article>
  );
}
