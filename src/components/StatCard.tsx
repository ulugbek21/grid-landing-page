import type { Stat } from '../stats'

function StatCard({ icon, value, label, description }: Stat) {
  return (
    <li className="stat-card">
      <div className="stat-card__top">
        <img className="stat-card__icon" src={icon} alt="" width={32} height={32} />
        <p className="stat-card__value">{value}</p>
      </div>
      <div className="stat-card__bottom">
        <h2 className="stat-card__label">{label}</h2>
        <p className="stat-card__description">{description}</p>
      </div>
    </li>
  )
}

export default StatCard
