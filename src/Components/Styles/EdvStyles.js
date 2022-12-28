import styled from 'styled-components'

export const Label = styled.label`
 
color: cadetblue;
font-size: 1.5em;
text-align: right;
`;
 
export const Title = styled.h1`
font-size: 2.5em;
text-align: center;
color: cadedblue;
`;
      
export const Input = styled.input`
  font-size: 18px;
  color: cadetblue;
  padding: 10px;
  margin: 10px;
  background: smokewhite;
  border: 1px solid cadetblue;
  border-radius: 25px;
  ::placeholder {
    color: cadetblue;
  }
`;

export const Button = styled.button`
  color: cadetblue;
  font-size: 20px;
  margin: 10px;
  padding: 5px 20px;
  border: 2px solid cadetblue;
  border-radius: 15px;
`;

export const Select = styled.select`
  width: 220px;
  height: 50px;
  background: smokewhite;
  font-size: 20px;
  color: cadetblue;
  padding-left: 5px;
  font-size: 14px;
  border: 1px solid cadetblue;
  border-radius: 25px;
  margin-left: 10px;

  option {
    color: cadetblue;
    font-size: 20px;
    background: smokewhite;
    display: flex;
    white-space: pre;
    min-height: 30px;
    padding: 0px 2px 1px;
  }
`;

export const Line = styled.line`
 

  width: 112px;
  height: 47px;
  border-bottom: 2px solid cadetblue;


`;