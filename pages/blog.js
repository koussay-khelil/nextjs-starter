import Layout from '../components/Layout'
import Link from 'next/link'

const PostLink = ({title, slug}) => (
    <li>
    <Link as={`/${slug}`} href={`/post?title=${title}`}><a>{title}</a></Link>
    </li>
)


export default () => (
    <Layout title='My Blog'>
        <ul>
        <PostLink slug="react-post" title='React'/>
        <PostLink slug="angular-post" title='Angular'/>
        <PostLink slug="redux-post" title='Redux'/>
        </ul> 
        <style jsx>{`
        ul {
          color: blue;
        }
      `}</style>
    </Layout>
)