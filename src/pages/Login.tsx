import { Button, Row } from "antd";
import { useLoginMutation } from "../redux/features/auth/authApi";
import { useAppDispatch } from "../redux/hook";
import { TUser, setUser } from "../redux/features/auth/authSlice";
import { verifyToken } from "../utils/verifyToken";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import PHFrom from "../components/form/PHFrom";
import PHInput from "../components/form/PHInput";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [login] = useLoginMutation();

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = async (data: any) => {
    console.log(data);
    const loading = toast.loading("Please wait");
    try {
      const userInfo = {
        id: data.id,
        password: data.password,
      };

      const res = await login(userInfo).unwrap();
      const user = verifyToken(res.data.accessToken) as TUser;

      dispatch(setUser({ user, token: res.data.accessToken }));
      toast.success("Login success", { id: loading, duration: 2000 });

      navigate(`/${user.role}/dashboard`);
    } catch (error) {
      toast.error("Something went wrong", { id: loading, duration: 2000 });
    }
  };
  return (
    <Row justify={"center"} align={"middle"} style={{ height: "100vh" }}>
      <PHFrom onSubmit={onSubmit}>
        {/* <input type="text" id="id" {...register("id")} /> */}
        <PHInput type={"text"} name={"id"} label={"ID:"} />

        {/* <input type="text" id="password" {...register("password")} /> */}
        <PHInput type={"text"} name={"password"} label={"Password:"} />

        <Button htmlType="submit">Login</Button>
      </PHFrom>
    </Row>
  );
};

export default Login;
