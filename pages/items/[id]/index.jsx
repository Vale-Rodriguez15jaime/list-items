import Layout from 'components/layout'
import DetailItem from 'modules/detailItem'
import { getPost } from 'modules/listItems/actions'

const Detail = ({ data }) => {
  return (
    <Layout page="Detail">
      <DetailItem data={data} />
    </Layout>
  )
}

export async function getServerSideProps(context) {
  try {
    const { params } = context
    const id = params.id
    const data = await getPost(id)
    return {
      props: { data: data.data }
    }
  } catch (e) {
    return {
      notFound: true
    }
  }
}

export default Detail
