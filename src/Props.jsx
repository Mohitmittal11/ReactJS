import React from 'react'

const Props = () => {
  return <Student name="divyansh" course="MCA" num1={5} num2={10}/>
}

function Student(props)
{
    const sum=props.num1 + props.num2;
    return (
        <>
            <p>my name is {props.name} and I am currently pursuing {props.course}</p>
            <p>Sum of above num1 and num2 is {sum}</p>
        </>
    )
};
export default Props;
