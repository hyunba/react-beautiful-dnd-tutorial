import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  max-width: 480px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(1, 1fr);
`;

const Board = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

const toDos = ["a", "b", "c", "d", "e", "f"];

// dragHandleProps는 해당 지정영역을 눌러야 이동할수있게함
// dragableProps는 해당 영역의 내용들이 옮겨짐
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          <Droppable droppableId="one">
            {(element)=>
              <Board ref={element.innerRef} {...element.droppableProps}>
                {toDos.map((toDo, index) => (<Draggable draggableId={toDo} index={index}>
                  {(element) => (<Card ref={element.innerRef} {...element.draggableProps} {...element.dragHandleProps}>
                    <span>❤️</span>
                    {toDo}</Card>)}
                </Draggable>))}
                <Draggable draggableId="second" index={1}>
                  {(element) => <Card ref={element.innerRef} {...element.draggableProps} {...element.dragHandleProps}>Two</Card>}
                </Draggable>
                {element.placeholder}
              </Board>
            }
          </Droppable>
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}

export default App;
