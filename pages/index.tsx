import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import { GetStaticProps } from 'next'

export default function Home({
  allPostsData
}: {
  allPostsData: {
    date: string
    title: string
    id: string
  }[]
}) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          I'm a software engineer interested in building delightful user experiences and futuristic technology.
          You can contact me on{' '}
          <a href="https://discord.com/users/219219995471642635">Discord</a> or{' '}
          email <b>contact@wires.dev</b>, and find me on{' '}
          <a href="https://twitter.com/wiresdev">Twitter</a> or{' '}
          <a href="https://github.com/wiresdev">GitHub</a>.
          </p>
        <p>
          Currently @{' '}
          <a href="https://amazon.com">Amazon</a>.
        </p>
        <p>
          Previously: {' '}
          <a href="https://intel.com">Intel</a>,{' '}
          <a href="https://aerospace.org">The Aerospace Corporation</a>.
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Posts</h2>
        <ul className={utilStyles.list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className={utilStyles.lightText}>
              <Date dateString={date} />
            </small>
          </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}