import styled from 'styled-components'

export const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #000000;
  font-family: 'Roboto';
`

export const LoginCard = styled.form`
  display: flex;
  flex-direction: column;
  background-color: #202020;
  border-radius: 12px;
  width: 90%;
  max-width: 450px;
  padding: 40px;
  box-shadow: 0px 4px 16px rgba(0, 0, 0, 0.3);
`

export const WebsiteLogo = styled.img`
  width: 130px;
  align-self: center;
  margin-bottom: 30px;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`

export const Label = styled.label`
  color: #f8fafc;
  font-size: 12px;
  font-weight: bold;
  margin-bottom: 8px;
  letter-spacing: 1px;
`

export const LoginInput = styled.input`
  background-color: transparent;
  border: 1px solid #64748b;
  border-radius: 4px;
  height: 40px;
  padding-left: 15px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  outline: none;
`

export const LoginButton = styled.button`
  background-color: #6366f1;
  color: #ffffff;
  border: none;
  border-radius: 4px;
  height: 40px;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  margin-top: 10px;
`

export const ErrorMessage = styled.p`
  color: #ff0b37;
  font-size: 12px;
  margin-top: 10px;
  margin-bottom: 0px;
`
