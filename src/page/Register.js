import { useFormik } from "formik";

const Register = () => {
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        onSubmit: values => {

        },
    });

    return (
        <div>
            <form className="register-form" onSubmit={formik.handleSubmit}>
                <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input
                    id="password"
                    name="password"
                    type="password"
                    placeholder="Your password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                <input type="submit" value="Submit" />
            </form>
        </div>

    )
}

export default Register;