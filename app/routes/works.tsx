import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import workData from '../data/workData'
import WorkSection from '../components/workSection'
import type { Work } from '../lib/model'

export default function Works() {
  return (
    <Layout>
      <Container>
        <Heading as="h3" fontSize={20} mb={4}>
          Works
        </Heading>

        <SimpleGrid columns={[1, 1, 1]} gap={6}>
          {workData.map((item: Work, index: number) => {
            let delaypatch = index / 10
            return (
              <WorkSection key={index} item={item} delayTime={delaypatch} />
            )
          })}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}
