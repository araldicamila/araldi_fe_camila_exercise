import React from 'react';
import {useLocation} from 'react-router-dom';
import EmptyState from '../components/EmptyState';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import {convertUserToColumns} from './helper';


const UserOverview = () => {
    const location = useLocation();

    if (!location?.state) {
        return <EmptyState />;
    }

    return (
        <Container>
            <Header title={location?.state ? `User: ${location?.state?.firstName} ${location?.state?.lastName}` : ''} />
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
