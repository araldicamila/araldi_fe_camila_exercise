import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, UserData} from 'types';
import {getTeamOverview, getUserData} from '../api';
import Card from '../components/Card';
import {Container} from '../components/GlobalComponents';
import Header from '../components/Header';
import List from '../components/List';
import {convertUserToColumns} from './helper';

const convertUserToListItem = (users: UserData[]): ListItem[] => {
    return users.map(user => {
        const columns = convertUserToColumns(user);

        return {
            id: user.id,
            url: `/user/${user.id}`,
            columns,
            navigationProps: user,
        };
    });
};
interface PageState {
    teamLead?: UserData;
    teamMembers?: UserData[];
}

const TeamOverview = () => {
    const location = useLocation();
    const {teamId} = useParams();
    const [pageData, setPageData] = useState<PageState>({});
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeamUsers = async () => {
            const teamOverview = await getTeamOverview(teamId);

            if (!teamOverview) {
                window.location.replace('/');

                return;
            }

            const {teamLeadId, teamMemberIds = []} = teamOverview;

            const teamLead = await getUserData(teamLeadId);

            const teamMembers = await Promise.all(teamMemberIds.map(id => getUserData(id)));

            setPageData({
                teamLead,
                teamMembers,
            });
            
            setIsLoading(false);
        };
        getTeamUsers();
    }, [teamId]);

    return (
        <Container>
            {location && location.state ? <Header title={`Team ${location?.state?.name}`} /> : null}
            {!isLoading && (
                <Card
                    columns={convertUserToColumns(pageData?.teamLead, true)}
                    url={`/user/${pageData?.teamLead?.id}`}
                    navigationProps={pageData?.teamLead}
                />
            )}
            <List
                items={convertUserToListItem(pageData?.teamMembers ?? [])}
                isLoading={isLoading}
            />
        </Container>
    );
};

export default TeamOverview;
