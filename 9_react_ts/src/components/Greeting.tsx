type GreetingProps = {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
	return <div>
    <h3>Olá, {name}</h3>
  </div>;
};

export default Greeting;
