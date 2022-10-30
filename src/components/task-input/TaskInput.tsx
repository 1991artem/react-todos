import { Form } from "react-bootstrap";

export default function TaskInput(){
  return(
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Please enter a task</Form.Label>
        <Form.Control type="email" placeholder="What needs to be done?" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>
      </Form>
  )
}