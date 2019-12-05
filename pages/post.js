import Layout from '../components/Layout'
import {withRouter} from 'next/router'

const Post =  ({router}) => (
    <Layout title={router.query.title}>
        <p style={{width: '80 vw'}}>this is a test</p>
        
    </Layout>
)

export default withRouter(Post) 