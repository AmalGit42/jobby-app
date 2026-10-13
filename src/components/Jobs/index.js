/* eslint-disable */
import {Component} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import {BsSearch} from 'react-icons/bs'
import Header from '../Header'
import {
  JobsContainer,
  JobsLayout,
  FiltersContainer,
  ProfileContainer,
  ProfileLoaderContainer,
  ProfileImage,
  ProfileName,
  ProfileBio,
  ProfileFailureButton,
  HrLine,
  FilterHeading,
  CheckboxList,
  CheckboxItem,
  CheckboxInput,
  CheckboxLabel,
  RadioList,
  RadioItem,
  RadioInput,
  RadioLabel,
  SearchContainer,
  SearchInput,
  SearchButton,
  JobsListContainer,
  JobCardItem,
  JobCardLink,
  JobHeaderContainer,
  CompanyLogo,
  JobTitleContainer,
  JobTitle,
  RatingContainer,
  RatingText,
  JobDetailsContainer,
  LocationContainer,
  PackageText,
  JobDescriptionHeading,
  JobDescription,
  LoaderContainer,
  FailureContainer,
  FailureImage,
  FailureHeading,
  FailureDescription,
  RetryButton,
  NoJobsContainer,
  NoJobsImage,
  NoJobsHeading,
  NoJobsDescription,
} from './styledComponents'

const employmentTypesList = [
  {label: 'Full Time', employmentTypeId: 'FULLTIME'},
  {label: 'Part Time', employmentTypeId: 'PARTTIME'},
  {label: 'Freelance', employmentTypeId: 'FREELANCE'},
  {label: 'Internship', employmentTypeId: 'INTERNSHIP'},
]

const salaryRangesList = [
  {salaryRangeId: '1000000', label: '10 LPA and above'},
  {salaryRangeId: '2000000', label: '20 LPA and above'},
  {salaryRangeId: '3000000', label: '30 LPA and above'},
  {salaryRangeId: '4000000', label: '40 LPA and above'},
]

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'IN_PROGRESS',
}

class Jobs extends Component {
  state = {
    profileData: {},
    profileApiStatus: apiStatusConstants.initial,
    jobsList: [],
    jobsApiStatus: apiStatusConstants.initial,
    searchInput: '',
    activeEmploymentTypes: [],
    activeSalaryRange: '',
  }

  componentDidMount() {
    this.getProfileData()
    this.getJobsData()
  }

