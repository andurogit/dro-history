import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { getSortedPostsData } from '../lib/postUtils.server'
import { PostItem } from '../components/post-item'
import type { Route } from "./+types/posts";

export async function loader() {
  const allPostsData = getSortedPostsData()
  return { allPostsData }
}

export default function Posts({ loaderData }: Route.ComponentProps) {
  const { allPostsData } = loaderData
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Posts
        </Heading>
        <Section delay={0.1}>
          <SimpleGrid columns={[1, 2, 2]} gap={6}>
            {allPostsData.map(({ id, title, date, categories, tag }: any) => (
              <PostItem
                key={id}
                id={id}
                title={title}
                date={date}
                categories={categories}
                tags={tag}
              />
            ))}
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  )
}
