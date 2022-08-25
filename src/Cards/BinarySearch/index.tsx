import React, { useState } from 'react';
import Input from '../../components/Input';
import Header from '../../components/Header';
import Result from '../../components/Result';

type BinarySearchProps = {

}
const BinarySearch = (props: BinarySearchProps) => {
    const title = "Pesquisa Binária"
    const text = "A busca binária é realizada em uma lista ordenada. A cada rodada o valor da busca é comparado com o da metade da busca anterior.Isso torna a busca muito mais rápida.";

    const [list, setList] = useState<number[]>([]);
    const [item, setItem] = useState<number>(1);
    const [result, setResult] = useState<string | number>('');

    const handleStartSearch = () => {
        if (list.length < item) {
            setResult('A lista deve conter seu tamanho maior ou igual ao índice de busca.')
            return;
        } else {
            setResult(binarySearch(list, item));
            return;
        }
    }
    const getLenghtList = (lenghtList: number) => {        
        const arrayList = [];
        for (let i = 0; i < lenghtList; i++) {
            arrayList.push(i);
        }
        setList(arrayList);
    }

    const getItemSearch = (getItem: number) => {
        setItem(Number(getItem));
    }
    const binarySearch = (createList: number[], itemSearch: number) => {
        let low = 0;
        let hight = createList.length - 1;
        let times = 1;
        let showMiddleNumber = Math.round(createList.length / 2);
        while (low <= hight) {
            let middle = Math.round((low + hight) / 2);
            let kick = createList[middle];
            showMiddleNumber = Math.round(showMiddleNumber / 2);
            if (kick === itemSearch) {
                return times;
            }
            if (kick > itemSearch) {
                hight = middle - 1;
            } else {
                low = middle + 1;
            }
            times++;
        }

        return 'none';
    }

    return (
        <>
            <Header title={title}>{text}</Header>
            <div className="content">
                <p>Digite o tamanho da lista:</p>
                <Input type="number" handleChange={getLenghtList} minValue={2} />
                <p>Digite item de busca:</p>
                <Input type="number" handleChange={getItemSearch} minValue={1} />
                <button onClick={handleStartSearch}>Buscar</button>
                <Result result={result} complementText=" etapas para localizar seu número." />
            </div>
        </>
    )
}

export default BinarySearch;
