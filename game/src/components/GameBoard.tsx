'use client';

import { useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { Author, Snippet } from '@/types/game';
import { ROUNDS_PER_GAME } from '@/types/game';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types/game';

const RANK_BLURBS: Record<string, string> = {
  perfect:   'Not a single forgery slipped past you. The machines have lodged a formal complaint.',
  excellent: "A connoisseur's ear. You could smell a counterfeit across a crowded reading-room.",
  good:      'Sound judgement, on the whole, with the occasional lapse in taste.',
  fair:      'The counterfeit found in you a willing — and well-mannered — reader.',
  poor:      "You bought the machine's prose by the column-inch and asked for more.",
  terrible:  'It has, in gratitude, named a server farm after you.',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function pickRounds(author: Author): Snippet[] {
  const real = shuffle(author.snippets.filter((s) => !s.isAI));
  const ai   = shuffle(author.snippets.filter((s) => s.isAI));
  const half = Math.ceil(ROUNDS_PER_GAME / 2);
  return shuffle([...real.slice(0, half), ...ai.slice(0, ROUNDS_PER_GAME - half)]);
}

interface AnswerRecord { name: string; isAI: boolean; correct: boolean; }

interface Props { author: Author; locale: Locale; }

export default function GameBoard({ author, locale }: Props) {
  const t  = useTranslations('game');
  const tr = useTranslations('results');

  const [replayCount, setReplayCount] = useState(0);
  const rounds = useMemo(() => pickRounds(author), [author, replayCount]);

  const [current, setCurrent] = useState(0);
  const [picked,  setPicked]  = useState<'real' | 'fake' | null>(null);
  const [score,   setScore]   = useState(0);
  const [done,    setDone]    = useState(false);
  const [answers, setAnswers] = useState<AnswerRecord[]>([]);

  const snippet  = rounds[current];
  const revealed = picked !== null;
  const isLast   = current + 1 >= ROUNDS_PER_GAME;

  const handleGuess = useCallback((isAIGuess: boolean) => {
    if (picked) return;
    const correct = isAIGuess === snippet.isAI;
    const choice: 'real' | 'fake' = isAIGuess ? 'fake' : 'real';
    setPicked(choice);
    if (correct) setScore((s) => s + 1);
    setAnswers((a) => [...a, { name: author.name, isAI: snippet.isAI, correct }]);
  }, [picked, snippet, author.name]);

  const handleNext = useCallback(() => {
    if (isLast) { setDone(true); }
    else { setCurrent((c) => c + 1); setPicked(null); }
  }, [isLast]);

  const handleRestart = useCallback(() => {
    setCurrent(0); setScore(0); setPicked(null); setDone(false);
    setAnswers([]); setReplayCount((c) => c + 1);
  }, []);

  const rankKey =
    score === ROUNDS_PER_GAME ? 'perfect' :
    score === 4               ? 'excellent' :
    score === 3               ? 'good' :
    score === 2               ? 'fair' :
    score === 1               ? 'poor' : 'terrible';

  const scoreLabel =
    rankKey === 'perfect'   ? tr('perfect') :
    rankKey === 'excellent' ? tr('excellent') :
    rankKey === 'good'      ? tr('good') :
    rankKey === 'fair'      ? tr('fair') :
    rankKey === 'poor'      ? tr('poor') :
                              tr('terrible');

  const correctChoice: 'real' | 'fake' = snippet?.isAI ? 'fake' : 'real';

  const cls = (which: 'real' | 'fake') => {
    let c = 'choice';
    if (revealed) {
      if (which === correctChoice) c += ' is-correct';
      else if (which === picked)   c += ' is-wrong';
    }
    return c;
  };

  /* ─── Results screen ─── */
  if (done) {
    return (
      <div className="page stack" style={{ '--gap': '16px' } as React.CSSProperties}>
        <div>
          <div className="meta-bar">
            <span>Final Edition</span>
            <span className="ornament"><i /><i /><i /></span>
            <span>{tr('title')}</span>
          </div>
          <hr className="rule-double" />
        </div>

        <p className="kicker" style={{ marginTop: 2 }}>{tr('title')}</p>
        <div className="bigscore">{score}<small>/{ROUNDS_PER_GAME}</small></div>

        <div>
          <hr className="rule-thin" />
          <h2 className="rank">{scoreLabel}</h2>
          <hr className="rule-thin" />
        </div>

        <p className="rank-blurb">{RANK_BLURBS[rankKey]}</p>

        <div>
          <p className="kicker" style={{ textAlign: 'left', marginBottom: 8 }}>{tr('proofs')}</p>
          <div className="scorecard">
            {answers.map((a, i) => (
              <div className="score-row" key={i}>
                <span className={`mark ${a.correct ? 'ok' : 'no'}`}>{a.correct ? '✓' : '✗'}</span>
                <span className="who">{a.name}</span>
                <span className="what">{a.isAI ? t('btnAI') : t('btnReal')}</span>
              </div>
            ))}
          </div>
        </div>

        <button className="cta" onClick={handleRestart}>
          {tr('playAgain')} <span style={{ fontWeight: 400 }}>↺</span>
        </button>
        <Link
          href="/"
          locale={locale}
          style={{
            display: 'block', textAlign: 'center', marginTop: 8,
            fontFamily: 'var(--font-display)', fontSize: 13,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: 'var(--ink-2)', textDecoration: 'none',
          }}
        >
          {tr('home')}
        </Link>
      </div>
    );
  }

  /* ─── Game screen ─── */
  return (
    <div className="page stack" style={{ '--gap': '16px' } as React.CSSProperties}>
      {/* Meta bar */}
      <div>
        <div className="meta-bar">
          <Link
            href="/" locale={locale}
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            ← {tr('home')}
          </Link>
          <span className="ornament"><i /><i /><i /></span>
          <span>{t('round')} {current + 1} / {ROUNDS_PER_GAME}</span>
        </div>
        <hr className="rule-thin" />
      </div>

      {/* Pips */}
      <div className="pips">
        {Array.from({ length: ROUNDS_PER_GAME }).map((_, i) => (
          <span
            key={i}
            className={`pip${i < current ? ' on' : i === current ? ' cur' : ''}`}
          />
        ))}
      </div>

      {/* Author */}
      <div>
        <p className="kicker">{t('authorLabel')}</p>
        <h2 className="author-name">{author.name}</h2>
      </div>

      {/* Passage */}
      <div className="clipping">
        <p className="passage">{snippet.text}</p>
      </div>

      {/* Pre-reveal */}
      {!revealed && (
        <>
          <p className="prompt">{t('question')}</p>
          <div className="choices">
            <button className={cls('real')} onClick={() => handleGuess(false)}>
              <span className="main">{t('btnReal')}</span>
              <span className="sub">{t('btnRealSub')}</span>
            </button>
            <button className={cls('fake')} onClick={() => handleGuess(true)}>
              <span className="main">{t('btnAI')}</span>
              <span className="sub">{t('btnAISub')}</span>
            </button>
          </div>
        </>
      )}

      {/* Post-reveal */}
      {revealed && (
        <>
          <div className="choices">
            <button className={cls('real')} disabled>
              <span className="main">{t('btnReal')}</span>
              <span className="sub">{t('btnRealSub')}</span>
            </button>
            <button className={cls('fake')} disabled>
              <span className="main">{t('btnAI')}</span>
              <span className="sub">{t('btnAISub')}</span>
            </button>
          </div>

          <hr className="rule-thin" />

          <div className="verdict stack" style={{ '--gap': '6px' } as React.CSSProperties}>
            <div className={`rubber${picked === correctChoice ? ' good' : ''}`}>
              {picked === correctChoice ? t('correct') : t('wrong')}
            </div>
            <p className="verdict-line">{snippet.isAI ? t('wasAI') : t('wasReal')}</p>
            {!snippet.isAI && snippet.source && (
              <p className="source-line">{snippet.source}</p>
            )}
          </div>

          <div className="hint-box">
            <strong>{t('hint')}</strong> {snippet.hint}
          </div>

          <button className="cta" onClick={handleNext}>
            {isLast ? t('finish') : t('next')} <span style={{ fontWeight: 400 }}>→</span>
          </button>
        </>
      )}
    </div>
  );
}
