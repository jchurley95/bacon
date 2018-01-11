import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.div`
    height: 70px;
    color: green;
`

const Header = () => {
    return (
        <HeaderStyled>
            Bacon Header
        </HeaderStyled>
    );
};

export default Header;