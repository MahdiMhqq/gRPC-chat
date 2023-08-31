import { User } from "iconsax-react";

import BasicButton from "components/BasicButton";

const username = "mamad";

function ProfilePage() {


  return (
    <>
      <div className="mx-auto max-w-[9rem] w-1/2 xs:w-1/4 mt-4 aspect-square rounded-full border-4 border-sDisabled p-3 mt-[7.75rem]">
        <User variant="TwoTone" className="text-tDisabled w-full h-full" />
      </div>
      <h5 className="text-h5-medium text-tPrimary text-center mt-3">
        نام کاربری: @{username}
      </h5>
      <BasicButton
        kind="border"
        className="w-full md:max-w-max md:mx-auto mt-8 whitespace-nowrap"
      >
        خروج از حساب کاربری
      </BasicButton>
    </>
  );
}

export default ProfilePage;
