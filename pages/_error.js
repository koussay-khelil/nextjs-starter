import Layout from '../components/Layout'


export default ({statusCode}) => (
    <Layout title='error'>
        {statusCode ? `Could not load data status code ${statusCode}` : `Couldn't get that page Sorry` }
    </Layout>
)