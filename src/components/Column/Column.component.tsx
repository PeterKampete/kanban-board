import { FC } from "react";
import { AddNewItem } from "../AddNewItem/AddNewItem.component";
import { ColumnContainer, ColumnTitle } from "./Column.styles";

interface ColumnProps {
  text: string;
  children?: React.ReactNode;
}

export const Column: FC<ColumnProps> = ({ text, children }) => {
  return (
    <ColumnContainer>
      <ColumnTitle>{text}</ColumnTitle>
      {children}
      <AddNewItem
        toggleButtonText="+ Add another task"
        onAdd={() => {
          console.log("added new task");
        }}
        dark
      />
    </ColumnContainer>
  );
};
