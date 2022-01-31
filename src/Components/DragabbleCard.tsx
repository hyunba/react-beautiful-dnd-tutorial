import React from "react";
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";

const Card = styled.div`
  background-color: ${(props) => props.theme.cardColor};
  padding: 10px 10px;
  border-radius: 5px;
  margin-bottom: 5px;
`;

interface IDragabbleCardProps {
    toDo: string;
    index: number;
}

function DragabbleCard({toDo, index}: IDragabbleCardProps){
    return (
        <Draggable key={toDo} draggableId={toDo} index={index}>
            {(element) => (<Card ref={element.innerRef} {...element.draggableProps} {...element.dragHandleProps}>
                            <span>❤️</span>
                            {toDo}</Card>)}
        </Draggable>
    );
}
// React.memo는 기존의 React가 가지고 있는 rendering 기능을 무차별로 사용하면 기능이 저하되는 부분을 막기 위해
// 이 prop이 바뀌지 않는이상 rerendering을 하지 않도록 하는 기능이다.
export default React.memo(DragabbleCard);