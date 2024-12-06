import {UserData} from 'types';

export const convertUserToColumns = (user: UserData, itsTeamLead?: boolean) => {
    if (!user) {
        return [];
    }

    const columns = [
        {
            key: 'Name',
            value: `${user.firstName} ${user.lastName}`,
        },
        {
            key: 'Display Name',
            value: user.displayName,
        },
        {
            key: 'Location',
            value: user.location,
        },
    ];

    if (itsTeamLead) {
        return [
            {
                key: 'Team Lead',
                value: '',
            },
            ...columns,
        ];
    }

    return columns;
};