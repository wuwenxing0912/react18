import { TopNav } from "../components/TopNav";
import { Gradient } from "../components/Gradient";
import { Icon } from "../components/Icon";

export const SignInPage: React.FC = () => {
  return (
    <div>
      <Gradient>
        <TopNav icon={<Icon name="back" />} title="登录" />
      </Gradient>
    </div>
  );
};
