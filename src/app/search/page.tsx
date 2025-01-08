import React, { ReactElement } from 'react'
import styles from './search.module.css'
export default function page (): ReactElement {
  return (
    <div className={styles.container}>
     <aside className={styles.filters}>
      <p>فیلتر</p>
     </aside>
     <section className={styles.result}>
      <p>اطلاعات پزشکان</p>
     </section>
    </div>
  )
}
