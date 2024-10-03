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
`;

export const ProfileSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  align-items: center;
  background: #f7f7f7;
  border-bottom: 1px solid #ddd;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 0;
    font-size: 18px;
  }

  h2 {
    font-size: 30px;
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
  }
`;

export const TaskTable = styled.div`
  padding: 16px;
  background: #fff;
  border-collapse: collapse;
  @media (min-width: 400px) {
    flex: 1;
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

export const ResponsiveWrapper = styled.div`
  @media (min-width: 400px) {
    ${CardContainer} {
      width: 600px;
    }

    ${ProfileSection} {
      flex-direction: row;
    }

    ${Image} {
      width: 35%;
      height: 60%;
    }

    ${Info} {
      flex: 1;
      padding: 10px;
    }

    ${IconContainer} {
      flex-direction: column;
      align-self: center;
      align-items: center;
      padding: 10px;
    }

    ${TaskTable} {
      flex: 1;
      justify-content: space-around;
      
    }
  }

  ${TaskColumn} {
    justify-content: space-between;
    display: flex;
    padding: 5px;
    
  }
}
`;
