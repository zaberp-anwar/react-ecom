import styled from 'styled-components';




export const ButtonContainer = styled.button `
text-transform:capitalize;
font-size:1.3rem;
background:transparent;
border:0.05rem solid var(--lightBlue);
boder-color: ${props =>props.cart ? "var(--lightBlue)" :"var(--mainYellow)"};

color: ${prop => (prop.cart ? "var(--mainYellow) " :  "var(--lightBlue) ")};
padding:0.2rem 0.5rem;
transition:all 0.4s ease-in-out;
cursor:pointer;
margin:0.2rem 0.5rem 0.2rem 0;
&:hover{
  background:${prop => (prop.cart ? "var(--mainYellow) " :  "var(--lightBlue) ")};
  color:var(--lightBlue);
}
&:focus {
  outline:none;
}
`
