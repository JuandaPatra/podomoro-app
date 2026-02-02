import { Play, Pause, RotateCcw, Settings } from 'lucide-react';
import styles from '../styles/Glass.module.css';

const Controls = ({ isRunning, onStart, onPause, onReset, onSettings }) => {
  return (
    <div className={`flex gap-6 mt-12 ${styles.glass} p-4`} style={{ borderRadius: '100px' }}>
      <button 
        onClick={isRunning ? onPause : onStart} 
        className="p-4 rounded-full hover:bg-white/10 transition-all active:scale-95"
        title={isRunning ? "Pause" : "Start"}
      >
        {isRunning ? <Pause size={32} color="#fff" fill="#fff" /> : <Play size={32} color="#fff" fill="#fff" />}
      </button>
      <button 
        onClick={onReset} 
        className="p-4 rounded-full hover:bg-white/10 transition-all active:scale-95"
        title="Reset"
      >
        <RotateCcw size={32} color="#fff" />
      </button>
      <button 
        onClick={onSettings} 
        className="p-4 rounded-full hover:bg-white/10 transition-all active:scale-95"
        title="Settings"
      >
        <Settings size={32} color="#fff" />
      </button>
    </div>
  );
};

export default Controls;
