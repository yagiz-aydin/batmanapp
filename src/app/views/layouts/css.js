import styled from "styled-components";

export const Home = styled.div`
  padding-top:10%;
  margin: auto;
  width: 50%;
  text-align: center;
`;

export const Background = styled.body`
    background-color: #000;
`;

export const BatLogo = styled.div`
    background: url('https://i.ibb.co/0D5mGD9/bat.png') no-repeat ;
    height:314px;
    width:640px;
    display: inline-block;
    &:hover {
    background: url('https://i.ibb.co/rp5kL0w/bathover.png') no-repeat ;
    }
    `;

export const Text = styled.h1`
   color: #fff;
    `;

export const Text1 = styled.h1`
   color: #fff;
   font-size:32px;
    `;

export const Text2 = styled.h2`
   color: #fff;
   font-size:24px;
    `;

export const Wrapper = styled.section`
    padding: 5px 5px;
    &:hover {
    -webkit-box-shadow: inset 0px 0px 296px 200px rgba(219,161,0,1);
    -moz-box-shadow: inset 0px 0px 296px 200px rgba(219,161,0,1);
    box-shadow: inset 0px 0px 296px 200px rgba(219,161,0,1);
    }
    `;
