import "./loging.css";

const Respon = ({ errors }) => {
    return (
        <ul className="error">
            {
                errors.map((error, i) => <li key={i}>{error}</li>)
            }
        </ul>
    )
}

export default Respon;