import * as React from 'react';
import {useNavigate} from 'react-router-dom';
import {IoArrowBackOutline} from 'react-icons/io5';
import {HeaderContainer, NavigationHeader, BackButton, Title} from './styles';

interface Props {
    title: string;
    showBackButton?: boolean;
}

const Header = ({title, showBackButton = true}: Props) => {
    const navigate = useNavigate();
    return (
        <HeaderContainer>
            <NavigationHeader>
                {showBackButton && (
                    <BackButton
                        onClick={() => {
                            navigate(-1);
                        }}
                    >
                        <IoArrowBackOutline />
                    </BackButton>
                )}
                <Title>{title}</Title>
            </NavigationHeader>
        </HeaderContainer>
    );
};

export default Header;
