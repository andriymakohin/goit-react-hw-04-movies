import styled from "styled-components";

export const Button = styled.button`
  margin-left: 1.05em;
  cursor: pointer;
  font-size: 1em;
  height: 1.9rem;
  border: none;
  background: rgba(106, 90, 205, 0.8);
  color: #fff;
  font-weight: 500;
  width: 100px;
  font-size: 1em;
`;
export const Article = styled.div`
  display: flex;
  margin-left: 1em;
`;
export const Poster = styled.img`
  display: block;
  max-width: 400px;
`;
export const Title = styled.h1``;
export const Text = styled.p`
  text-align: left;
`;
export const Subtitle = styled.h2``;
export const Section = styled.div`
  max-width: 500px;
  padding-left: 3em;
  padding-top: 1em;
`;
export const List = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  position: relative;
  padding-bottom: 1em;
  li {
    a {
      text-decoration: none;
      button {
        margin-left: 1.05em;
        font-weight: 500;
        font-size: 1em;
        cursor: pointer;
        font-size: 1em;
        height: 1.9rem;
        border: none;
        background: rgba(106, 90, 205, 0.8);
        color: #fff;
        width: 100px;
      }
    }
  }
`;
export const ListGenres = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
`;
export const Item = styled.li`
  padding-right: 1em;
`;
