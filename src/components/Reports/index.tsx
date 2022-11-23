import React, { useState } from 'react';
import { Container } from './styles';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

export function Reports() {
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date());

    function handleGenerateReport() {
        return [];
    }

    return (
        // don't forget to wrap your DatePickers
        <Container>
            <DatePicker
                selected={startDate}
                selectsStart
                startDate={startDate}
                endDate={endDate} // add the endDate to your startDate DatePicker now that it is defined
                onChange={(date:Date) => setStartDate(date)}
            />
            <DatePicker
                selected={endDate}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                onChange={(date:Date) => setEndDate(date)}
            />
        </Container>
    );

    // return (
    //     <>
    //         <FilterContainer className='row'>
    //             <DateContainer>
    //                 <DatePicker
    //                     selected={startDate}
    //                     onChange={(date:Date) => setStartDate(date)}
    //                     startDate={startDate}
    //                     endDate={endDate}
    //                 />
    //                 <DatePicker
    //                     selected={endDate}
    //                     onChange={(date:Date) => setEndDate(date)}
    //                     startDate={startDate}
    //                     endDate={endDate}
    //                     minDate={startDate}
    //                 />
    //             </DateContainer>
    //         </FilterContainer>
    //         <Container>
    //             <div className='row'>
    //                 <strong>Sem relatórios até o momento!</strong>
    //             </div>
    //         </Container>
    //     </>
    // );
}
