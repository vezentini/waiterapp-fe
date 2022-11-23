import { useState } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'react-datepicker/dist/react-datepicker.css';

import { GlobalStyles } from './styles/GlobalStyles';

import { Header } from './components/Header';
import { Orders } from './components/Orders';
import { Menu } from './components/Menu';
import { Reports } from './components/Reports';

export function App() {
    const [loadingReport, setLoadingReport] = useState(false);

    function handleLoadReport(loadReport: boolean) {
        setLoadingReport(loadReport);
    }

    return (
        <>
            <GlobalStyles />
            <Header />
            <Menu onLoadReport={handleLoadReport}/>
            {loadingReport ? (
                <Reports />
            ) : (
                <Orders />
            )}
            <ToastContainer position='bottom-center' />
        </>
    );
}
