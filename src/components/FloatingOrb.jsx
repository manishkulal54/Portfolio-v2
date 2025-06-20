export default function FloatingOrb({ size, color, duration, delay, x, y }) {
  return (
    <div
      className={`floating-orb absolute rounded-full opacity-20 blur-xl animate-pulse`}
      style={{
        width: size,
        height: size,
        background: `radial-gradient(circle, ${color} 0%, transparent 70%)`,
        left: x,
        top: y,
        animationDuration: duration,
        animationDelay: delay,
      }}
    />
  );
}
