import styles from "../styles/components/Profile.module.css";

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/giovannabetti.png" alt="Foto de Giovanna Betti" />
      <div>
        <strong>Giovanna Betti</strong>
        <p>
          <img src="icons/level.svg" alt="Level Icon" />
          Level 1
        </p>
      </div>
    </div>
  )
}