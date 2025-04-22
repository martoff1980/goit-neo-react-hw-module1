import FriendListItem from '../friendlistitem/FriendListItem';
import './FriendList.css';

const FriendList = ({ friends }) => {
  return (
    <div className="friend-list">
      <ul>
        {friends.map(({ id, avatar, name, isOnline }) => (
          <li key={id}>
            <FriendListItem avatar={avatar} name={name} isOnline={isOnline} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FriendList;
