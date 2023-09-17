import { useNavigate } from "react-router-dom";
import { User } from "iconsax-react";

import BasicButton from "components/BasicButton";

function ProfilePage() {
  //REACT ROUTER
  const navigate = useNavigate();

  //VARIABLES
  const username = localStorage.getItem("username");

  //LOGIC
  const logout = () => {
    localStorage.removeItem("username");
    navigate("/");
  };
  
  return (
    <>
      <div className="mx-auto max-w-[9rem] w-1/2 xs:w-1/4 aspect-square rounded-full border-4 border-sDisabled p-3 mt-[7.75rem]">
        <User variant="TwoTone" className="w-full h-full text-tDisabled" />
      </div>
      <h5 className="mt-3 text-center text-h5-medium text-tPrimary">
        نام کاربری: @{username}
      </h5>
      <BasicButton
        variant="border"
        className="w-full mt-8 md:max-w-max md:mx-auto whitespace-nowrap"
        onClick={logout}
      >
        خروج از حساب کاربری
      </BasicButton>
    </>
  );
}

export default ProfilePage;
