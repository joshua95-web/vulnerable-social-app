import { withPageAuthRequired } from "@auth0/nextjs-auth0";
import { useUser } from "@auth0/nextjs-auth0";

const Profile = () => {
  const { user, error, isLoading } = useUser();

  return (
    <div>
      <main>
        <h1>User Profile</h1>
      </main>
    </div>
  );
};
export default withPageAuthRequired(Profile);
