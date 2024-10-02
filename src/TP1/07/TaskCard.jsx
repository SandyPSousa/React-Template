import React from "react";
import {
  CardContainer,
  ProfileSection,
  Image,
  Info,
  IconContainer,
  TaskTable,
  TaskRow,
  TaskColumn
} from "./styles";

export default function TaskCard() {
  return (
    <CardContainer>
      <ProfileSection>
        <Image
          src="https://via.placeholder.com/100"
        />
        <Info>
          <h2>Sandy Sousa</h2>
          <p>01/10/2000</p>
          <p>Tech</p>
          <p>Frontend Developer</p>
        </Info>
        <IconContainer>
          <span>📧</span>
          <span>📞</span>
          <span>💼</span>
        </IconContainer>
      </ProfileSection>

    
      <TaskTable>
        <TaskRow>
          <TaskColumn>
            <strong>Status</strong>
          </TaskColumn>
          <TaskColumn>
            <strong>Task</strong>
          </TaskColumn>
        </TaskRow>
        <TaskRow>
          <TaskColumn>
            <input type="checkbox" />
          </TaskColumn>
          <TaskColumn>Task 1</TaskColumn>
        </TaskRow>
        <TaskRow>
          <TaskColumn>
            <input type="checkbox" />
          </TaskColumn>
          <TaskColumn>Task 2</TaskColumn>
        </TaskRow>
        <TaskRow>
          <TaskColumn>
            <input type="checkbox" />
          </TaskColumn>
          <TaskColumn>Task 3</TaskColumn>
        </TaskRow>
      </TaskTable>
    </CardContainer>
  );
}
