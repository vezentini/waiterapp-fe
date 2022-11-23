import { Content, ButtonContainer } from './styles';

interface MenuProps {
    onLoadReport: (loadReport: boolean) => void;
}

export function Menu({ onLoadReport }: MenuProps) {
    return(
        <>
            <Content>
                <ButtonContainer>
                    <button
                        type='button'
                        onClick={() => onLoadReport(false)}
                    >
                        <strong>Pedidos</strong>
                    </button>
                    <button
                        type='button'
                        onClick={() => onLoadReport(true)}
                    >
                        <strong>Relatórios</strong>
                    </button>
                </ButtonContainer>
            </Content>
        </>
    );
}
