import styled from 'styled-components';
import BasicTable from './table';


const InfoStyles = styled.p`
    color: white;
`;

const TableStyles = styled.table`
    color: white;
    border: 1px solid white;
`;


const MoreInfo = () => {
return (
	<>
		<InfoStyles>
            Looking for your new best friend? The following organizations can help you find and adopt the perfect companion:
        </InfoStyles>
		
        <BasicTable />
	</>
);
}



export default MoreInfo