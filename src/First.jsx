import Nature from './components/Nature.jpeg'
let name="mittal";
let age=23;
export  {name,age};

const Func= () => {
    const imgname="https://i.imgur.com/7vQD0fPs.jpg";
    const name="Virat";
    return (
        <>
        <p>{name}</p>
    
    <img className="picture" src={require("/home/mohit/Desktop/ReactPractice/myreact/src/components/Nature.jpeg")} alt="nature" />
    <img className="newpic" src={Nature} alt="natures"/>
    <img className='anothepic' src={imgname} alt='nature1'/>
    </>
    );
}
export default Func;    