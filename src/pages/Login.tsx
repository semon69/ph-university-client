import { Button } from "antd";
import { useForm } from "react-hook-form";
import { useLoginMutation } from "../redux/features/auth/authApi";


const Login = () => {
  const { register, handleSubmit } = useForm();

  const [login, { data, error }] = useLoginMutation();

  console.log("data => ", data);
  console.log("error => ", error);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const onSubmit = (data: any) => {
    login(data);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID: </label>
        <input type="text" id="id" {...register("id")} />
      </div>
      <div>
        <label htmlFor="id">Password: </label>
        <input type="text" id="password" {...register("password")} />
      </div>
      <Button htmlType="submit"> Login</Button>
    </form>
  );
};

export default Login;
