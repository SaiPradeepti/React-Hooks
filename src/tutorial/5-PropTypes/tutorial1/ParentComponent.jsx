import React from 'react'
import PropTypes from 'prop-types'

const details = {
    name: 'Bob',
    age: 25,
    company: 'XYZ',
    role: 'Sr. Dev',
    department: 'Software Development',
    skills: ['React', 'MERN', 99],
    isCertified: true,
}

const ParentComponent = props => {
    return (
        <div>
            <h1>I'm the parent component</h1>
            <h3><PersonComponent  details={details}/></h3>
        </div>
    )
}

export default ParentComponent;

const defaultName = 'unknown'

const PersonComponent = (props) => {
    return (
        <div>
            <p>{props.details.name || defaultName} - {props.details.age}</p>
            <br />
            <p>Job Details -</p>
            <p>company - {props.details.company}</p>
            <p>role - {props.details.role}</p>
            <p>department - {props.details.department}</p>
            <p>skills - 
            {
                props.details.skills.map((item,index) => {
                    return <span key={index}>{item} </span>
                })
            }
            </p>
            <p>Is Certified: {props.details.isCertified ? 'Y' : 'N'}</p>
        </div>
    )
}

PersonComponent.propTypes = {
    details: PropTypes.shape({
        name: PropTypes.string,
        // age: PropTypes.number,
        age: PropTypes.oneOfType([PropTypes.string,PropTypes.number]),
        company: PropTypes.string.isRequired,
        role: PropTypes.string,
        department: PropTypes.string,
        skills: PropTypes.arrayOf(PropTypes.string),
        isCertified: PropTypes.bool,
    })
}

// PersonComponent.defaultProps = {
//     name : 'unknown'
// };
