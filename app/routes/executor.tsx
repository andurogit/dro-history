import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  Select,
  VStack,
  useToast,
  useColorModeValue,
  Input,
  InputGroup,
  InputRightElement
} from '@chakra-ui/react'
import { useState } from 'react'
import Layout from '../components/layouts/article'
import Section from '../components/section'

export default function Executor() {
  const toast = useToast()
  const bgColor = useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')
  
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)

  const [formData, setFormData] = useState({
    year: '2026',
    month: '02',
    closing: '확정',
    interface: 'N',
    runClosing: 'N',
    forceMissing: 'N',
    build: 'N'
  })

  const handlePasswordSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // 설정하고 싶은 비밀번호를 여기에 입력하세요.
    if (password === 'dro2026') { 
      setIsAuthenticated(true)
      toast({
        title: '인증 성공',
        status: 'success',
        duration: 2000,
        isClosable: true
      })
    } else {
      toast({
        title: '비밀번호 불일치',
        description: '올바른 비밀번호를 입력해주세요.',
        status: 'error',
        duration: 2000,
        isClosable: true
      })
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async () => {
    const webhookUrl = 'https://n8n.droan.kr/webhook/4f4d2ca9-c007-481a-938c-f8cefd08b550' 
    
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
        mode: 'no-cors' 
      })

      toast({
        title: '요청 완료',
        description: '웹훅으로 데이터를 전송했습니다.',
        status: 'success',
        duration: 3000,
        isClosable: true
      })
      
      console.log('Sent data:', formData)
    } catch (error) {
      toast({
        title: '오류 발생',
        description: '웹훅 전송 중 문제가 발생했습니다.',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
      console.error(error)
    }
  }

  // 인증되지 않은 경우 비밀번호 입력 화면 표시
  if (!isAuthenticated) {
    return (
      <Layout title="Executor Login">
        <Container maxW="container.sm" pt={20}>
          <Section delay={0.1}>
            <Box
              borderRadius="lg"
              bg={bgColor}
              p={8}
              textAlign="center"
              css={{ backdropFilter: 'blur(10px)' }}
            >
              <Heading as="h3" fontSize={20} mb={6}>
                Password Required
              </Heading>
              <form onSubmit={handlePasswordSubmit}>
                <VStack spacing={4}>
                  <InputGroup size="md">
                    <Input
                      pr="4.5rem"
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <InputRightElement width="4.5rem">
                      <Button h="1.75rem" size="sm" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? 'Hide' : 'Show'}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                  <Button type="submit" colorScheme="teal" width="full">
                    Login
                  </Button>
                </VStack>
              </form>
            </Box>
          </Section>
        </Container>
      </Layout>
    )
  }

  // 인증된 경우 기존 Executor 화면 표시
  return (
    <Layout title="Executor">
      <Container maxW="container.sm">
        <Heading as="h3" fontSize={20} mb={6} mt={4} textAlign="center">
          Executor
        </Heading>

        <Section delay={0.1}>
          <Box
            borderRadius="lg"
            bg={bgColor}
            p={6}
            css={{ backdropFilter: 'blur(10px)' }}
          >
            <VStack spacing={5}>
              <FormControl>
                <FormLabel fontWeight="bold">년도</FormLabel>
                <Select name="year" value={formData.year} onChange={handleChange}>
                  <option value="2024">2024</option>
                  <option value="2025">2025</option>
                  <option value="2026">2026</option>
                  <option value="2027">2027</option>
                  <option value="2028">2028</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">월</FormLabel>
                <Select name="month" value={formData.month} onChange={handleChange}>
                  {['01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12'].map(m => (
                    <option key={m} value={m}>{m}</option>
                  ))}
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">마감</FormLabel>
                <Select name="closing" value={formData.closing} onChange={handleChange}>
                  <option value="확정">확정</option>
                  <option value="가">가</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">인터페이스</FormLabel>
                <Select name="interface" value={formData.interface} onChange={handleChange}>
                  <option value="N">N</option>
                  <option value="Y">Y</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">마감실행</FormLabel>
                <Select name="runClosing" value={formData.runClosing} onChange={handleChange}>
                  <option value="N">N</option>
                  <option value="Y">Y</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">누락강제처리</FormLabel>
                <Select name="forceMissing" value={formData.forceMissing} onChange={handleChange}>
                  <option value="N">N</option>
                  <option value="Y">Y</option>
                </Select>
              </FormControl>

              <FormControl>
                <FormLabel fontWeight="bold">빌드</FormLabel>
                <Select name="build" value={formData.build} onChange={handleChange}>
                  <option value="N">N</option>
                  <option value="Y">Y</option>
                </Select>
              </FormControl>

              <Box width="full" pt={4}>
                <Button 
                  colorScheme="teal" 
                  onClick={handleSubmit} 
                  width="full" 
                  size="lg"
                  _hover={{ transform: 'translateY(-2px)', boxShadow: 'lg' }}
                >
                  실행 및 웹훅 전송
                </Button>
              </Box>
            </VStack>
          </Box>
        </Section>
      </Container>
    </Layout>
  )
}
