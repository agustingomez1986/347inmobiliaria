import styled from 'styled-components';

export const Legend = styled.legend`
  margin-bottom: 10px;
`;

export const InputBox = styled.div`
  position: relative;
`;

export const TextareaBox = styled.div`
  position: relative;
`;

export const Input = styled.input`
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #C8C8C8;
  border-radius: 4px;
  color: #464646;
  font-size: 16px;
  font-weight: 400;
  height: 50px;
  line-height: 20px;
  margin-bottom: 20px;
  padding: 20px 10px 10px;
  width: 250px;

  &:focus {
    outline: none;
  }

  &:not(:placeholder-shown) + Label {
    font-size: 12px;
    top: 0.25rem;
    transition: all 0.25s;
  }

  &:focus + Label {
    font-size: 12px;
    top: 0.25rem;
    transition: all 0.25s;
  }

  &::placeholder {
  visibility: hidden;
  }
`;

export const Textarea = styled.textarea`
  background-color: #ffffff;
  border: none;
  border-bottom: 1px solid #C8C8C8;
  border-radius: 4px;
  color: #464646;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  margin-bottom: 20px;
  padding: 20px 10px 10px;
  width: 250px;
  height: 82px;

  &:focus {
    outline: none;
  }

  &:not(:placeholder-shown) + Label {
    font-size: 12px;
    top: 0.25rem;
    transition: all 0.25s;
  }

  &:focus + Label{
    font-size: 12px;
    top: 0.25rem;
    transition: all 0.25s;
  }

  &::placeholder {
    visibility: hidden;
  }
`;

export const Label = styled.label`
  color: #a2a2a2;
  left: 10px;
  position: absolute;
  top: 20px;
  transition: all 0.25s;
  pointer-events: none;
`;

export const FooterButton = styled.button`
  background-color: #b38867;
  border: none;
  color: #ffffff;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  padding: 12px;

  &:focus{
    outline: none;
  }

  &:active{
    animation: dissolve 300ms;
  }
`;