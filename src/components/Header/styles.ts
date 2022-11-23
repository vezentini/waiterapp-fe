import styled from 'styled-components';

export const Container = styled.header`
    background: #D73035;
    display: flex;
    justify-content: center;
    height: 198px;
    align-items: center;
`;

export const Content = styled.div`
    width: 100%;
    max-width: 1216px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex: 1;


    .page-details {
        h1 {
            color: #fff;
            font-size: 32px;
        }

        h2 {
            color: #fff;
            font-weight: 400;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }

`;

export const ButtonContainer = styled.menu`
    background: #fff;
    justify-content: center;
    align-items: center;

    button{
        margin-left: 10px;
        background-color: transparent;
        border: none;

        strong {
            color: #D73035;
            font-weight: 600;
            font-size: 16px;
            opacity: 0.9;
            margin-top: 6px;
        }
    }
`;