  getProfileData = async () => {
    this.setState({profileApiStatus: apiStatusConstants.inProgress})
    const jwtToken = Cookies.get('jwt_token')
    const url = 'https://apis.ccbp.in/profile'
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = {
        name: data.profile_details.name,
        profileImageUrl: data.profile_details.profile_image_url,
        shortBio: data.profile_details.short_bio,
      }
      this.setState({
        profileData: formattedData,
        profileApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({profileApiStatus: apiStatusConstants.failure})
    }
  }

  getJobsData = async () => {
    this.setState({jobsApiStatus: apiStatusConstants.inProgress})
    const {searchInput, activeEmploymentTypes, activeSalaryRange} = this.state
    const jwtToken = Cookies.get('jwt_token')
    const employmentTypesString = activeEmploymentTypes.join(',')
    const url = `https://apis.ccbp.in/jobs?employment_type=${employmentTypesString}&minimum_package=${activeSalaryRange}&search=${searchInput}`
    const options = {
      headers: {Authorization: `Bearer ${jwtToken}`},
      method: 'GET',
    }
    const response = await fetch(url, options)
    if (response.ok) {
      const data = await response.json()
      const formattedData = data.jobs.map(each => ({
        companyLogoUrl: each.company_logo_url,
        employmentType: each.employment_type,
        id: each.id,
        jobDescription: each.job_description,
        location: each.location,
        packagePerAnnum: each.package_per_annum,
        rating: each.rating,
        title: each.title,
      }))
      this.setState({
        jobsList: formattedData,
        jobsApiStatus: apiStatusConstants.success,
      })
    } else {
      this.setState({jobsApiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onEnterSearchInput = event => {
    if (event.key === 'Enter') {
      this.getJobsData()
    }
  }

  onClickSearchButton = () => {
    this.getJobsData()
  }

  onSelectEmploymentType = event => {
    const {value, checked} = event.target
    this.setState(prevState => {
      let updatedList = prevState.activeEmploymentTypes
      if (checked) {
        updatedList = [...updatedList, value]
      } else {
        updatedList = updatedList.filter(item => item !== value)
      }
      return {activeEmploymentTypes: updatedList}
    }, this.getJobsData)
  }

  onSelectSalaryRange = event => {
    this.setState({activeSalaryRange: event.target.value}, this.getJobsData)
  }

  renderProfileView = () => {
    const {profileData, profileApiStatus} = this.state
    switch (profileApiStatus) {
      case apiStatusConstants.success: {
        const {name, profileImageUrl, shortBio} = profileData
        return (
          <ProfileContainer>
            <ProfileImage src={profileImageUrl} alt="profile" />
            <ProfileName>{name}</ProfileName>
            <ProfileBio>{shortBio}</ProfileBio>
          </ProfileContainer>
        )
      }
      case apiStatusConstants.failure:
        return (
          <ProfileLoaderContainer>
            <ProfileFailureButton type="button" onClick={this.getProfileData}>
              Retry
            </ProfileFailureButton>
          </ProfileLoaderContainer>
        )
      case apiStatusConstants.inProgress:
        return (
          <ProfileLoaderContainer data-testid="loader">
            <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
          </ProfileLoaderContainer>
        )
      default:
        return null
    }
  }

  renderJobsView = () => {
    const {jobsList, jobsApiStatus} = this.state
    switch (jobsApiStatus) {
      case apiStatusConstants.success:
        if (jobsList.length === 0) {
          return (
            <NoJobsContainer>
              <NoJobsImage
                src="https://assets.ccbp.in/frontend/react-js/no-jobs-img.png"
                alt="no jobs"
              />
              <NoJobsHeading>No Jobs Found</NoJobsHeading>
              <NoJobsDescription>
                We could not find any jobs. Try other filters.
              </NoJobsDescription>
            </NoJobsContainer>
          )
        }
        return (
          <JobsListContainer>
            {jobsList.map(each => (
              <JobCardItem key={each.id}>
                <JobCardLink to={`/jobs/${each.id}`}>
                  <JobHeaderContainer>
                    <CompanyLogo src={each.companyLogoUrl} alt="company logo" />
                    <JobTitleContainer>
                      <JobTitle>{each.title}</JobTitle>
                      <RatingContainer>
                        <RatingText>{each.rating}</RatingText>
                      </RatingContainer>
                    </JobTitleContainer>
                  </JobHeaderContainer>
                  <JobDetailsContainer>
                    <LocationContainer>
                      <p>{each.location}</p>
                      <p>{each.employmentType}</p>
                    </LocationContainer>
                    <PackageText>{each.packagePerAnnum}</PackageText>
                  </JobDetailsContainer>
                  <HrLine />
                  <JobDescriptionHeading>Description</JobDescriptionHeading>
                  <JobDescription>{each.jobDescription}</JobDescription>
                </JobCardLink>
              </JobCardItem>
            ))}
          </JobsListContainer>
        )
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
            <RetryButton type="button" onClick={this.getJobsData}>
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
    const {searchInput} = this.state
    const {employmentTypesList, salaryRangesList} = this.props
    return (
      <JobsContainer>
        <Header />
        <JobsLayout>
          <FiltersContainer>
            {this.renderProfileView()}
            <HrLine />
            <FilterHeading>Type of Employment</FilterHeading>
            <CheckboxList>
              {employmentTypesList.map(each => (
                <CheckboxItem key={each.employmentTypeId}>
                  <CheckboxInput
                    type="checkbox"
                    id={each.employmentTypeId}
                    value={each.employmentTypeId}
                    onChange={this.onSelectEmploymentType}
                  />
                  <CheckboxLabel htmlFor={each.employmentTypeId}>
                    {each.label}
                  </CheckboxLabel>
                </CheckboxItem>
              ))}
            </CheckboxList>
            <HrLine />
            <FilterHeading>Salary Range</FilterHeading>
            <RadioList>
              {salaryRangesList.map(each => (
                <RadioItem key={each.salaryRangeId}>
                  <RadioInput
                    type="radio"
                    id={each.salaryRangeId}
                    name="salary"
                    value={each.salaryRangeId}
                    onChange={this.onSelectSalaryRange}
                  />
                  <RadioLabel htmlFor={each.salaryRangeId}>
                    {each.label}
                  </RadioLabel>
                </RadioItem>
              ))}
            </RadioList>
          </FiltersContainer>

          <SearchContainer>
            <SearchInput
              type="search"
              placeholder="Search"
              value={searchInput}
              onChange={this.onChangeSearchInput}
              onKeyDown={this.onEnterSearchInput}
            />
            <SearchButton
              type="button"
              data-testid="searchButton"
              onClick={this.onClickSearchButton}
            >
              <BsSearch className="search-icon" />
            </SearchButton>
            {this.renderJobsView()}
          </SearchContainer>
        </JobsLayout>
      </JobsContainer>
    )
  }
}

export default Jobs
