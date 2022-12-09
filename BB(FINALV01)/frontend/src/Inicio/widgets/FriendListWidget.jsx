import { Box, Typography, useTheme } from '@mui/material';
import Friend from "components/Friend";
//import WidgeyWarrepper from 'components/WidgeyWarrepr';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFriends } from 'state';

const FriendListWidget = () => {
    const dispatach = useDispatch();
    const { palette } = useTheme();
    const token = useSelector(state => state.token);
    const friends = useSelector(state => state.friends);

    const getFriends = async () => {
        // eslint-disable-next-line no-undef
        const response = await fetch(`http://localhost:3002/users/${userId}friends`, {
            method: 'GET',
            headers: { Authorization: `Bearer ${token}` }
        });
        const data = await response.json();
        dispatach(setFriends({ friends: data }));

    };
    useEffect(() => {
        return (
            <>
                <Typography variant="h6" color="textPrimary">Amigos</Typography>
                <Box display="flex" flexDirection="collum" gap="1">
                    {friends.map(friend => (
                        <Friend
                            key={friend.id}
                            friendId={friend._id}
                            name={`{friend.firstName} {friend.lastName}`}
                            subtitle={friend.ocuppation}
                            userPictrue={friend.picturePath} />))
                    }
                </Box>
            </>

        )
    });

}
export default FriendListWidget;