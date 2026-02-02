import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import styles from '../styles/Glass.module.css';

const SettingsModal = ({ isOpen, onClose, onSave, currentDuration }) => {
  const [minutes, setMinutes] = useState(currentDuration / 60);

  useEffect(() => {
    if (isOpen) {
        setMinutes(Math.floor(currentDuration / 60));
    }
  }, [isOpen, currentDuration]);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(Number(minutes));
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className={`${styles.glass} p-8 relative w-96 flex flex-col gap-6 animate-in zoom-in-95 duration-200`}>
        <button onClick={onClose} className="absolute top-4 right-4 text-white/50 hover:text-white transition">
            <X size={24} />
        </button>
        <h2 className="text-2xl font-bold text-center">Timer Settings</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <label className="flex flex-col gap-2">
                <span className="text-sm font-medium text-gray-300">Duration (minutes)</span>
                <input
                    type="number"
                    min="1"
                    max="180"
                    value={minutes}
                    onChange={(e) => setMinutes(e.target.value)}
                    className={styles.glassInput}
                    autoFocus
                />
            </label>
            <button
                type="submit"
                className="mt-2 py-3 rounded-xl bg-gradient-to-r from-[var(--accent-primary)] to-[var(--accent-secondary)] font-bold shadow-lg hover:shadow-[var(--accent-glow)] hover:opacity-90 transition-all active:scale-[0.98]"
            >
                Save Changes
            </button>
        </form>
      </div>
    </div>
  );
};

export default SettingsModal;
