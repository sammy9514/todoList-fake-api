import { useState } from "react";
import styled from "styled-components";
import { createTask } from "../Api/Api";
import { useNavigate } from "react-router-dom";

const AddTask = () => {
  const navigate = useNavigate();
  const [task, setTask] = useState<string>("");
  const [urgency, setUrgency] = useState<string>("Important");
  const [state, setState] = useState("");

  const changeColor = (color: any) => {
    setState(color);
  };

  return (
    <div>
      <Container>
        <Main>
          <Input
            placeholder="Enter your choice task Here!!!"
            value={task}
            onChange={(e: any) => {
              setTask(e.target.value);
            }}
          />

          <Select
            value={urgency}
            onChange={(e: any) => {
              setUrgency(e.target.value);
            }}
          >
            <Option value={"Important"}>Important</Option>
            <Option value={"Casual"}>Casual</Option>
            <Option value={"Fair"}>Fair</Option>
          </Select>

          <Button
            onClick={() => {
              console.log(urgency, task);
              const id = Math.floor(Math.random() * new Date().getTime());
              const data = {
                id,
                time: new Date().getTime(),
                urgency,
                task,
              };

              createTask(data).then(() => {
                navigate("/");
              });
            }}
          >
            Add This Task
          </Button>
        </Main>
      </Container>
    </div>
  );
};

export default AddTask;

const Button = styled.div`
  width: 90%;
  height: 50px;
  border-radius: 5px;
  border: 1px solid silver;
  outline: none;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 600;
  margin-top: 30px;
  background-color: black;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 450ms;

  &:hover {
    cursor: pointer;
    transform: scale(1.01);
  }
`;

const Option = styled.option`
  &:hover {
    background-color: darkorange;
  }
`;

const Select = styled.select`
  width: 90%;
  height: 40px;
  border-radius: 5px;
  border: 1px solid silver;
  outline: none;
  font-family: Poppins;
  font-size: 15px;
  font-weight: 500;
`;

const Input = styled.textarea`
  margin: 10px;
  outline: none;
  border-radius: 10px;
  height: 300px;
  width: 90%;
  resize: none;
  padding: 10px;
  border: 1px solid silver;
  font-family: Poppins;
  text-transform: capitalize;

  &::placeholder {
    font-family: Poppins;
  }
`;

const Main = styled.div`
  width: 70%;
  min-height: 500px;
  border-radius: 10px;
  border: 1px solid silver;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
`;
