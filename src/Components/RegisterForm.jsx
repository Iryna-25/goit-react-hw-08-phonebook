import { Form, Input, Label, Button } from "../Components/ContactForm.styled";

export default function RegisterForm() {
  return (
    <Form>
      <Label htmlFor="login">Login</Label>
      <Input type="text" name="login"/>

      <Label htmlFor="password">Password</Label>
      <Input type="text" name="password"/>
    
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input type="text" name="confirmPassword"/>

      <Button type="button">Sign Up</Button>
  </Form>
  )
};