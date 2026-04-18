import type { ComponentEntry } from './registry';
import styles from './RolodexCard.module.css';

interface Props {
  entry: ComponentEntry;
}

function PreviewPlaceholder() {
  return (
    <div className={styles.previewPlaceholder}>
      <svg
        className={styles.previewIcon}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden
      >
        <rect x="4" y="4" width="24" height="24" rx="2" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
        <line x1="10" y1="16" x2="22" y2="16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="16" y1="10" x2="16" y2="22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
      <span className={styles.previewLabel}>Phase 3</span>
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
