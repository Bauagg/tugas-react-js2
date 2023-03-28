import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "./loging.css";
import React from 'react';
import Respon from './respon';

class Loging extends React.Component {
    state = {
        email: "",
        password: "",
        errors: []
    }

    hendelForm = (event) => {
        event.preventDefault();

        const { email, password } = this.state;
        let message = []

        if (email.length === 0) {
            message = [...message, `Email tidak boleh kosong`]
        }
        if (password.length === 0) {
            message = [...message, `password tidak boleh kosong`]
        }

        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if (!re.test(String(email).toLowerCase())) {
            message = [...message, `Email tidak valid`]
        }
        if (password.length < 8) {
            message = [...message, `Password harus 8 karakter`]
        }
        if (message.length > 0) {
            this.setState({ errors: message }, () => console.log(this.state.errors))
        } else {
            alert(`
            kamu telah berhasil Login
            Email : ${this.state.email}
            Password : ${this.state.password}`)
            this.setState({ errors: [] })
        }

    }

    render() {
        return (
            <div className='loging'>
                <Form className='container-log' onSubmit={this.hendelForm}>
                    <h1 className='log-h1'>Login</h1>
                    {
                        this.state.errors && <Respon errors={this.state.errors} />
                    }
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" name='email'
                            onChange={(e) => this.setState({ email: e.target.value }, () => console.log(this.state.email))} />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" name='password'
                            onChange={(e) => this.setState({ password: e.target.value }, () => console.log(this.state.password))} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default Loging;