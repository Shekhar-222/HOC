import Counter from "./Counter";

function B({ count, increase }) {
  return (
    <div>
      <button
        onMouseOver={increase}
        className="border border-black w-10 bg-rose-500 m-10"
      >
        B {count}{" "}
      </button>
    </div>
  );
}

export default Counter(B);
