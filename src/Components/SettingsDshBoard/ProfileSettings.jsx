import PersonalInfo from "./PersonalInfo";
import PhysicalInfo from "./PhysicalInfo";

const ProfileSettings = () => {
  return (
    <div className="flex flex-col gap-6">
      <PersonalInfo />
      <PhysicalInfo />
    </div>
  );
};

export default ProfileSettings;