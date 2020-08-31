import styled from "styled-components";

export const List = styled.ul`
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  list-style: none;
`;

export const Item = styled.li`
  a {
    text-decoration: none;
    font-size: 1.3em;
    color: #000;
    font-weight: 500;
    img {
      margin: 5px;
      width: 300px;
      height: 400px;
    }
  }
`;

// export const Item = styled.a`
// img {

// }
// `;

export const Wrap = styled.div`
  margin-left: 1em;
`;
