import React, {useState, useEffect} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {ListItem, UserData} from 'types';
import Input from 'components/Input';
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

    const [filteredUsers, setFilteredUsers] = useState<UserData[]>();
    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        const getTeamUsers = async () => {
            const teamOverview = await getTeamOverview(teamId);

            if (!teamOverview) {
                setPageData({
                    teamLead: null,
                    teamMembers: null,
                });

                setIsLoading(false);

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

    const onChangeSearchInput = (value: string) => {
        setSearchValue(value);

        if (!value) {
            setFilteredUsers(pageData?.teamMembers);
        }

        setFilteredUsers(
            pageData?.teamMembers?.filter(user =>
                user.displayName?.toLowerCase()?.includes(value.toLowerCase())
            )
        );
    };

    return (
        <Container>
            {location && location.state ? <Header title={`Team: ${location?.state?.name}`} /> : null}
            {!isLoading && (
                <Card
                    columns={convertUserToColumns(pageData?.teamLead, true)}
                    url={`/user/${pageData?.teamLead?.id}`}
                    navigationProps={pageData?.teamLead}
                    cardMargin='1rem 0'
                />
            )}
            <Input onChange={onChangeSearchInput} value={searchValue} />
            <List
                items={convertUserToListItem(filteredUsers ?? pageData?.teamMembers ?? [])}
                isLoading={isLoading}
            />
        </Container>
    );
};

export default TeamOverview;
