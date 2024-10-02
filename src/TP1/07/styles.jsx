import styled from "styled-components";

export const CardContainer = styled.div`
  display: block;
  justify-content: center;
  width: 200px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  @media (min-width: 768px) {
    width: 600px;
  }
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;

  @media (min-width: 768px) {
    width: 100px;
    height: 100px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 18px;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }

  p {
    margin: 4px 0;
    color: #666;
  }
`;

export const IconContainer = styled.div`
  display: flex;

  gap: 8px;

  span {
    font-size: 30px;
    cursor: pointer;

    @media (min-width: 768px) {
      font-size: 24px;
    }
  }
`;

export const TaskTable = styled.div`
  padding: 16px;
  background: #fff;
  border-collapse: collapse;

  @media (min-width: 768px) {
    padding: 24px;
  }
`;

export const TaskRow = styled.div`
  display: flex;
  align-items: center;
  

  border: 1px solid #ccc;
  padding: 8px 0;


  }
`;

export const TaskColumn = styled.div`
  flex: 1;
  
  

  input[type="checkbox"] {
    transform: scale(1.2);
  }

  &:first-child {
    width: 40px;
    text-align: center;
  }
`;
