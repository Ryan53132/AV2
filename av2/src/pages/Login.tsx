import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router-dom";

export default function Login() {
    const navigate = useNavigate();
    const Logar = (e: React.FormEvent) => {
        e.preventDefault();
        navigate("/Aerocode");
    };
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={Logar}>
          
          <div className="mb-4">
            <Label
              htmlFor="username"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Username
            </Label>
            <Input
              type="text"
              id="username"
              className="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={"a"}
            />
          </div>
          <div className="mb-6">
            <Label
              htmlFor="password"
              className="block mb-2 text-sm font-bold text-gray-700"
            >
              Password
            </Label>
            <Input
              type="password"
              id="password"
              className="w-64 px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
              value={"a"}
            />
          </div>
          <Button
            type="submit"
            
          >
            Log In
          </Button>
        </form>
        <p><small>Click no botao para logar </small></p>
        </div>
      </div>
    </>
  );
}
