import { useState } from "react";
import * as S from "./App.styles";
import { Item } from "./types/Item";

import ListItem from "./components/ListItem";
import AddArea from "./components/AddArea";

function App() {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: "Comprar pão na padaria", done: false },
    { id: 2, name: "Comprar um bolo na padaria", done: false },
  ]);

  const handleAddTask = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  return (
    <S.Container>
      <S.Area>
        <S.Header>Lista de Tarefas</S.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, index) => (
          <ListItem key={index} item={item} />
        ))}
      </S.Area>
    </S.Container>
  );
}

export default App;
