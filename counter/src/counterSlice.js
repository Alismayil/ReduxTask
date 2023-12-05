import {createSlice} from "@reduxjs/toolkit"

const initialState={
    value:1,
    number:5,

    twoNumValue:0,
    num1:10,
    num2:2,

    calculatorValue:0
}

const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
       
        toplama:(state)=>{
            state.value=state.value+state.number
        },
        cixma:(state)=>{
            state.value=state.value-state.number
        }
        ,
        bolme:(state)=>{
            state.value=state.value/state.number
        },
        vurma:(state)=>{
            state.value=state.value*state.number
        },

        // -------------------------

        ikiEdedinToplanmasi:(state)=>{
            state.twoNumValue=state.num1+state.num2
        },
        ikiEdedinCixilmasi:(state)=>{
            state.twoNumValue=state.num1-state.num2
        },
        ikiEdedinVurulmasi:(state)=>{
            state.twoNumValue=state.num1*state.num2
        },
        ikiEdedinBolunmesi:(state)=>{
            state.twoNumValue=state.num1/state.num2
        },

        // ----------------------------

        input1Value:(state,actions)=>{
            state.inp1=actions.payload
        },
        input2Value:(state,actions)=>{
            state.inp2=actions.payload
        },
        InputToplama:(state)=>{
            state.calculatorValue=parseFloat(state.inp1)+parseFloat(state.inp2)
        },
        InputCixma:(state)=>{
            state.calculatorValue=parseFloat(state.inp1)-parseFloat(state.inp2)
        },
        InputVurma:(state)=>{
            state.calculatorValue=parseFloat(state.inp1)*parseFloat(state.inp2)
        },
        InputBolme:(state)=>{
            state.calculatorValue=parseFloat(state.inp1)/parseFloat(state.inp2)
        },
        InputEdedOrta:(state)=>{
            state.calculatorValue=(parseFloat(state.inp1)+parseFloat(state.inp2))/2
        }

    }
})

export const {cixma,toplama,vurma,bolme,
    ikiEdedinVurulmasi,ikiEdedinCixilmasi,ikiEdedinToplanmasi,ikiEdedinBolunmesi,
    input1Value,input2Value,
    InputToplama,InputCixma,InputVurma,InputBolme,InputEdedOrta}=counterSlice.actions

export default counterSlice.reducer