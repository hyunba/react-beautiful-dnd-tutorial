import { Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  padding: 20px 10px;
  padding-top: 30px;
  background-color: ${(props) => props.theme.boardColor};
  border-radius: 5px;
  min-height: 300px;
`;

interface IBoardProps {
  toDos: string[];
  boardId: string;
}

function Board({toDos, boardId}: IBoardProps) {
    return (
        <Droppable droppableId={boardId}>
            {(element)=>
              <Wrapper ref={element.innerRef} {...element.droppableProps}>
                {toDos.map((toDo, index) => (
                  <DragabbleCard key={toDo} toDo={toDo} index={index}></DragabbleCard>
                ))}
                {element.placeholder}
              </Wrapper>
            }
        </Droppable>
    );
}

export default Board;