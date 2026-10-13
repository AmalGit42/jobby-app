import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BiLinkExternal} from 'react-icons/bi'
import Header from '../Header'
import {
  JobDetailsRouteContainer,
  JobDetailsCard,
  JobHeaderContainer,
  CompanyLogo,
  JobTitleContainer,
  JobTitle,
  RatingContainer,
  RatingText,
  JobDetailsContainer,
  LocationContainer,
  PackageText,
  HrLine,
  JobDescriptionHeadingContainer,
  JobDescriptionHeading,
  VisitLink,
  JobDescription,
  SkillsHeading,
  SkillsList,
  SkillItem,
  SkillImage,
  SkillName,
  LifeAtCompanyContainer,
  LifeAtCompanyDescription,
  LifeAtCompanyImage,
  SimilarJobsHeading,
  SimilarJobsList,
  SimilarJobItem,
  SimilarJobHeader,
  SimilarCompanyLogo,
  SimilarJobTitleContainer,
  SimilarJobTitle,
  SimilarJobDescription,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class JobItemDetails extends Component {
  state = {
    jobData: {},
    similarJobsList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getJobItemDetails()
  }

  getJobItemDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const {match} = this.props
    const {params} = match
    const {id} = params
    const jwtToken = Cookies.get('jwt_token')
    const url = `https://apis.ccbp.in/jobs/${id}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedJobData = {
        companyLogoUrl: data.job_details.company_logo_url,
        companyWebsiteUrl: data.job_details.company_website_url,
        employmentType: data.job_details.employment_type,
        id: data.job_details.id,
        jobDescription: data.job_details.job_description,
        skills: data.job_details.skills.map(each => ({
          imageUrl: each.image_url,
          name: each.name,
        })),
        lifeAtCompany: {
          description: data.job_details.life_at_company.description,
          imageUrl: data.job_details.life_at_company.image_url,
        },
        location: data.job_details.location,
        packagePerAnnum: data.job_details.package_per_annum,
        rating: data.job_details.rating,
        title: data.job_details.title,
      }
      const formattedSimilarJobs = data.similar_jobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        rating: each.rating,
        title: each.title,
      }))
      this.setState({
        jobData: formattedJobData,
        similarJobsList: formattedSimilarJobs,
        apiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  renderJobDetailsSuccessView = () => {
    const {jobData, similarJobsList} = this.state
    const {
      companyLogoUrl,
      companyWebsiteUrl,
      employmentType,
      jobDescription,
      skills,
      lifeAtCompany,
      location,
      packagePerAnnum,
      rating,
      title,
    } = jobData

    return (
      <>
        <JobDetailsCard>
          <JobHeaderContainer>
            <CompanyLogo src={companyLogoUrl} alt="job details company logo" />
            <JobTitleContainer>
              <JobTitle>{title}</JobTitle>
              <RatingContainer>
                <RatingText>{rating}</RatingText>
              </RatingContainer>
            </JobTitleContainer>
          </JobHeaderContainer>
          <JobDetailsContainer>
            <LocationContainer>
              <p>{location}</p>
              <p>{employmentType}</p>
            </LocationContainer>
            <PackageText>{packagePerAnnum}</PackageText>
          </JobDetailsContainer>
          <HrLine />
          <JobDescriptionHeadingContainer>
            <JobDescriptionHeading>Description</JobDescriptionHeading>
            <VisitLink
              href={companyWebsiteUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit <BiLinkExternal />
            </VisitLink>
          </JobDescriptionHeadingContainer>
          <JobDescription>{jobDescription}</JobDescription>
          <SkillsHeading>Skills</SkillsHeading>
          <SkillsList>
            {skills.map(each => (
              <SkillItem key={each.name}>
                <SkillImage src={each.imageUrl} alt={each.name} />
                <SkillName>{each.name}</SkillName>
              </SkillItem>
            ))}
          </SkillsList>
          <SkillsHeading>Life at Company</SkillsHeading>
          <LifeAtCompanyContainer>
            <LifeAtCompanyDescription>
              {lifeAtCompany.description}
            </LifeAtCompanyDescription>
            <LifeAtCompanyImage
              src={lifeAtCompany.imageUrl}
              alt="life at company"
            />
          </LifeAtCompanyContainer>
        </JobDetailsCard>
        <SimilarJobsHeading>Similar Jobs</SimilarJobsHeading>
        <SimilarJobsList>
          {similarJobsList.map(each => (
            <SimilarJobItem key={each.id}>
              <SimilarJobHeader>
                <SimilarCompanyLogo
                  src={each.companyLogoUrl}
                  alt="similar job company logo"
                />
                <SimilarJobTitleContainer>
                  <SimilarJobTitle>{each.title}</SimilarJobTitle>
                  <RatingText>{each.rating}</RatingText>
                </SimilarJobTitleContainer>
              </SimilarJobHeader>
              <JobDescriptionHeading>Description</JobDescriptionHeading>
              <SimilarJobDescription>
                {each.jobDescription}
              </SimilarJobDescription>
              <LocationContainer>
                <p>{each.location}</p>
                <p>{each.employmentType}</p>
              </LocationContainer>
            </SimilarJobItem>
          ))}
        </SimilarJobsList>
      </>
    )
  }

  renderJobDetailsView = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderJobDetailsSuccessView()
      case apiStatusConstants.failure:
        return (
          <FailureContainer>
            <FailureImage
              src="https://assets.ccbp.in/frontend/react-js/failure-img.png"
              alt="failure view"
            />
            <FailureHeading>Oops! Something Went Wrong</FailureHeading>
            <FailureDescription>
              We cannot seem to find the page you are looking for
            </FailureDescription>
            <RetryButton type="button" onClick={this.getJobItemDetails}>
              Retry
            </RetryButton>
          </FailureContainer>
        )
      case apiStatusConstants.inProgress:
        return (
          <LoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </LoaderContainer>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <JobDetailsRouteContainer>
        <Header />
        {this.renderJobDetailsView()}
      </JobDetailsRouteContainer>
    )
  }
}

export default JobItemDetails
