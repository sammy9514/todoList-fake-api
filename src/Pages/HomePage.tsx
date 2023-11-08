import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import styled from "styled-components";
import { deletaTask, getTask, updateTask } from "../Api/Api";
import moment from "moment";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const [state, setState] = useState<Array<{}>>([]);
  useEffect(() => {
    getTask().then((res) => {
      setState(res);
    });
  }, []);

  const urgencyColor = (urgent: any) => {
    // if (urgent === "Important") {
    //   return "#ff0000c0";
    // } else if (urgent === "Casual") {
    //   return "#00808092";
    // } else if (urgent === "Fair") {
    //   return "#ffd90092";
    // }
    return urgent === "Important"
      ? "#ff0000c0"
      : urgent === "Casual"
      ? "#00808092"
      : urgent === "Fair"
      ? "#ffd90092"
      : "white";
  };

  return (
    <div>
      <Container>
        <Main>
          {state.length === 0 ? (
            <Hold>
              <DefaultText>No Task Yet</DefaultText>
              <Button to="/addtask">Add Task</Button>
            </Hold>
          ) : (
            state?.map((props: any) => (
              <Card
                key={props.id}
                style={{ backgroundColor: urgencyColor(props.urgency) }}
              >
                <Right>
                  <Text>{props.task}</Text>

                  <Both>
                    <View>{props.urgency}</View>
                    <Time>{moment(props.time).fromNow()}</Time>
                  </Both>
                </Right>

                <Left>
                  <Close>
                    <Div>
                      <AiOutlineClose
                        onClick={() => {
                          // deleteTask(props.id)
                          //   .then((res) => {
                          //     setState(
                          //       state.filter((task) => task?.id !== props.id)
                          //     );
                          //     // setState(res);
                          //   })
                          //   .catch((error) => {
                          //     console.log(error);
                          //   });

                          deletaTask(props.id)
                            .then(() => {
                              setState(
                                state.filter((task) => task.id !== props.id)
                              );
                            })
                            .catch((error) => {
                              console.log(error);
                            });
                        }}
                      />
                    </Div>
                  </Close>
                  <Edit
                    to={"/addtask"}
                    onClick={() => {
                      updateTask(props.id)?.then((res) => {
                        props.task = res.data;
                      });
                    }}
                  >
                    Edit
                  </Edit>
                </Left>
              </Card>
            ))
          )}
        </Main>
      </Container>
    </div>
  );
};
const Button = styled(Link)`
  text-decoration: none;
  color: black;
  padding: 10px 30px;
  border-radius: 30px;
  transition: all 350ms;
  border: 2px solid darkorange;
  transition: all 350ms;

  &:hover {
    background-color: black;
    transform: scale;
    color: darkorange;
  }
`;

const DefaultText = styled.div`
  font-size: 30px;
  font-weight: 600;
  color: #2c2c2c55;
`;
const Hold = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;
  background-color: whitesmoke;
`;
const Div = styled.div``;
const Edit = styled(Link)`
  background-color: black;
  color: white;
  padding: 5px 18px;
  font-size: 15px;
  border-radius: 30px;
`;

const Close = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;

  &:hover {
    ${Div} {
      transform: rotate(90);
    }
    cursor: pointer;
  }
`;

const Left = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  /* width: 50px; */
`;

const Time = styled.div`
  margin-right: 20px;
`;

const View = styled.div`
  flex: 1;
  font-weight: 500;
  font-size: 15px;
`;

const Both = styled.div`
  display: flex;
  font-size: 12px;
`;

const Text = styled.div`
  font-size: 12px;
  flex: 1;
`;

const Right = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Card = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  border: 1px solid silver;
  padding: 5px;
  display: flex;
  margin: 10px;
  background-color: #ffd90092;
  color: #2f2f2f;
  text-transform: capitalize;
`;

const Main = styled.div`
  width: 95%;
  display: flex;
  flex-wrap: wrap;
`;

const Container = styled.div`
  width: 100%;
  min-height: calc(100vh - 85px);
  display: flex;
  justify-content: center;
`;
