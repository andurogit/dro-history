import Section from '../components/section'
import {
  Container,
  ListItem,
  UnorderedList,
  Tag,
  HStack
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import { Title } from '../components/worksComp'
import P from '../components/paragraph'
import { skillBadges } from '../components/skillBadges'
import type { Work } from '../lib/model'

interface WorkSectionProps {
  item: Work
  delayTime: number | string
}

// WorkSection Component
const WorkSection = ({ item, delayTime }: WorkSectionProps) => {
  const { title, year, desc, itemList, badges } = item
  return (
    <Section delay={Number(delayTime)}>
      <Layout>
        <Container>
          <Title>
            {title} <Tag>{year}</Tag>
          </Title>

          <P>{desc}</P>

          <UnorderedList ml={4} my={4}>
            {itemList.map((detail, index) => {
              return <ListItem key={index}>{detail}</ListItem>
            })}
          </UnorderedList>
          <HStack>
            {badges.map((badgeKey, index) => (
              <div key={index}>{skillBadges[badgeKey]}</div>
            ))}
          </HStack>
        </Container>
      </Layout>
    </Section>
  )
}

export default WorkSection
