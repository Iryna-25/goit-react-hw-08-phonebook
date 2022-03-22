import { Form, Input, Label, Button } from "../Components/ContactForm.styled";

export default function RegisterForm() {
  return (
    <Form>
      <Label htmlFor="login">Login</Label>
      <Input type="text" name="login" placeholder="Enter login" />

      <Label htmlFor="password">Password</Label>
      <Input type="text" name="password" placeholder="Enter password" />
    
      <Label htmlFor="confirmPassword">Confirm Password</Label>
      <Input type="text" name="confirmPassword" placeholder="Confirm password" />

      <Button type="button">Sign Up</Button>
  </Form>
  )
};