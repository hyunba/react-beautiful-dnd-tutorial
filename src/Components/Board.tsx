import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

interface IAreaProps{
  isDraggingOver: boolean;
  isDraggingFromThis: boolean;
}

const Wrapper = styled.div`
  width: 200px;
  padding-top: 10px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
`;

const Area = styled.div<IAreaProps>`
  background-color: ${(props) => (props.isDraggingOver ? "#dfe6e9" : props.isDraggingFromThis ? "#b2bec3" : "transparent")};
  flex-grow: 1;
  transition: background-color .3s ease-in-out;
  padding: 20px;
`;

const Title = styled.h2`
  text-align: center;
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
      <Wrapper>
        <Title>{boardId}</Title>
          <Droppable droppableId={boardId}>
              {(element, snap)=>
                <Area isDraggingFromThis={Boolean(snap.draggingFromThisWith)} isDraggingOver={snap.isDraggingOver} ref={element.innerRef} {...element.droppableProps}>
                  {toDos.map((toDo, index) => (
                    <DragabbleCard key={toDo} toDo={toDo} index={index}></DragabbleCard>
                  ))}
                  {element.placeholder}
                </Area>
              }
          </Droppable>
      </Wrapper>
    );
}

export default Board;