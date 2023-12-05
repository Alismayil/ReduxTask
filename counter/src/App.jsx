import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { InputBolme, InputCixma, InputEdedOrta, InputToplama, InputVurma, bolme, cixma, ikiEdedinBolunmesi, ikiEdedinCixilmasi, ikiEdedinToplanmasi, ikiEdedinVurulmasi, input1Value, input2Value, toplama, vurma } from './counterSlice'
import Todos from './todos'
"react-redux"

function App() {
  const count = useSelector(state => state.counter.value)
  const number = useSelector(state => state.counter.number)

  const twoNumCount = useSelector(state => state.counter.twoNumValue)
  const num1 = useSelector(state => state.counter.num1)
  const num2 = useSelector(state => state.counter.num2)

  const calculatorValue = useSelector(state => state.counter.calculatorValue)
  const inp1 = useSelector(state => state.inp1)
  const inp2 = useSelector(state => state.inp2)

  const dispatch=useDispatch()

  const handleToplama = () => {
    dispatch(toplama())
  }
  const handleCixma = () => {
    dispatch(cixma())
  }
  const handleVurma = () => {
    dispatch(vurma())
  }
  const handleBolme = () => {
    dispatch(bolme())
  }


// ---------------------------------------


  function handleIkiEdedinToplanmasi() {
    dispatch(ikiEdedinToplanmasi())
  } 
  function handleIkiEdedinCixilmasi() {
    dispatch(ikiEdedinCixilmasi())
  } 
  function handleIkiEdedinVurulmasi() {
    dispatch(ikiEdedinVurulmasi())
  } 
  function handleIkiEdedinBolunmesi() {
    dispatch(ikiEdedinBolunmesi())
  }

  // -----------------------------------------
  function handleTakeInp1(e) {
    dispatch(input1Value(e.target.value))
  }

  function handleTakeInp2(e) {
    dispatch(input2Value(e.target.value))

  }

  function inputlarToplama() {
    dispatch(InputToplama())
  }

  function inputlarCixma() {
    dispatch(InputCixma())
  }

  function inputlarVurma() {
    dispatch(InputVurma())
  }

  function inputlarBolme() {
    dispatch(InputBolme())
  }

  function inputlarEdedOrta() {
   dispatch( InputEdedOrta())
  }
  return (
    <div className='App' style={{ display: 'flex', gap: '100px' }}>
      <div style={{background:"blue", padding:"0px 50px 50px"}}>
      <div style={{ display: 'flex', gap: '60px' }}>
        <p> Number: {number}</p>
        {/* <p>Num2: {num2}</p> */}
      </div>
      <div style={{ display: 'flex', gap: '100px' }}>
        <button onClick={handleToplama} >+</button>
        <button onClick={handleCixma}>-</button>
      </div>
      <h1>{count}</h1>
      <div style={{ display: 'flex', gap: '100px' }}>
      <button onClick={handleVurma}>*</button>
      <button onClick={handleBolme}>/</button>
      </div>
      </div>
      <div style={{backgroundColor:'red', padding:"0px 50px 50px"}}>
       <div style={{ display: 'flex', gap: '60px' }}>
       <p>Num1: {num1}</p>
        <p>num2: {num2}</p>
       </div>
       <div style={{ display: 'flex', gap: '100px' }}>
        <button onClick={handleIkiEdedinToplanmasi}>+</button>
        <button onClick={handleIkiEdedinCixilmasi}>-</button>
       </div>
        <h1>{twoNumCount}</h1>
        <div style={{ display: 'flex', gap: '100px' }}>
        <button onClick={handleIkiEdedinVurulmasi}>*</button>
        <button onClick={handleIkiEdedinBolunmesi}>/</button>
       </div>
      </div>
    <div style={{display:'flex', flexDirection:'column'}}>
      <input type="text" value={inp1} onChange={handleTakeInp1} />
      <input type="text" value={inp2} onChange={handleTakeInp2} />
      <button onClick={inputlarToplama}>+</button>
      <button onClick={inputlarCixma}>-</button>
      <button onClick={inputlarVurma}>*</button>
      <button onClick={inputlarBolme}>/</button>
      <button onClick={inputlarEdedOrta}>EdedOrta</button>
      <p>Cavab: {calculatorValue}</p>
    </div>

    <Todos/>

    </div>
  )
}

export default App
