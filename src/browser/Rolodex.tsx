import { useState, useEffect, useRef, useCallback } from 'react';
import {
  filterRegistry,
  groupByLetter,
  getLettersWithComponents,
  ALPHABET,
} from './registry';
import RolodexCard from './RolodexCard';
import AlphaTabs from './AlphaTabs';
import SearchBar from './SearchBar';
import styles from './Rolodex.module.css';

export default function Rolodex() {
  const [query, setQuery] = useState('');
  const [activeLetter, setActiveLetter] = useState<string | null>(null);
  const sectionRefs = useRef<Map<string, HTMLElement>>(new Map());

  const filtered = filterRegistry(query);
  const grouped = groupByLetter(filtered);
  const availableLetters = getLettersWithComponents();
  const filteredLetters = new Set(filtered.map(c => c.name[0].toUpperCase()));

  // Track which letter section is in view
  useEffect(() => {
    if (query) {
      setActiveLetter(null);
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        // Pick the topmost visible section
        const visible = entries
          .filter(e => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible.length > 0) {
          const id = visible[0].target.getAttribute('data-letter');
          if (id) setActiveLetter(id);
        }
      },
      { rootMargin: '-56px 0px -60% 0px', threshold: 0 },
    );

    sectionRefs.current.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [query, grouped.size]);

  const scrollToLetter = useCallback((letter: string) => {
    const el = sectionRefs.current.get(letter);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setActiveLetter(letter);
    }
  }, []);

  const setSectionRef = useCallback((letter: string, el: HTMLElement | null) => {
    if (el) sectionRefs.current.set(letter, el);
    else sectionRefs.current.delete(letter);
  }, []);

  const totalVisible = filtered.length;
  const isSearching = query.trim().length > 0;

  return (
    <div className={styles.shell}>
      {/* ── Header ─────────────────────────────────────────────── */}
      <header className={styles.header}>
        <div className={styles.headerInner}>
          <span className={styles.wordmark}>
            Palm<span className={styles.wordmarkDot}>.</span>
          </span>
          <SearchBar value={query} onChange={setQuery} />
          <span className={styles.count} aria-live="polite" aria-atomic>
            {totalVisible} component{totalVisible !== 1 ? 's' : ''}
          </span>
        </div>
      </header>

      {/* ── A–Z Tab Strip ───────────────────────────────────────── */}
      <AlphaTabs
        activeLetter={activeLetter}
        availableLetters={isSearching ? filteredLetters : availableLetters}
        onSelect={scrollToLetter}
      />

      {/* ── Main content ────────────────────────────────────────── */}
      <main className={styles.main}>
        {grouped.size === 0 ? (
          <div className={styles.empty} role="status">
            <p className={styles.emptyLabel}>
              No components match{' '}
              <span className={styles.emptyQuery}>{query}</span>
            </p>
            <button className={styles.clearBtn} onClick={() => setQuery('')}>
              Clear search
            </button>
          </div>
        ) : (
          ALPHABET.filter(l => grouped.has(l)).map(letter => (
            <section
              key={letter}
              className={styles.section}
              data-letter={letter}
              id={`section-${letter}`}
              ref={el => setSectionRef(letter, el)}
              aria-label={`Components starting with ${letter}`}
            >
              <div className={styles.sectionHeader}>
                <span className={styles.sectionLetter} aria-hidden>
                  {letter}
                </span>
                <div className={styles.sectionRule} aria-hidden />
              </div>

              <div className={styles.grid}>
                {grouped.get(letter)!.map(entry => (
                  <RolodexCard key={entry.id} entry={entry} />
                ))}
              </div>
            </section>
          ))
        )}
      </main>
    </div>
  );
}
