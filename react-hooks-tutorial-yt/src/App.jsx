import { useState , useEffect , useContext , useRef, useReducer, useMemo, useCallback} from 'react';
import './App.css'
import ShinCodeContext from './main';

const reducer = (state , action) => {
  switch(action.type) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
      default:
      return state; 
  }
};

function App() {
  const [count , setCount] = useState(0);
  const shincodeinfo = useContext(ShinCodeContext);
  const ref = useRef();
  const [state , dispatch] = useReducer(reducer, 0);

  const handleClick = () => {
    setCount(count + 1 );
  };

  useEffect(() => {
    console.log("Hello Hooks");
    ///この中ではsetCountを使わない（依存関係がある時）
  },[count]);

  const handleRef = () => {
    console.log(ref);
  };

  //useMemo
  const [count01, setCount01] = useState(0);
  const [count02, setCount02] = useState(0);
  

  const square = useMemo(() => {
    let i = 0;
    while(i < 20) {
      i++;
    }
    console.log("クリックされました");
    return count02 * count02; 
  },[count02]);

  //useCallBack　関数のメモ化
  const [counter , setCounter] = useState(0);

  const showCount = useCallback(() => {
    alert('これは思い処理です');
  },[counter]);

  //カスタムフック
  const [age , setAge] = useLocalStorage("age" , 24);

  return <div className='App' >
    <h1>useState, useEffect</h1>
    <button onClick={handleClick}>＋</button>
    <p>{count}</p>

    <hr />
    <h1>useContext</h1>
    <p>{shincodeinfo.name}</p>
    <p>{shincodeinfo.age}</p>

    <hr />
    <h1>useRef</h1>
    <input type='text' ref={ref}/>
    <button onClick={handleRef}>UseRef</button>

    <hr/>
    <h1>useReduser</h1>
    <p>カウント：{state}</p>
    <button onClick={() => dispatch({ type: "increment"})}>+</button>
    <button onClick={() => dispatch({ type: "decrement"})}>-</button>

    <hr />
    <h1>useMemo</h1>
    <div>カウント：{count01}</div>
    <div>カウント：{count02}</div>
    <div>結果：{square}</div>
    <button onClick={() => setCount01(count01 + 1)}>＋</button>
    <button onClick={() => setCount02(count02 + 1)}>＋</button>

    <hr/>
    <h1>useCallBack</h1>
    <SomeChild showCount={showCount} />

    <hr/>
    <h1>カスタムフック</h1>
    <p>{age}</p>
    <button onClick={() => sessionStorage(80)} ></button>
    </div>
}

export default App;

//useState
//viewの際レンダリング= 変数countが変化した時に前domと後domとの差分を監視
//realdomで変化を出力

//useEffect
//発火のタイミングを設定= 第二引数に示したタイミング。[]に変化させたい変数を入れる

//useContext
//コンポーネントからコンポーネントへデータを渡すときに使用
//ひとつのコンポーネントからデータが欲しいコンポーネントへ直接渡すことができる、どこから貰ったものなのかが一目で確認できる

//useRef
//inputから入力されたものの詳細を取得できる

//useReduser
//あまり使わない

//useMemo
//あまり使わない、多用もしない
//重い処理があった時にメモリに保存されている値を画面を先に表示

//useCallBack
//useMemoの関数を返す

//
