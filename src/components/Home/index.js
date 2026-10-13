import {Link} from 'react-router-dom'
import Header from '../Header'
import {
  HomeContainer,
  HomeContent,
  Heading,
  Description,
  FindJobsButton,
} from './styledComponents'

const Home = () => (
  <HomeContainer>
    <Header />
    <HomeContent>
      <Heading>Find The Job That Fits Your Life</Heading>
      <Description>
        Millions of people are searching for jobs, salary information, company
        reviews. Find the job that fits your abilities and potential.
      </Description>
      <Link to="/jobs">
        <FindJobsButton type="button">Find Jobs</FindJobsButton>
      </Link>
    </HomeContent>
  </HomeContainer>
)

export default Home
