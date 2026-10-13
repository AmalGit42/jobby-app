import styled from 'styled-components'
import {Link} from 'react-router-dom'

export const JobsContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  font-family: 'Roboto';
  color: #ffffff;
`

export const JobsLayout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    gap: 40px;
  }
`

export const FiltersContainer = styled.div`
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 25%;
  }
`

export const ProfileContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/profile-bg.png');
  background-size: cover;
  background-position: center;
  border-radius: 8px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`

export const ProfileLoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`

export const ProfileImage = styled.img`
  width: 50px;
  height: 50px;
  margin-bottom: 10px;
`

export const ProfileName = styled.h1`
  color: #6366f1;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const ProfileBio = styled.p`
  color: #2c364c;
  font-size: 14px;
  line-height: 1.4;
  margin: 0px;
`

export const ProfileFailureButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
`

export const HrLine = styled.hr`
  border: 1px solid #475569;
  margin: 20px 0px;
`

export const FilterHeading = styled.h1`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 15px;
`

export const CheckboxList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const CheckboxItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const CheckboxInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const CheckboxLabel = styled.label`
  color: #f8fafc;
  font-size: 14px;
  cursor: pointer;
`

export const RadioList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const RadioItem = styled.li`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const RadioInput = styled.input`
  width: 16px;
  height: 16px;
  cursor: pointer;
`

export const RadioLabel = styled.label`
  color: #f8fafc;
  font-size: 14px;
  cursor: pointer;
`

export const SearchContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const SearchInput = styled.input`
  background-color: transparent;
  border: 1px solid #475569;
  border-radius: 4px 0px 0px 4px;
  height: 40px;
  padding-left: 15px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  outline: none;
  width: 100%;
  max-width: 450px;
`

export const SearchButton = styled.button`
  background-color: #202020;
  border: 1px solid #475569;
  border-left: none;
  border-radius: 0px 4px 4px 0px;
  height: 40px;
  width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  outline: none;
  color: #ffffff;
`

export const JobsListContainer = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`

export const JobCardItem = styled.li`
  background-color: #202020;
  border-radius: 12px;
  padding: 24px;
`

export const JobCardLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
`

export const JobHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`

export const CompanyLogo = styled.img`
  width: 60px;
  height: 60px;
`

export const JobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const JobTitle = styled.h1`
  color: #ffffff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const RatingContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`

export const RatingText = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
`

export const JobDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`

export const LocationContainer = styled.div`
  display: flex;
  gap: 20px;
  color: #f8fafc;
  font-size: 14px;
`

export const PackageText = styled.p`
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  margin: 0px;
`

export const JobDescriptionHeading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const JobDescription = styled.p`
  color: #f8fafc;
  font-size: 14px;
  line-height: 1.6;
  margin: 0px;
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 400px;
`

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  text-align: center;
`

export const FailureImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const FailureHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const FailureDescription = styled.p`
  color: #64748b;
  font-size: 16px;
  margin-bottom: 20px;
`

export const RetryButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  font-family: 'Roboto';
  font-size: 14px;
  cursor: pointer;
`

export const NoJobsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px;
  text-align: center;
`

export const NoJobsImage = styled.img`
  width: 300px;
  margin-bottom: 20px;
`

export const NoJobsHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
`

export const NoJobsDescription = styled.p`
  color: #64748b;
  font-size: 16px;
`