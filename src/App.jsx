/** @format */
// profile
import Profile from './components/profile/Profile.jsx';
import userData from './userdata.json';
// friends
import FriendList from './components/friendlist/FriendList';
import friends from './friends.json';
// transactions
import TransactionHistory from './components/transactionhistory/TransactionHistory';
import transactions from './transactions.json';

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};

export default App;
