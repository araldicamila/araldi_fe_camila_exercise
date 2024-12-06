import React, {useState, useEffect} from 'react';
import {ListItem, Teams as TeamsList} from '../types';
import Input from '../components/Input';
import {getTeams as fetchTeams} from '../api';
import Header from '../components/Header';
import List from '../components/List';
import {Container} from '../components/GlobalComponents';

const convertTeamToListItem = (teams: TeamsList[]): ListItem[] => {
    return teams?.map(team => {
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
    const [filteredTeams, setFilteredTeams] = useState<TeamsList[]>();
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const [searchValue, setSearchValue] = useState<string>('');

    useEffect(() => {
        const getTeams = async () => {
            const response = await fetchTeams();

            if (!response) {
                setTeams([]);
            } else {
                setTeams(response);
            }
            
            setIsLoading(false);
        };

        getTeams();
    }, []);

    const onChangeSearchInput = (value: string) => {
        setSearchValue(value);

        if (!value) {
            setFilteredTeams(teams);
        }

        setFilteredTeams(
            teams.filter(team => team.name?.toLowerCase()?.includes(value.toLowerCase()))
        );
    };

    return (
        <Container>
            <Header title="Teams" showBackButton={false} />
            <Input onChange={onChangeSearchInput} value={searchValue} />
            <List items={convertTeamToListItem(filteredTeams ?? teams)} isLoading={isLoading} />
        </Container>
    );
};

export default Teams;
