import { RotateCcw, X } from 'lucide-react';
import styles from '../styles/Glass.module.css';

const CompletionModal = ({ isOpen, onClose, onReset }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className={`${styles.glass} p-8 relative max-w-sm w-full flex flex-col items-center gap-6 animate-in zoom-in-95 duration-300 mx-4 border-[var(--accent-primary)] border-2`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition">
            <X size={24} />
        </button>
        
        <div className="w-20 h-20 bg-[var(--accent-primary)] rounded-full flex items-center justify-center shadow-[0_0_30px_var(--accent-glow)] animate-bounce">
            <span className="text-4xl">🍅</span>
        </div>

        <div className="text-center space-y-2">
            <h2 className="text-3xl font-bold text-white">Time's Up!</h2>
            <p className="text-white/70">Great job on completing your session.</p>
        </div>

        <button
            onClick={onReset}
            className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] font-bold shadow-lg hover:shadow-[var(--accent-glow)] hover:opacity-90 transition-all active:scale-[0.98]"
        >
            <RotateCcw size={20} />
            Start New Session
        </button>
      </div>
    </div>
  );
};

export default CompletionModal;
