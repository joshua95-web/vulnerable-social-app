import { withPageAuthRequired } from "@auth0/nextjs-auth0";
const Profile = () => {
  return <div>User Profile</div>;
};
export default withPageAuthRequired(Profile);
