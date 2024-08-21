import Breadcrums from "@/app/components/layout/Breadcrums";
import { makeBreadcrum, Link } from "@/app/datasets/breadcrums";
const UserBreadcrum: React.FC = () => {
  const breadCrums: Link[] = makeBreadcrum("users", "Users");

  return (
    <>
      <Breadcrums links={breadCrums}/>
    </>
  );
};

export default UserBreadcrum;
