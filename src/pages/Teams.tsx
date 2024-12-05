import React, {useState, useEffect} from 'react';
import {ListItem, Teams as TeamsList} from 'types';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

const convertTeamToListItem = (teams: TeamsList[]): ListItem[] => {
    return teams.map(team => {
        const columns = [
            {
                key: 'Name',
                value: team.name,
            },
        ];

        return {
            id: team.id,
            url: `/team/${team.id}`,
            columns,
            navigationProps: team,
        };
    });
};

const Teams = () => {
    const [teams, setTeams] = useState<TeamsList[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();
            setTeams(response);
            setIsLoading(false);
        };
        getTeams();
    }, []);

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <List items={convertTeamToListItem(teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
