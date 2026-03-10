import { getPostData } from '../lib/postUtils.server'
import { Box, Container, Heading } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import type { Route } from "./+types/posts.$id";

export async function loader({ params }: Route.LoaderArgs) {
  const postData = (await getPostData(params.id)) as any
  return { postData }
}

export function meta({ data }: Route.MetaArgs) {
  if (!data) return [{ title: "Dro's Posts" }];
  return [{ title: `${data.postData.title} - Dro's Posts` }];
}

export default function PostPage({ loaderData }: Route.ComponentProps) {
  const { postData } = loaderData
  return (
    <Layout>
      <Container maxW="container.md">
        <Heading as="h3" fontSize={20} mb={4}>
          {postData.title}
        </Heading>
        <Box p={4} dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></Box>
      </Container>
    </Layout>
  )
}
