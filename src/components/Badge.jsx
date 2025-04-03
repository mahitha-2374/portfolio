import React from 'react';

const Badge = ({ text, icon, color }) => {
  return (
    <div 
      className="badge" 
      style={{
        backgroundColor: color || '#f0f0f0',
        color: color ? '#fff' : '#333',
        padding: '0.5rem 0.75rem',
        borderRadius: '4px',
        display: 'inline-flex',
        alignItems: 'center',
        gap: '0.5rem',
        margin: '0.25rem',
        fontSize: '0.875rem',
        maxWidth: '100%',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
    >
      {icon && <span className="badge-icon">{icon}</span>}
      <span className="badge-text">{text}</span>
    </div>
  );
};

export const BadgesSection = ({ badges }) => {
  return (
    <div className="badges-container" style={{
      display: 'flex',
      flexWrap: 'wrap',
      gap: '0.5rem',
      justifyContent: 'flex-start',
      maxWidth: '100%'
    }}>
      {badges.map((badge, index) => (
        <Badge key={index} {...badge} />
      ))}
    </div>
  );
};

export default Badge;
