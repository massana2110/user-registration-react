import PropTypes from "prop-types";

export const UserFormInput = ({ ...props }) => {

    return (
        <>
            <label htmlFor={props.name}>{ props.label }</label>
            <input
                value={props.value}
                type={props.type}
                id={props.name}
                name={props.name}
                onChange={(e) => props.onChange(e)}
            />
        </>
    )
}

UserFormInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
}