import { Form, Input, Label, Button } from "../Components/ContactForm.styled";

export default function LoginForm() {
  return (
    <Form>
      <Label htmlFor="login">Login</Label>
      <Input type="text" name="Login" />
      
      <Label htmlFor="password">Password</Label>
      <Input type="password" name="password" />

      <Button type="button">Log In</Button>
    </Form>
  )
};