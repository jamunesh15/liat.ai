export default function LoadingScreen() {
  return (
    <div style={{
      width: '100vw',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: '#0a0a0a',
      color: '#c9a84c',
      fontFamily: 'var(--font-display)',
      fontSize: '1.5rem',
      flexDirection: 'column',
      gap: '20px'
    }}>
      <div style={{ width: '40px', height: '40px', border: '2px solid rgba(201,168,76,0.3)', borderTopColor: '#c9a84c', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <style>{`
        @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
      `}</style>
      <div style={{ letterSpacing: '4px', textTransform: 'uppercase', fontSize: '0.8rem', fontFamily: 'var(--font-body)' }}>Loading Experience</div>
    </div>
  );
}
