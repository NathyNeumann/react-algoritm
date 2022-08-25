import React, { useRef, useState } from 'react';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Result from '../../components/Result';

type OrderBySelectionProps = {

}
const OrderBySelection = (props: OrderBySelectionProps) => {
    const title = "Ordenação por Seleção"
    const text = "Digite o número que deseja adionar e click em ADICONAR.";

    const [list, setList] = useState<number[]>([]);
    const [item, setItem] = useState<number | string>('');
    const [result, setResult] = useState<number[]>([]);
    const inRef = useRef<HTMLInputElement>(null)
    const cleanAndFocus = () => {
        getItem(item);
        inRef.current && inRef.current.focus()
        setItem('')
    }
    
    const getItem = (item: number | string) => {
        if(typeof item === 'string') {
            return;
        }
        setList(prev => [...prev, Number(item)]);
    }
    const OrderBySelection = (arr: number[]) => {
        let n = arr.length;
            for (let i = 0; i < n - 1; i++) {
                let min_idx = i;
                for (let j = i + 1; j < n; j++) {
                    if (arr[j] < arr[min_idx]) {
                        min_idx = j;
                    }
                }
                let temp = arr[min_idx];
                arr[min_idx] = arr[i];
                arr[i] = temp;
            }
            setResult(arr);
    }

    return (
        <>
            <Header title={title}>{text}</Header>
            <div className="content">
                <p>Digite o número que deseja adionar e click em ADICONAR.</p>
                <input type="number" value={item} onChange={(e)=>setItem(Number(e.target.value))} ref={inRef} min={2} />
                <button onClick={()=>cleanAndFocus()}>ADICIONAR</button>
                <p>Quando a quando a quantidade de números for suficiente, click em ORDENAR</p>
                <button onClick={()=>OrderBySelection(list)}>ORDENAR</button>
                <Result result={result.toString()} complementText=" são seus números em ordem crescente." />
            </div>
        </>
    )
}

export default OrderBySelection;
