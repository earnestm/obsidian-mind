'use client';

import { useState, useCallback, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import type { Author, Snippet, GuessResult } from '@/types/game';
import { ROUNDS_PER_GAME } from '@/types/game';
import { Link } from '@/i18n/navigation';
import type { Locale } from '@/types/game';

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
  const ai = shuffle(author.snippets.filter((s) => s.isAI));
  const half = Math.floor(ROUNDS_PER_GAME / 2);
  return shuffle([...real.slice(0, half), ...ai.slice(0, ROUNDS_PER_GAME - half)]);
}

interface Props {
  author: Author;
  locale: Locale;
}

export default function GameBoard({ author, locale }: Props) {
  const t = useTranslations('game');
  const tr = useTranslations('results');

  const rounds = useMemo(() => pickRounds(author), [author]);
  const [current, setCurrent] = useState(0);
  const [guess, setGuess] = useState<GuessResult>(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);

  const snippet = rounds[current];
  const revealed = guess !== null;

  const handleGuess = useCallback(
    (isAIGuess: boolean) => {
      if (revealed) return;
      const correct = isAIGuess === snippet.isAI;
      setGuess(correct ? 'correct' : 'wrong');
      if (correct) setScore((s) => s + 1);
    },
    [revealed, snippet],
  );

  const handleNext = useCallback(() => {
    if (current + 1 >= ROUNDS_PER_GAME) {
      setDone(true);
    } else {
      setCurrent((c) => c + 1);
      setGuess(null);
    }
  }, [current]);

  const handleRestart = useCallback(() => {
    setCurrent(0);
    setScore(0);
    setGuess(null);
    setDone(false);
  }, []);

  const percentage = Math.round((score / ROUNDS_PER_GAME) * 100);
  const homeLabel = tr('home');

  const scoreLabel =
    percentage === 100
      ? tr('perfect')
      : percentage >= 80
        ? tr('excellent')
        : percentage >= 60
          ? tr('good')
          : percentage >= 40
            ? tr('fair')
            : tr('poor');

  if (done) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen px-4 animate-fade-in">
        <div className="w-full max-w-lg text-center">
          <p className="text-stone-500 text-sm uppercase tracking-widest mb-4">{tr('title')}</p>
          <div className="text-8xl font-serif font-semibold text-amber-400 mb-2">
            {score}
            <span className="text-4xl text-stone-500">/{ROUNDS_PER_GAME}</span>
          </div>
          <p className="text-stone-400 text-lg mb-1">
            {score} {tr('outOf')} {ROUNDS_PER_GAME} {tr('rounds')}
          </p>
          <p className="text-white text-xl mt-6 mb-10 font-serif italic">{scoreLabel}</p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={handleRestart}
              className="px-6 py-3 rounded-lg bg-amber-700 hover:bg-amber-600 text-white font-medium transition-colors"
            >
              {tr('playAgain')}
            </button>
            <Link
              href="/"
              locale={locale}
              className="px-6 py-3 rounded-lg bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium transition-colors text-center"
            >
              {homeLabel}
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen px-4 py-8">
      {/* Header */}
      <div className="w-full max-w-2xl mb-6">
        <div className="flex items-center justify-between mb-4">
          <Link
            href="/"
            locale={locale}
            className="text-stone-600 hover:text-stone-300 text-sm transition-colors"
          >
            ← {homeLabel}
          </Link>
          <span className="text-stone-600 text-sm">
            {t('round')} {current + 1} {t('of')} {ROUNDS_PER_GAME}
          </span>
        </div>

        {/* Progress bar */}
        <div className="flex gap-1.5">
          {Array.from({ length: ROUNDS_PER_GAME }).map((_, i) => (
            <div
              key={i}
              className={`h-1 flex-1 rounded-full transition-colors duration-300 ${
                i < current
                  ? 'bg-amber-600'
                  : i === current
                    ? 'bg-stone-400'
                    : 'bg-stone-800'
              }`}
            />
          ))}
        </div>
      </div>

      {/* Author badge */}
      <div className="mb-5 text-center">
        <p className="text-stone-600 text-xs uppercase tracking-widest">{t('authorLabel')}</p>
        <p className="text-amber-400 text-xl font-serif italic mt-1">{author.name}</p>
      </div>

      {/* Text card */}
      <div
        className={`w-full max-w-2xl text-card paper-texture rounded-xl p-8 mb-6 transition-all duration-500 ${
          revealed
            ? guess === 'correct'
              ? 'reveal-correct'
              : 'reveal-wrong'
            : ''
        }`}
      >
        <p className="font-serif text-lg leading-relaxed text-stone-100">{snippet.text}</p>

        {/* Reveal */}
        {revealed && (
          <div className="mt-6 pt-5 border-t border-stone-700/60 animate-reveal">
            <div className="flex items-start gap-3 mb-3">
              <span
                className={`shrink-0 text-xs font-semibold px-2 py-1 rounded ${
                  guess === 'correct'
                    ? 'bg-amber-900/50 text-amber-400'
                    : 'bg-red-900/40 text-red-400'
                }`}
              >
                {guess === 'correct' ? t('correct') : t('wrong')}
              </span>
              <p className="text-stone-400 text-sm leading-snug">
                {snippet.isAI ? (
                  t('wasAI')
                ) : (
                  <>
                    {t('wasReal')} <em className="text-stone-300">{snippet.source}</em>
                  </>
                )}
              </p>
            </div>
            <p className="text-stone-500 text-sm leading-relaxed">
              <span className="text-stone-400 font-medium">{t('hint')}</span>{' '}
              {snippet.hint}
            </p>
          </div>
        )}
      </div>

      {/* Action buttons */}
      {!revealed ? (
        <div className="flex gap-4 w-full max-w-2xl">
          <button
            onClick={() => handleGuess(false)}
            className="flex-1 py-4 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/70 border border-emerald-900/60 hover:border-emerald-700 text-emerald-400 font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t('btnReal')}
          </button>
          <button
            onClick={() => handleGuess(true)}
            className="flex-1 py-4 rounded-xl bg-red-950/40 hover:bg-red-900/50 border border-red-900/50 hover:border-red-700 text-red-400 font-semibold text-sm uppercase tracking-wide transition-all duration-200 hover:scale-[1.02] active:scale-[0.98]"
          >
            {t('btnAI')}
          </button>
        </div>
      ) : (
        <button
          onClick={handleNext}
          className="w-full max-w-2xl py-4 rounded-xl bg-stone-800 hover:bg-stone-700 text-stone-200 font-medium transition-colors duration-200"
        >
          {current + 1 >= ROUNDS_PER_GAME ? t('finish') : t('next')} →
        </button>
      )}

      {/* Running score */}
      <div className="mt-6 text-stone-700 text-xs">
        {score}/{current + (revealed ? 1 : 0)} correct
      </div>
    </div>
  );
}
