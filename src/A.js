import Counter from "./Counter";

const A = ({ count, increase }) => {
  return (
    <div>
      <button
        onClick={increase}
        className="border border-black w-10 bg-green-500 m-10"
      >
        A {count}{" "}
      </button>
    </div>
  );
};
export default Counter(A);
