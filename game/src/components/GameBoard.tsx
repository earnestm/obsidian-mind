'use client';

import { useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { Author, Snippet, GuessResult } from '@/types/game';
import { ROUNDS_PER_GAME } from '@/types/game';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types/game';
import Image from 'next/image';

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
  const half = Math.floor(ROUNDS_PER_GAME / 2);
  return shuffle([...real.slice(0, half), ...ai.slice(0, ROUNDS_PER_GAME - half)]);
}

interface Props {
  author: Author;
  locale: Locale;
}

export default function GameBoard({ author, locale }: Props) {
  const t  = useTranslations('game');
  const tr = useTranslations('results');

  const rounds = useMemo(() => pickRounds(author), [author]);
  const [current, setCurrent]   = useState(0);
  const [guess, setGuess]       = useState<GuessResult>(null);
  const [score, setScore]       = useState(0);
  const [done, setDone]         = useState(false);

  const snippet  = rounds[current];
  const revealed = guess !== null;
  const homeLabel = tr('home');

  const handleGuess = useCallback((isAIGuess: boolean) => {
    if (revealed) return;
    const correct = isAIGuess === snippet.isAI;
    setGuess(correct ? 'correct' : 'wrong');
    if (correct) setScore((s) => s + 1);
  }, [revealed, snippet]);

  const handleNext = useCallback(() => {
    if (current + 1 >= ROUNDS_PER_GAME) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setGuess(null);
    }
  }, [current]);

  const handleRestart = useCallback(() => {
    setCurrent(0); setScore(0); setGuess(null); setDone(false);
  }, []);

  const pct = Math.round((score / ROUNDS_PER_GAME) * 100);
  const scoreLabel =
    pct === 100 ? tr('perfect') :
    pct >= 80   ? tr('excellent') :
    pct >= 60   ? tr('good') :
    pct >= 40   ? tr('fair') :
                  tr('poor');

  /* ─── Results screen ─── */
  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in">
        <div className="w-full max-w-lg text-center border-t-4 border-b-4 border-paper-950 py-12">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-paper-600 mb-6">
            {tr('title')}
          </p>
          <div className="font-display font-black text-[7rem] leading-none text-paper-950 mb-2">
            {score}
            <span className="text-4xl text-paper-500 font-normal">/{ROUNDS_PER_GAME}</span>
          </div>
          <p className="font-serif text-lg text-paper-700 mb-2">
            {score} {tr('outOf')} {ROUNDS_PER_GAME} {tr('rounds')}
          </p>
          <p className="font-serif italic text-xl text-paper-900 mt-6 mb-10">{scoreLabel}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-8 py-3 border-2 border-paper-950 bg-paper-950 text-paper-100 font-display font-bold uppercase tracking-widest text-sm hover:bg-paper-800 transition-colors"
            >
              {tr('playAgain')}
            </button>
            <Link
              href="/"
              locale={locale}
              className="px-8 py-3 border-2 border-paper-950 text-paper-950 font-display font-bold uppercase tracking-widest text-sm text-center hover:bg-paper-950 hover:text-paper-100 transition-colors"
            >
              {homeLabel}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  /* ─── Game screen ─── */
  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8">

      {/* Nav bar */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-center justify-between mb-4 rule-single pt-2">
          <Link
            href="/"
            locale={locale}
            className="font-display text-xs uppercase tracking-widest text-paper-600 hover:text-paper-950 transition-colors"
          >
            ← {homeLabel}
          </Link>
          <span className="font-display text-xs uppercase tracking-widest text-paper-600">
            {t('round')} {current + 1} / {ROUNDS_PER_GAME}
          </span>
        </div>

        {/* Progress — thin rules */}
        <div className="flex gap-1">
          {Array.from({ length: ROUNDS_PER_GAME }).map((_, i) => (
            <div
              key={i}
              className={`h-0.5 flex-1 transition-colors duration-300 ${
                i < current        ? 'bg-paper-950' :
                i === current      ? 'bg-paper-600' :
                                     'bg-paper-300'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Author nameplate */}
      <div className="w-full max-w-2xl mb-5 text-center border-t-4 border-b border-paper-950 py-3">
        <p className="font-display text-[0.6rem] uppercase tracking-[0.4em] text-paper-600 mb-1">
          {t('authorLabel')}
        </p>
        <h2 className="font-display font-black text-3xl sm:text-4xl text-paper-950 tracking-tight leading-none uppercase">
          {author.name}
        </h2>
        <p className="font-serif italic text-sm text-paper-600 mt-1">{author.knownFor}</p>
      </div>

      {/* Text card */}
      <div
        className={`w-full max-w-2xl text-card p-8 mb-6 transition-all duration-400 ${
          revealed
            ? guess === 'correct' ? 'reveal-correct' : 'reveal-wrong'
            : ''
        }`}
      >
        {/* Decorative column rule */}
        <div className="rule-double mb-4" />

        <p className="font-serif text-lg leading-relaxed text-paper-950">
          {snippet.text}
        </p>

        {/* Reveal section */}
        {revealed && (
          <div className="mt-6 pt-5 border-t border-paper-400 animate-reveal">
            <div className="flex items-start gap-3 mb-3">
              <span className={`shrink-0 font-display font-bold text-xs uppercase tracking-wider px-2 py-1 border ${
                guess === 'correct'
                  ? 'border-paper-700 text-paper-800 bg-paper-100'
                  : 'border-red-800 text-red-800 bg-red-50'
              }`}>
                {guess === 'correct' ? t('correct') : t('wrong')}
              </span>
              <p className="font-serif text-sm text-paper-700 leading-snug">
                {snippet.isAI ? (
                  <span className="italic">{t('wasAI')}</span>
                ) : (
                  <>{t('wasReal')} <em className="text-paper-950">{snippet.source}</em></>
                )}
              </p>
            </div>
            <div className="dashed-box mt-3">
              <p className="font-serif text-sm text-paper-800 leading-relaxed">
                <span className="font-bold not-italic">{t('hint')}</span>{' '}
                {snippet.hint}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Buttons */}
      {!revealed ? (
        <div className="flex gap-4 w-full max-w-2xl">
          <button
            onClick={() => handleGuess(false)}
            className="flex-1 py-4 border-2 border-paper-950 bg-paper-light text-paper-950 font-display font-black text-xs uppercase tracking-widest hover:bg-paper-950 hover:text-paper-100 transition-all duration-200 active:scale-[0.98]"
          >
            {t('btnReal')}
          </button>
          <button
            onClick={() => handleGuess(true)}
            className="flex-1 py-4 border-2 border-paper-950 bg-paper-950 text-paper-100 font-display font-black text-xs uppercase tracking-widest hover:bg-paper-800 transition-all duration-200 active:scale-[0.98]"
          >
            {t('btnAI')}
          </button>
        </div>
      ) : (
        <button
          onClick={handleNext}
          className="w-full max-w-2xl py-4 border-2 border-paper-950 text-paper-950 font-display font-bold uppercase tracking-widest text-sm hover:bg-paper-950 hover:text-paper-100 transition-colors"
        >
          {current + 1 >= ROUNDS_PER_GAME ? t('finish') : t('next')} →
        </button>
      )}

      {/* Score ticker */}
      <div className="mt-6 font-display text-xs uppercase tracking-widest text-paper-500">
        {score} / {current + (revealed ? 1 : 0)} {tr('rounds')}
      </div>
    </div>
  );
}
