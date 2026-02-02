'use client';

import { useState } from 'react';
import Timer from '@/components/Timer';
import Controls from '@/components/Controls';
import SettingsModal from '@/components/SettingsModal';
import { useTimer } from '@/hooks/useTimer';

export default function Home() {
  const { timeLeft, isRunning, start, pause, reset, setDuration, initialTime } = useTimer(25);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative p-8">
      {/* Background decorations */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[var(--accent-secondary)] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[var(--accent-primary)] rounded-full blur-[120px] opacity-30 animate-pulse"></div>
      </div>

      <div className="absolute top-12 left-0 w-full text-center">
          <h1 className="text-xl font-bold tracking-[0.5em] uppercase opacity-40 text-center">Pomodoro</h1>
      </div>

      <Timer timeLeft={timeLeft} initialTime={initialTime} /> 
      
      <Controls
        isRunning={isRunning}
        onStart={start}
        onPause={pause}
        onReset={reset}
        onSettings={() => setIsSettingsOpen(true)}
      />

      <SettingsModal
        isOpen={isSettingsOpen}
        onClose={() => setIsSettingsOpen(false)}
        onSave={setDuration}
        currentDuration={initialTime}
      />
    </main>
  );
}
