import Layout from '../components/Layout'


export default ({statusCode}) => (
    <Layout title='error'>
        {statusCode ? `Could not load data the status code is ${statusCode}` : `Couldn't get that page Sorry` }
    </Layout>
)