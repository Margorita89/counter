import React, {useState} from "react";
import Counter from "./counter";

const CountersList = () => {
    const initialState = [
        { id: 0, value: 0, name: "Ненужная вещь", price: "200"},
        { id: 1, value: 4, name: "Ложка"},
        { id: 2, value: 0, name: "Вилка"},
        { id: 3, value: 0, name: "Тарелка"},
        { id: 4, value: 0, name: "Набор минималиста"},
    ];
    const [counters, setCounters] = useState(initialState);

    const handleDelete= (id) => {
        const newCounters = counters.filter(c=> c.id !== id);
        setCounters(newCounters);
    };

    const handleIncrement = (id) => {
    const newCounters = counters.map(c => {
			if (c.id !== id) return c;
			c.value += 1;
			return c;
		});
		setCounters(newCounters);
};

    const handleDecrement = (id) => {
    const newCounters = counters.map(c => {
			if (c.id !== id) return c;
			c.value -= 1;
			return c;
		});
		setCounters(newCounters);
};

    const handleReset = () => {
        setCounters(initialState);
    };

    return (
        <>
            {counters.map((count) => (
                <Counter key={count.id} onDelete={handleDelete} {...count} onIncrement={handleIncrement} onDecrement={handleDecrement}/>
                ))};
                <button className="btn btn-primary btn-sm m2" onClick={handleReset}>Сброс</button>
        </>
    );
};

export default CountersList;
