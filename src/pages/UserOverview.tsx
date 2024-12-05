import React, {useEffect} from 'react';
import {useLocation} from 'react-router-dom';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import {convertUserToColumns} from './helper';

const UserOverview = () => {
    const location = useLocation();
    
    useEffect(() => {
        if (!location.state) {
            window.location.replace('/');
        }
    }, [location]);

    return (
        <Container>
            <Header title={`User ${location?.state?.firstName} ${location?.state?.lastName}`} />
            <Card
                columns={convertUserToColumns(location?.state)}
                hasNavigation={false}
                navigationProps={location?.state}
            />
        </Container>
    );
};

export default UserOverview;
