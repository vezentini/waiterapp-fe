import styled from 'styled-components';

export const Content = styled.div`
    background: #fff;
    height: 50px;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ButtonContainer = styled.div`
    justify-content: space-between;

    button{
        background-color: transparent;
        border: none;
        border-bottom: 2px solid #D73035;
        cursor: pointer;

        & + button {
            margin-left: 30px;
        }

        strong {
            color: #D73035;
            font-weight: 600;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;

