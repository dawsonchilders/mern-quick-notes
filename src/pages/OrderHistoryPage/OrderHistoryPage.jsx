import { checkToken } from '../../utilities/users-service';
// import * as usersService from '../../utilities/users-service';

// remove all checkToken and handleCheckToken before cloning for future use
export default function OrderHistoryPage() {
  async function handleCheckToken() {
    await checkToken()
    const expDate = await checkToken();
    console.log(expDate)
  }

  return (
    <>
      <h1>OrderHistoryPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}