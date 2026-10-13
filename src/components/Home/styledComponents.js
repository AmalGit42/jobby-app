import styled from 'styled-components'

export const HomeContainer = styled.div`
  min-height: 100vh;
  background-image: url('https://assets.ccbp.in/frontend/react-js/home-lg-bg.png');
  background-size: cover;
  background-position: center;
  background-color: #000000;
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
`

export const HomeContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-grow: 1;
  padding: 60px;
  max-width: 600px;
`

export const Heading = styled.h1`
  color: #ffffff;
  font-size: 48px;
  font-weight: bold;
  margin-bottom: 20px;
  line-height: 1.2;
`

export const Description = styled.p`
  color: #f8fafc;
  font-size: 18px;
  line-height: 1.6;
  margin-bottom: 30px;
`

export const FindJobsButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  width: 130px;
`
