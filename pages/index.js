import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

function generateSchedule() {
  let weekday = ['M', 'T', 'W', 'R', 'F'];
  let class_num = 9;
  let ret = [
    <div style={{ 'grid-area': 'dummy', 'border-right': '#eaeaea 2px solid', 'border-bottom': '#eaeaea 2px solid' }}></div>
  ];

  // generate class index
  for (let class_ = 1; class_ <= class_num; class_++) {
    let name = `C${class_}`;
    let style = {
      'grid-area': name,
      'border-right': '#eaeaea 2px solid',
      'border-bottom': '#eaeaea 2px solid',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
    ret.push(
      <div className={name} style={style}>{class_}</div>
    )
  }

  for (let day = 0; day < weekday.length; day++) {
    // generate day
    let style = {
      'grid-area': weekday[day],
      'border-right': '#eaeaea 2px solid',
      'border-bottom': '#eaeaea 2px solid',
      'display': 'flex',
      'justify-content': 'center',
      'align-items': 'center'
    }
    ret.push(
      <div className={weekday[day]} style={style}>
        {`${weekday[day]}.`}
      </div>
    )

    // generate classes
    let classes = [];
    for (let class_ = 1; class_ <= class_num; class_++) {
      let name = `${weekday[day]}${class_}`;
      let style = {
        'grid-area': name,
        'border-right': '#eaeaea 2px solid',
        'border-bottom': '#eaeaea 2px solid',
        'display': 'flex',
        'justify-content': 'center',
        'align-items': 'center'
      }
      ret.push(
        <div className={name} style={style}>{name}</div>
      )
    }
  }

  return ret;
}

export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.base}>
        <nav className={styles.headbar}>
          <Link href="" >
            <a className={styles.headbar_home}>Nthu+</a>
          </Link>
          <div className={styles.headbar_gap}>
            {/* this is a gap */}
          </div>
          <Link href="">
            <a className={styles.headbar_page}>Page1</a>
          </Link>
          <Link href="">
            <a className={styles.headbar_page}>Page2</a>
          </Link>
          <Link href="">
            <a className={styles.headbar_page} > Page3</a>
          </Link>
        </nav>
        <main className={styles.main}>
          <div className={styles.left}>
            <button className={styles.college}>
              Search college
            </button>
            <button className={styles.department}>
              Search department
            </button>
            <button className={styles.unit}>
              Search unit
            </button>
          </div>
          <div className={styles.right}>
            <div className={styles.schedule}>
              {generateSchedule()}
            </div>
          </div>
        </main>

        <footer className={styles.footer}>
          <a
            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Powered by{' '}
            <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
          </a>
        </footer>
      </div>
    </div>
  )
}
