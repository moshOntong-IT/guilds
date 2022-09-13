import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { allClubs, Club } from 'contentlayer/generated'
// import Image from 'next/image'
// import { clubAssetURL } from 'src/utils'

export default function Home({ clubs }: { clubs: Club[] }) {
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className='page-title'>Guilds</h1>

        <div className={styles.clubs}>
          {clubs.map(club => (
            <div key={club._id} className={styles.club}>
              <Link href={club.url}>
                <a className={styles.card}>
                  {/* <div 
                    className={styles.card_backdrop} 
                    style={club.assets && club.assets.cover_photo 
                      ? {backgroundImage: `url(${clubAssetURL(club, 'cover_photo')})`} 
                      : {}}
                    ></div> */}

                  <div className={styles.card_header}>
                    {/* {(club.assets && club.assets.logo) && (
                      <div className={styles.club_logo}>
                        <Image
                          src={clubAssetURL(club, 'logo')}
                          alt={`${club.name} logo`}
                          layout="responsive"
                          height={300}
                          width={300} />
                      </div>
                    )} */}

                    <h2>{club.name}</h2>
                    <p>{club.description?.short ?? ''}</p>
                  </div>
                </a>
              </Link>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  return {
    props: {
      clubs: allClubs
    }
  }
}