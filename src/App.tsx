import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd"

// dragHandleProps는 해당 지정영역을 눌러야 이동할수있게함
// dragableProps는 해당 영역의 내용들이 옮겨짐
function App() {
  const onDragEnd = () => {};
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div>
        <Droppable droppableId="one">
          {(element)=>
            <ul ref={element.innerRef} {...element.droppableProps}>
              <Draggable draggableId="first" index={0}>
                {(element) => <li ref={element.innerRef} {...element.draggableProps}>
                  <span {...element.dragHandleProps}>❤️</span>
                  One</li>}
              </Draggable>
              <Draggable draggableId="second" index={1}>
                {(element) => <li ref={element.innerRef} {...element.draggableProps} {...element.dragHandleProps}>Two</li>}
              </Draggable>
            </ul>
          }
        </Droppable>
      </div>
    </DragDropContext>
  );
}

export default App;
