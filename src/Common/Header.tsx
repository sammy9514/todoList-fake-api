import styled from "styled-components";
import pic from "../Assets/react.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div>
      <Container>
        <Main>
          <Logo to={"/"}>
            <span>To-Do</span> List
          </Logo>
          <Button to="/addtask">Add Task</Button>
        </Main>
      </Container>
    </div>
  );
};

const Button = styled(Link)`
  text-decoration: none;
  color: white;
  background-color: black;
  padding: 10px 30px;
  border-radius: 30px;
  transition: all 350ms;
  /* border: 2px solid darkorange; */

  &:hover {
    transform: scale;
    color: white;
    transform: scale(1.1);
  }
`;

const Logo = styled(Link)`
  font-size: 30px;
  text-decoration: none;
  color: black;
  font-weight: bolder;
  transition: all 350ms;

  &:hover {
    color: darkorange;
    /* color: black; */
  }
  span {
    color: darkorange;
    transition: all 350ms;
    &:hover {
      color: black;
    }
  }
`;

const Main = styled.div`
  width: 90%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 70px;
`;
