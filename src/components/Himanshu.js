// TeamMemberCard.jsx
import './himanshu.css';

export default function Himansu({ name, role, photo }) {
  return (
    <div className="team-card">
      <img src="/images/kunal.jpg" alt="Kunal" className="team-photo" />
      <div className="team-overlay">
        <h3>{name}</h3>
        <p>{role}</p>
      </div>
    </div>
  );
}
