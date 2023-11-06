import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";
import { Button } from "flowbite-react";

const SocialIcon = () => {
  const { googleLogin, facebookLogin } = useContext(AuthContext);
  const handleSocialLogin = (media) => {
    media()
      .then((result) => console.log(result.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <div className="text-center text-lg p-2 font-bold">continue with </div>
        <div className="flex gap-5 ">
          <Button
            onClick={() => handleSocialLogin(googleLogin)}
            className="text-lg text-white"
          >
            Google
          </Button>
          <Button
            onClick={() => handleSocialLogin(facebookLogin)}
            className="text-lg text-white "
          >
            Facebook
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SocialIcon;
