import { Button } from "~/components/ui/button";

const AuthPage = () => {
  return (
    <div className="flex flex-col justify-center items-center flex-1/2 gap-2">
      <h1>Sign Up Page</h1>
      <Button className="bg-custom-primary w-1/2">Login</Button>
      <Button className="bg-custom-primary w-1/2">Register</Button>
    </div>
  );
};

export default AuthPage;
