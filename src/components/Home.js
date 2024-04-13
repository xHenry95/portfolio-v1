import Styles from './Home.module.css';

export default function Home() {
  return (
    <div>
        <div className={Styles.homeTitle}>
            <p className={Styles.name}>henry crompton-smith</p>
            <div className={Styles.line}></div>
            <p className={Styles.role}>frontend web developer</p>
        </div>
    </div>
  )
}
