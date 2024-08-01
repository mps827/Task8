import ProfileLayout from "@/view/layout/ProfileLayout";
import classes from "./style/Profile.module.scss";
import ProfileSidebar from "@/components/profile/ProfileSidebar";
import ProfileAdvertisements from "@/components/profile/ProfileAdvertisments";
const Profile = () => {
  return (
    <ProfileLayout>
      <div className={classes.profile}>
        <div className={" flex w-1/4"}>
          <ProfileSidebar />
        </div>
        <div className={" flex w-3/4 "}>
          <ProfileAdvertisements title="آگهی های من" />
        </div>
      </div>
    </ProfileLayout>
  );
};
export default Profile;
