import React from 'react';
import {useLocation} from 'react-router-dom';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import {convertUserToColumns} from './helper';

const UserOverview = () => {
    const location = useLocation();

    return (
        <Container>
            <Header title={`User: ${location?.state?.firstName} ${location?.state?.lastName}`} />
            <Card
                columns={convertUserToColumns(location?.state)}
                hasNavigation={false}
                navigationProps={location?.state}
                cardMargin='2rem 0'
            />
        </Container>
    );
};

export default UserOverview;
