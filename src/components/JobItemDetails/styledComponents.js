import styled from 'styled-components'

export const JobDetailsRouteContainer = styled.div`
  min-height: 100vh;
  background-color: #000000;
  font-family: 'Roboto';
  color: #ffffff;
`

export const JobDetailsCard = styled.div`
  background-color: #202020;
  border-radius: 12px;
  padding: 40px;
  width: 90%;
  max-width: 1100px;
  margin: 40px auto;
`

export const JobHeaderContainer = styled.div`
  display: flex;
  gap: 20px;
  align-items: flex-start;
`

export const CompanyLogo = styled.img`
  width: 70px;
  height: 70px;
`

export const JobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const JobTitle = styled.h1`
  color: #ffffff;
  font-size: 22px;
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

export const HrLine = styled.hr`
  border: 1px solid #475569;
  margin: 25px 0px;
`

export const JobDescriptionHeadingContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`

export const JobDescriptionHeading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin: 0px;
`

export const VisitLink = styled.a`
  color: #6366f1;
  font-size: 14px;
  font-weight: bold;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 5px;
`

export const JobDescription = styled.p`
  color: #f8fafc;
  font-size: 14px;
  line-height: 1.6;
  margin-bottom: 30px;
`

export const SkillsHeading = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const SkillsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  margin: 0px 0px 30px 0px;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const SkillItem = styled.li`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 30%;
`

export const SkillImage = styled.img`
  width: 40px;
  height: 40px;
`

export const SkillName = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  margin: 0px;
`

export const LifeAtCompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    align-items: center;
  }
`

export const LifeAtCompanyDescription = styled.p`
  color: #f8fafc;
  font-size: 14px;
  line-height: 1.6;
  margin: 0px;
  flex: 1;
`

export const LifeAtCompanyImage = styled.img`
  width: 100%;
  max-width: 400px;
  border-radius: 8px;
`

export const SimilarJobsHeading = styled.h1`
  color: #ffffff;
  font-size: 24px;
  font-weight: bold;
  width: 90%;
  max-width: 1100px;
  margin: 40px auto 20px auto;
`

export const SimilarJobsList = styled.ul`
  list-style-type: none;
  padding: 0px;
  width: 90%;
  max-width: 1100px;
  margin: 0px auto 60px auto;
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`

export const SimilarJobItem = styled.li`
  background-color: #202020;
  border-radius: 12px;
  padding: 24px;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 31%;
  }
`

export const SimilarJobHeader = styled.div`
  display: flex;
  gap: 15px;
  align-items: flex-start;
  margin-bottom: 15px;
`

export const SimilarCompanyLogo = styled.img`
  width: 50px;
  height: 50px;
`

export const SimilarJobTitleContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const SimilarJobTitle = styled.h1`
  color: #ffffff;
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 5px;
`

export const SimilarJobDescription = styled.p`
  color: #f8fafc;
  font-size: 13px;
  line-height: 1.5;
  margin-bottom: 20px;
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
