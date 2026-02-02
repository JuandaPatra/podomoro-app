import styles from '../styles/Glass.module.css';

const Timer = ({ timeLeft, initialTime }) => {
  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const radius = 120;
  const circumference = 2 * Math.PI * radius;
  // Prevent division by zero if initialTime is 0, though unlikely with defaults
  const progress = initialTime > 0 ? timeLeft / initialTime : 0;
  const dashoffset = circumference - progress * circumference;

  return (
    <div className={`relative flex items-center justify-center ${styles.glass}`} style={{ width: '320px', height: '320px', borderRadius: '50%' }}>
      {/* SVG Circle */}
      <svg className="absolute w-full h-full" viewBox="0 0 300 300" style={{ transform: 'rotate(-90deg) scaleY(-1)' }}>
        <circle
          cx="150"
          cy="150"
          r={radius}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="8"
          fill="transparent"
        />
        <circle
          cx="150"
          cy="150"
          r={radius}
          stroke="var(--accent-primary)"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 1s linear' }}
        />
      </svg>
      <div className="text-7xl font-bold font-mono z-10" style={{ textShadow: '0 0 20px rgba(255,255,255,0.5)' }}>
        {formatTime(timeLeft)}
      </div>
    </div>
  );
};

export default Timer;
