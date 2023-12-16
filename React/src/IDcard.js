export default function IDcard(props) {

    let name = props.obj1.name
    let age = props.obj1.age
    let dob = props.obj1['date of birth']
    return (
        <>
            Name: {name} <br></br>
            age: {age} <br></br>
            date of birth: {dob} <br></br>

        </>
    )
}