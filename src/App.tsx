import { AddNewItem } from "./components/AddNewItem/AddNewItem.component";
import { Card } from "./components/Card/Card.component";
import { Column } from "./components/Column/Column.component";
import { AppContainer } from "./styles";

export const App = () => {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Prgress">
        <Card text="Learn Typescript with React" />
      </Column>
      <Column text="Done">
        <Card text="Begin using static type" />
      </Column>
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={() => console.log("added")}
      />
    </AppContainer>
  );
};
